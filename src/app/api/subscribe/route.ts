import { NextRequest, NextResponse } from 'next/server'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    const normalizedEmail = typeof email === 'string' ? email.trim() : ''

    // Validate email
    if (!EMAIL_REGEX.test(normalizedEmail)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Get environment variables
    const apiKey = process.env.EMAILOCTOPUS_API_KEY
    const listId = process.env.EMAILOCTOPUS_LIST_ID

    if (!apiKey || !listId) {
      console.error('Missing Email Octopus configuration')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Subscribe to Email Octopus
    const response = await fetch(`https://emailoctopus.com/api/1.6/lists/${listId}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: apiKey,
        email_address: normalizedEmail.toLowerCase(),
        fields: {
          FirstName: '', // You can expand this to collect names if needed
        },
        status: 'SUBSCRIBED'
      })
    })

    const data = await response.json()

    if (response.ok) {
      // Fire server-side tracking to DataFast (best-effort)
      const dfApiKey = process.env.DATAFAST_API_KEY
      const dfEndpoint = process.env.DATAFAST_API_ENDPOINT || 'https://datafa.st/api/goals'
      if (dfApiKey) {
        const url = request.nextUrl
        const utm_source = url.searchParams.get('utm_source') || ''
        const utm_medium = url.searchParams.get('utm_medium') || ''
        const utm_campaign = url.searchParams.get('utm_campaign') || ''
        const referrer = request.headers.get('referer') || ''
        const user_agent = request.headers.get('user-agent') || ''
        const ip =
          (request.headers.get('x-forwarded-for') || '').split(',')[0]?.trim() ||
          (request as any).ip ||
          ''

        // Do not block response if DataFast is unavailable
        fetch(dfEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${dfApiKey}`,
          },
          body: JSON.stringify({
            goal_name: 'newsletter_subscribed',
            properties: {
              email,
              utm_source,
              utm_medium,
              utm_campaign,
              referrer,
              page: url.pathname,
              user_agent,
              ip,
            },
          }),
        }).catch(() => {})
      }

      return NextResponse.json(
        { message: 'Successfully subscribed!' },
        { status: 200 }
      )
    } else {
      // Handle Email Octopus specific errors
      if (data.error && data.error.code === 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS') {
        return NextResponse.json(
          { error: 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS', message: 'Email already subscribed' },
          { status: 409 }
        )
      }

      console.error('Email Octopus error:', data)
      return NextResponse.json(
        { error: 'Subscription failed', message: data.error?.message || 'Unknown error' },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
