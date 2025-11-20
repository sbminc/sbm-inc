# Deployment Guide

## Current Deployment (Vercel)

The site is currently deployed on Vercel at: `https://sbm-inc.vercel.app`

### Automatic Deployment
- Connected to GitHub repository
- Automatically deploys on push to `main` branch
- Build command: `npm run build`
- Output directory: `out/`

## Manual Deployment Steps

### 1. Build the Site
```bash
npm run build
```

### 2. Test the Build Locally
```bash
npm run start
```

### 3. Deploy to Vercel
If you need to deploy manually:
```bash
npx vercel --prod
```

## Alternative Deployment Options

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Deploy

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Set source to GitHub Actions
3. The site will build and deploy automatically

## Environment Variables

Currently, no environment variables are required for deployment. All configuration is handled through:
- `next.config.mjs` - Next.js configuration
- `tailwind.config.js` - Styling configuration

## Domain Configuration

If you need to change the domain:
1. Update the domain in Vercel dashboard
2. Update any hardcoded URLs in the codebase (search for `sbm-inc.vercel.app`)
3. Update the `baseUrl` in `components/past-events.tsx` if needed

## Troubleshooting

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run lint`
- Verify all images exist in the `public/` folder

### Form Issues
- Verify Formspree endpoints are active
- Check form field names match Formspree configuration
- Test forms in production environment

### PDF Slideshow Issues
- Ensure PDF files exist in `public/powerpoints/`
- Check iframe permissions for PDF viewing
- Verify CORS settings if using external PDF viewers
