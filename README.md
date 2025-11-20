# SBM (Sowing Black Minds) Website

A modern, responsive website for the Sowing Black Minds organization, built with Next.js and featuring event management, program showcases, and interactive presentations.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18 or higher)
- npm or pnpm package manager

### Getting Started
1. **Easy Start (Windows)**: Double-click `start-website.bat` to automatically install dependencies and start the development server
2. **Manual Start**:
   ```bash
   npm install
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
sbm-clean/
├── app/                          # Next.js App Router pages
│   ├── events/                   # Event pages
│   │   ├── 1/                   # Mvulana Young Men's Summit
│   │   └── 2/                   # Msichana Young Women's Summit
│   ├── msichana-presentation/    # Yearbook-style presentation
│   ├── black-history-heroes/     # Black History Heroes showcase
│   └── [other pages]/
├── components/                   # Reusable React components
├── lib/                         # Data and utility functions
├── public/                      # Static assets (images, documents)
├── docs/                        # Documentation and reference files
└── hooks/                       # Custom React hooks
```

## 🎯 Key Features

### Events System
- **Mvulana Young Men's Summit**: Full event page with registration form and presentation slideshow
- **Msichana Young Women's Summit**: Two-day workshop with registration and yearbook presentation
- **Past Events**: Image galleries and presentation slideshows

### Interactive Presentations
- **Black History Heroes**: Grid-based showcase with individual detail pages
- **Msichana Yearbook**: Featured women leaders with biographical information
- **PDF Slideshows**: Auto-advancing presentation viewers

### Forms Integration
- Formspree integration for event registration
- Custom forms for both summit events
- Age collection and permission to film checkboxes

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Technologies
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **Formspree** - Form handling service

## 📝 Content Management

### Adding New Events
1. Create a new folder in `app/events/[id]/`
2. Add `page.tsx` with event details
3. Update `components/events-list.tsx` to include the new event
4. Add any assets to the `public/` folder

### Managing Featured Content
- **Black History Heroes**: Edit `lib/heroes-data.ts`
- **Msichana Participants**: Edit `lib/msichana-participants-data.ts`
- **Leaders**: Edit `components/leaders-list.tsx`

### Form Endpoints
- **Mvulana Summit**: Uses Google Forms backup
- **Msichana Summit**: Formspree endpoint `https://formspree.io/f/mdkljjgj`

## 🎨 Styling

The site uses a custom color palette defined in `tailwind.config.js`:
- **Deep Blue**: Primary brand color
- **Burgundy**: Secondary accent
- **Gold**: Highlight and accent color
- **Midnight Blue**: Dark backgrounds

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first design approach
- Adaptive layouts for tablets and desktops
- Touch-friendly navigation
- Optimized images with Next.js Image component

## 🔧 Configuration Files

- `next.config.mjs` - Next.js configuration with static export
- `tailwind.config.js` - Tailwind CSS customization
- `tsconfig.json` - TypeScript configuration
- `components.json` - shadcn/ui component configuration

## 📚 Documentation

Additional documentation can be found in the `docs/` folder:
- Bio extraction guides
- Setup instructions for different sections
- Run-of-show documents for events

## 🚀 Deployment

The site is configured for static export and can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

Build command: `npm run build`
Output directory: `out/`

## 🤝 Contributing

When making changes:
1. Test locally with `npm run dev`
2. Run linting with `npm run lint`
3. Build and test with `npm run build`
4. Ensure all forms and links work correctly

## 📞 Support

For questions about the codebase or deployment, refer to:
- Next.js documentation: https://nextjs.org/docs
- Tailwind CSS documentation: https://tailwindcss.com/docs
- Formspree documentation: https://formspree.io/docs

---

**Last Updated**: November 2025
**Version**: 1.0.0
