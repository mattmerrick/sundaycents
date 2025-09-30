import { NextRequest, NextResponse } from 'next/server'

// This is a placeholder for future ChatGPT API integration
// You can add your OpenAI API key here when ready

export async function POST(request: NextRequest) {
  try {
    const { prompt, tool, usageCount } = await request.json()

    // Check usage limit (3 free uses)
    if (usageCount >= 3) {
      return NextResponse.json(
        { error: 'Usage limit reached. Please upgrade to continue.' },
        { status: 429 }
      )
    }

    // TODO: Replace this with actual OpenAI API call
    // const openai = new OpenAI({
    //   apiKey: process.env.OPENAI_API_KEY,
    // });
    
    // const completion = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: prompt }],
    //   model: "gpt-3.5-turbo",
    // });

    // For now, return a mock response
    const mockResponse = generateMockResponse(tool, prompt)
    
    return NextResponse.json({ 
      result: mockResponse,
      usageCount: usageCount + 1 
    })

  } catch (error) {
    console.error('AI Generation Error:', error)
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    )
  }
}

function generateMockResponse(tool: string, prompt: string) {
  switch (tool) {
    case 'hashtag-generator':
      return [
        `#${prompt.toLowerCase().replace(/\s+/g, '')}`,
        '#entrepreneur',
        '#business',
        '#success',
        '#motivation',
        '#productivity',
        '#mindset',
        '#goals',
        '#inspiration',
        '#leadership'
      ]
    
    case 'caption-writer':
      return `🚀 ${prompt.charAt(0).toUpperCase() + prompt.slice(1)} is essential for success in today's competitive landscape. Here's what you need to know:\n\n✅ Key insights that can transform your approach\n✅ Actionable strategies you can implement today\n✅ Real-world examples of successful implementation\n\nWhat's your biggest challenge with ${prompt}? Let me know in the comments below! 👇\n\n#${prompt.replace(/\s+/g, '')} #business #success #entrepreneur #motivation`
    
    case 'content-ideas-generator':
      return [
        `5 ${prompt} mistakes everyone makes (and how to avoid them)`,
        `Behind-the-scenes of your ${prompt} process`,
        `The truth about ${prompt} that no one tells you`,
        `3 ${prompt} tips that changed my life`,
        `What I wish I knew about ${prompt} when I started`,
        `Common ${prompt} myths debunked`,
        `My ${prompt} routine that actually works`,
        `Why ${prompt} is harder than people think`,
        `The ${prompt} hack that saves me 2 hours daily`,
        `Before vs After: ${prompt} transformation`
      ]
    
    default:
      return `Generated content for ${prompt}`
  }
}
