# Cognisint Page

*Static site deployed to GitHub Pages*

[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://cognisint.com)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org)

## Overview

This repository contains the Cognisint LLC website, built with Next.js and configured for static export to GitHub Pages.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

**Live Site:** [https://cognisint.com](https://cognisint.com)

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# The static files will be generated in the `out/` directory
```

## GitHub Pages Configuration

This project uses:
- **Static Export:** Next.js `output: 'export'` configuration generates static HTML files
- **Custom Domain:** Configured via `public/CNAME` file
- **GitHub Actions:** Automated deployment workflow in `.github/workflows/deploy.yml`

### Setup Instructions

After merging this PR:
1. Go to repository **Settings → Pages**
2. Set **Source** to "GitHub Actions"
3. Configure DNS for `cognisint.com` to point to GitHub Pages:
   - Add an `A` record pointing to GitHub Pages IPs
   - Add a `CNAME` record for `www` subdomain (optional)
4. The workflow will deploy automatically on push to `main`

## Technology Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS
- Radix UI components
- Lucide React icons

## Build your app

Continue building your app on:

**[https://v0.app/chat/vve2wyZCj6Z](https://v0.app/chat/vve2wyZCj6Z)**