import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const size = {
  width: 1200,
  height: 600,
}

export const contentType = 'image/png'

export default async function Image() {
  const imagePath = path.join(process.cwd(), 'public', 'TLDR.png')
  const imageBuffer = fs.readFileSync(imagePath)
  const imageDataUrl = `data:image/png;base64,${imageBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <img
        src={imageDataUrl}
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


