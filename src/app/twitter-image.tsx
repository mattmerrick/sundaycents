import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 600,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <img
        src="/TLDR.png"
        alt="TLDR Money Logo"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    ),
    { 
      ...size,
      headers: {
        'Content-Type': 'image/png',
      },
    }
  )
}


