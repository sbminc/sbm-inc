# Bio Extraction Guide

## Overview
I've set up all 18 heroes with their images and placeholder bios. Now you need to extract the actual biography text from the Word documents and update the data file.

## Step-by-Step Process

### 1. Open Each Document
Open each Word document in Microsoft Word from this folder:
`public/powerpoints/BLACK HISTORY FOR MVULANA/`

### 2. Extract the Biography Text
For each document:
1. **Select all the text** (Ctrl+A)
2. **Copy the text** (Ctrl+C)
3. **Paste into a text editor** (like Notepad) to see the clean text
4. **Identify the main biography section** (usually 2-4 paragraphs)
5. **Copy just the biography text** (not headers, footers, or extra formatting)

### 3. Update the Data File
Open `lib/heroes-data.ts` and replace the placeholder text for each hero:

**Example:**
```typescript
// BEFORE (placeholder):
bio: "EXTRACT FROM: public/powerpoints/BLACK HISTORY FOR MVULANA/George Washington Carver.docx",

// AFTER (actual bio):
bio: "George Washington Carver was an American agricultural scientist and inventor who promoted alternative crops to cotton and methods to prevent soil depletion. He was the most prominent black scientist of the early 20th century.",
```

### 4. Extract Achievements
From each document, identify 3-5 key achievements and update the achievements array:

**Example:**
```typescript
// BEFORE (placeholder):
achievements: [
  "Achievement 1 - Extract from document",
  "Achievement 2 - Extract from document",
  "Achievement 3 - Extract from document",
  "Achievement 4 - Extract from document"
]

// AFTER (actual achievements):
achievements: [
  "Developed over 300 products from peanuts",
  "Created methods to prevent soil depletion",
  "Founded the Carver Research Foundation",
  "Received the Spingarn Medal from NAACP"
]
```

### 5. Verify Birth/Death Years
Check if the birth and death years in the data file match what's in the documents. Update if needed.

## Document List (18 total)

1. **George Washington Carver** - `George Washington Carver.docx`
2. **Booker T. Washington** - `Booker T. Washington.docx`
3. **Paul Robeson** - `Paul Robeson.docx`
4. **Robert Smalls** - `Robert Smalls.docx`
5. **Neil deGrasse Tyson** - `Neil Degrasse Tyson.docx`
6. **Lonnie Johnson** - `Lonnie Johnson.docx`
7. **Dr. Mark Dean** - `Dr. Mark Dean.docx`
8. **Rick Kittles** - `Rick Kittles.docx`
9. **Hakeem Oluseyi** - `Hakeem Oluseyi.docx`
10. **Iddris Sandu** - `Iddris Sandu.docx`
11. **James Weldon Johnson** - `James Weldon Johnson.docx`
12. **Joseph Antenor Firmin** - `Joseph Antenor Firmin.docx`
13. **Ernest Everett Just** - `Ernest Everette Just.docx`
14. **Hubert Harrison** - `Hubert Harrison.docx`
15. **Carter G. Woodson** - `Carter G. Woodson.docx`
16. **Dr. Alain Locke** - `Dr. Alain Locke.docx`
17. **Arturo Schomburg** - `Arturo Schomberg.docx`
18. **Dr. Howard Thurman** - `Dr. Howard Thurman_.docx`

## Tips for Extraction

### Bio Text Guidelines:
- **Length**: 2-4 sentences (about 100-200 words)
- **Focus**: Main life story and contributions
- **Tone**: Educational and inspiring
- **Remove**: Extra formatting, headers, footers

### Achievement Guidelines:
- **Number**: 3-5 key accomplishments
- **Length**: 1 sentence each
- **Focus**: Most significant contributions
- **Format**: Start with action verbs

### Example Format:
```typescript
{
  id: 1,
  name: "George Washington Carver",
  title: "Agricultural Scientist and Inventor",
  bio: "George Washington Carver was an American agricultural scientist and inventor who promoted alternative crops to cotton and methods to prevent soil depletion. He was the most prominent black scientist of the early 20th century.",
  image: "/images/heroes/george-washington-carver.jpg",
  birthYear: "1864",
  deathYear: "1943",
  achievements: [
    "Developed over 300 products from peanuts",
    "Created methods to prevent soil depletion",
    "Founded the Carver Research Foundation",
    "Received the Spingarn Medal from NAACP"
  ]
}
```

## Testing After Updates

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Visit the page:**
   - Go to `http://localhost:3000/black-history-heroes`
   - Check that all bios display correctly
   - Verify achievements are showing
   - Test navigation between heroes

3. **Check for errors:**
   - Look for any console errors
   - Verify all images load properly
   - Test on mobile device

## Need Help?

If you need assistance with:
- Extracting specific bios
- Formatting the text
- Finding achievements
- Updating the data file

Just let me know and I can help you with the extraction process! 