# Deployment Guide

This project is provider-agnostic and can be deployed to Vercel, Cloudflare Pages, or Netlify.

## Prerequisites

- Node.js 20.19+ (or Node.js 22+ recommended)
- `npm ci` completed successfully
- Environment variable configured:
  - `NEXT_PUBLIC_SITE_URL=https://your-domain.com`

## Pre-deploy checks

```bash
npm ci
npm run build
```

## Vercel

1. Import repository in Vercel dashboard.
2. Framework preset: `Next.js`.
3. Add environment variable `NEXT_PUBLIC_SITE_URL`.
4. Deploy.

## Cloudflare Pages

1. Create a Pages project from your Git repository.
2. Build command: `npm run build`.
3. Output directory: `.next`.
4. Enable Next.js support in Cloudflare adapter settings.
5. Add `NEXT_PUBLIC_SITE_URL` in environment variables.

## Netlify

1. Create new site from Git.
2. Build command: `npm run build`.
3. Publish directory: `.next`.
4. Ensure Next.js runtime/plugin is enabled.
5. Add `NEXT_PUBLIC_SITE_URL`.

## Post-deploy validation

- `/` renders hero and animated sections.
- `/projects`, `/about`, `/contact` return `200`.
- `https://<domain>/sitemap.xml` exists.
- `https://<domain>/robots.txt` exists.
