import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validators';
import { sendContactNotification } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = contactSchema.parse(body);

    // Send email notification
    await sendContactNotification(validatedData);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact submission error:', error);

    if (error instanceof Error) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}