import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 600,
}

export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: 80,
          background: '#ffffff',
          color: '#000000',
          fontSize: 92,
          fontWeight: 800,
          fontFamily: 'Inter, Arial, sans-serif',
        }}
      >
        <div>Sunday Cents</div>
      </div>
    ),
    { ...size }
  )
}


