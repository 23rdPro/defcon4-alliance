import { NextRequest, NextResponse } from 'next/server';
import { quoteSchema } from '@/lib/validators';
import { saveLead } from '@/lib/db';
import { sendQuoteNotification } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = quoteSchema.parse(body);

    // Execute side effects in parallel
    await Promise.all([
      saveLead(validatedData),
      sendQuoteNotification(validatedData),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Quote submission error:', error);

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