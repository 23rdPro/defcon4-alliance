import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface ClapData {
  [slug: string]: number;
}

const CLAPS_FILE = path.join(process.cwd(), 'data', 'claps.json');

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json();

    if (!slug || typeof slug !== 'string') {
      return NextResponse.json(
        { error: 'Invalid slug provided' },
        { status: 400 }
      );
    }

    // Ensure data directory exists
    await fs.promises.mkdir(path.dirname(CLAPS_FILE), { recursive: true });

    // Read existing claps
    let claps: ClapData = {};
    try {
      const fileContent = await fs.promises.readFile(CLAPS_FILE, 'utf-8');
      claps = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist, start with empty object
    }

    // Increment clap count
    claps[slug] = (claps[slug] || 0) + 1;

    // Write back to file
    await fs.promises.writeFile(CLAPS_FILE, JSON.stringify(claps, null, 2));

    return NextResponse.json({
      success: true,
      claps: claps[slug]
    });
  } catch (error) {
    console.error('Error processing clap:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json(
        { error: 'Slug parameter required' },
        { status: 400 }
      );
    }

    // Read claps data
    let claps: ClapData = {};
    try {
      const fileContent = await fs.promises.readFile(CLAPS_FILE, 'utf-8');
      claps = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist, return 0
    }

    return NextResponse.json({
      claps: claps[slug] || 0
    });
  } catch (error) {
    console.error('Error fetching claps:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}