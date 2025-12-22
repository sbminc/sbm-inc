# Black History Heroes Setup Guide

## Overview
I've created a yearbook-style presentation of Black history heroes for your website. The feature includes:

- A dedicated page at `/black-history-heroes`
- A link in the footer (not main navigation)
- Interactive carousel with hero cards
- Beautiful yearbook-style design with Adinkra symbols
- Responsive design that works on all devices

## What's Been Created

### Files Created:
1. `app/black-history-heroes/page.tsx` - The main page component
2. `components/black-history-heroes.tsx` - The interactive hero carousel component
3. `lib/heroes-data.ts` - Data file containing hero information
4. `public/images/heroes/` - Directory for hero images

### Files Updated:
1. `components/footer.tsx` - Added link to Black History Heroes
2. `public/sitemap.xml` - Added the new page to sitemap

## Next Steps: Extracting Images and Content

### 1. Extract Images from Documents
You'll need to extract the images from your documents in the folder:
`C:\Users\Student\Downloads\BLACK HISTORY FOR MVULANA-20250719T051531Z-1-001\BLACK HISTORY FOR MVULANA`

**To extract images from Word documents:**
1. Open each document in Microsoft Word
2. Right-click on each image
3. Select "Save as Picture" or "Copy"
4. Save the images to `public/images/heroes/` with descriptive names
5. Recommended naming: `hero-name.jpg` (e.g., `harriet-tubman.jpg`)

### 2. Update Hero Data
Edit the file `lib/heroes-data.ts` to replace the sample data with your actual content:

```typescript
export const heroes: Hero[] = [
  {
    id: 1,
    name: "Actual Hero Name",
    title: "Their Title/Description",
    bio: "Extract the biography text from your documents",
    image: "/images/heroes/actual-image-name.jpg", // Update with your image filename
    birthYear: "YYYY",
    deathYear: "YYYY", // Remove if still living
    achievements: [
      "Achievement 1 from your document",
      "Achievement 2 from your document",
      "Achievement 3 from your document",
      "Achievement 4 from your document"
    ]
  },
  // Add more heroes following the same pattern
]
```

### 3. Image Requirements
- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 800x600 pixels or larger
- **Aspect Ratio**: 4:3 or 3:2 works best
- **File Size**: Keep under 500KB for fast loading

### 4. Content Guidelines
- **Name**: Full name of the person
- **Title**: A brief descriptive title (e.g., "Civil Rights Leader", "Abolitionist")
- **Bio**: 2-3 sentences describing their life and contributions
- **Achievements**: 3-5 key accomplishments or contributions
- **Years**: Birth and death years (omit death year if still living)

## Features Included

### Interactive Elements:
- **Navigation**: Left/right arrows to browse heroes
- **Progress Dots**: Click to jump to specific heroes
- **Counter**: Shows current position (e.g., "2 of 6")
- **Hover Effects**: Images scale slightly on hover

### Design Elements:
- **Adinkra Symbols**: Traditional African symbols throughout
- **Gradient Backgrounds**: Beautiful color transitions
- **Glass Morphism**: Modern frosted glass effects
- **Responsive Layout**: Works on mobile, tablet, and desktop

### Accessibility:
- **Keyboard Navigation**: Arrow keys work for navigation
- **Screen Reader Support**: Proper ARIA labels
- **High Contrast**: Good color contrast for readability

## Testing the Feature

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Visit the page:**
   - Go to `http://localhost:3000/black-history-heroes`
   - Or click the "Black History Heroes" link in the footer

3. **Test functionality:**
   - Click navigation arrows
   - Click progress dots
   - Test on mobile device
   - Check keyboard navigation

## Customization Options

### Colors and Styling
The component uses your existing color scheme:
- `text-gold` for headings
- `text-burgundy` for accents
- `bg-deep-blue` and `bg-midnight-blue` for backgrounds

### Adding More Heroes
Simply add more objects to the `heroes` array in `lib/heroes-data.ts`

### Changing Layout
The component uses a two-column layout on desktop and single column on mobile. You can modify the grid classes in the component if needed.

## Troubleshooting

### Images Not Loading
- Check that image files exist in `public/images/heroes/`
- Verify image paths in `lib/heroes-data.ts`
- Ensure image files are valid JPG/PNG/WebP format

### TypeScript Errors
- Make sure all required fields are provided in the hero data
- Check that image paths are strings
- Verify that achievements array contains strings

### Performance Issues
- Optimize image sizes (recommend under 500KB each)
- Consider using Next.js Image optimization
- Test on slower connections

## Support
If you need help with:
- Extracting images from documents
- Updating the content
- Customizing the design
- Adding more features

Just let me know and I can assist further! 