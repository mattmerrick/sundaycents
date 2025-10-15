import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// Canonicalize host and strip tracking query parameters to prevent duplicate content
export function middleware(request: NextRequest) {
  const url = new URL(request.url)

  const targetHost = 'www.mattmerrick.com'
  let shouldRedirect = false

  // Force primary hostname
  if (url.hostname === 'mattmerrick.com') {
    url.hostname = targetHost
    shouldRedirect = true
  }

  if (url.hostname === 'sundaycents.com' || url.hostname === 'www.sundaycents.com') {
    url.hostname = targetHost
    shouldRedirect = true
  }

  // Strip common tracking params
  const paramsToStrip = [
    'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id', 'utm_referrer',
    'gclid', 'fbclid', 'msclkid',
    'ref', 'source', 'campaign',
    'igshid', 'mc_cid', 'mc_eid'
  ]

  for (const param of paramsToStrip) {
    if (url.searchParams.has(param)) {
      url.searchParams.delete(param)
      shouldRedirect = true
    }
  }

  // If only a trailing '?' remains after deletions, clean it up
  if (url.search === '?') {
    url.search = ''
    shouldRedirect = true
  }

  if (shouldRedirect) {
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

// Exclude API routes, Next internals, and static assets from middleware
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
}


