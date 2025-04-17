const sharp = require('sharp');
const path = require('path');

async function generateFavicons() {
  const inputFile = path.join(__dirname, '../public/logo.png');
  const outputDir = path.join(__dirname, '../public');

  // Generate favicon.ico (32x32)
  await sharp(inputFile)
    .resize(32, 32)
    .toFile(path.join(outputDir, 'favicon.ico'));

  // Generate icon.png (192x192)
  await sharp(inputFile)
    .resize(192, 192)
    .toFile(path.join(outputDir, 'icon.png'));

  // Generate apple-icon.png (180x180)
  await sharp(inputFile)
    .resize(180, 180)
    .toFile(path.join(outputDir, 'apple-icon.png'));

  console.log('Favicon files generated successfully!');
}

generateFavicons().catch(console.error); 