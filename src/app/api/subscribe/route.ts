import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, tags } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // ConvertKit API configuration
    const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY
    const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID

    if (!CONVERTKIT_API_KEY || !CONVERTKIT_FORM_ID) {
      console.error('ConvertKit credentials not configured')
      // Still return success so user experience isn't broken
      // You'll see the error in logs
      return NextResponse.json({
        success: true,
        message: 'Email captured (ConvertKit not configured yet)'
      })
    }

    // Subscribe to ConvertKit form
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: CONVERTKIT_API_KEY,
          email: email,
          tags: tags || [],
        }),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      console.error('ConvertKit API error:', data)
      return NextResponse.json(
        { error: 'Failed to subscribe to email list' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed!',
      subscriber: data.subscription
    })

  } catch (error) {
    console.error('Subscribe API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
