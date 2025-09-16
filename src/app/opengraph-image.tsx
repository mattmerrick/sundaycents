import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: 'white',
              margin: '0 0 20px 0',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Morning Markets
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: 'rgba(255,255,255,0.9)',
              margin: '0 0 10px 0',
              fontWeight: '500',
            }}
          >
            Markets made simple — in 5 minutes a day
          </p>
          <p
            style={{
              fontSize: '24px',
              color: 'rgba(255,255,255,0.8)',
              margin: '0',
              fontWeight: '400',
            }}
          >
            Daily insights on stocks, investing, and what's moving the market
          </p>
        </div>
      </div>
    ),
    { 
      ...size,
      headers: {
        'Content-Type': 'image/png',
      },
    }
  )
}
