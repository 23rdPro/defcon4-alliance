This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

### Lead Capture System
A production-grade quote request system with the following features:
- Modal-based form with client and server-side validation
- Parallel processing of lead persistence and email notifications
- Success confirmation with downloadable PDF briefing
- Responsive design with accessibility features
- TypeScript throughout for type safety

#### Setup
1. Copy `.env.example` to `.env.local`
2. Add your Resend API key: `RESEND_API_KEY=your_key_here`
3. Optionally set `INTERNAL_EMAIL=your_email@domain.com` for notifications

#### API Endpoints
- `POST /api/quote` - Submit quote requests

#### Components
- `QuoteModal` - Main modal container
- `QuoteForm` - Form with validation
- `Navbar` & `HeroSection` - CTA buttons

### Articles System
A full-featured blog/content management system with:
- Markdown-based content with frontmatter metadata
- Static generation for optimal performance
- Card-based article listing with responsive grid
- Individual article pages with SEO optimization
- Clap/engagement system (no comments)
- Dark theme integration with existing design

#### Content Structure
Articles are stored in `/content/articles/` as Markdown files with frontmatter:
```yaml
---
title: "Article Title"
description: "Brief description"
author: "Author Name"
publishedAt: "2026-04-10"
coverImage: "/path/to/image.jpg"
tags: ["tag1", "tag2"]
---
```

#### Routes
- `/articles` - Article listing page
- `/articles/[slug]` - Individual article pages

#### API Endpoints
- `POST /api/articles/clap` - Handle article claps
- `GET /api/articles/clap?slug=article-slug` - Get clap count

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
