import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
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
        email_address: email,
        fields: {
          FirstName: '', // You can expand this to collect names if needed
        },
        status: 'SUBSCRIBED'
      })
    })

    const data = await response.json()

    if (response.ok) {
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
