const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertIcon() {
  const inputFile = 'public/flowkey_icon.jpeg';
  
  try {
    // Check if input file exists
    if (!fs.existsSync(inputFile)) {
      console.error('Input file not found:', inputFile);
      return;
    }

    console.log('Converting flowkey_icon.jpeg to various icon formats...');

    // Convert to favicon.ico (16x16)
    await sharp(inputFile)
      .resize(16, 16)
      .png()
      .toFile('public/favicon-16x16.png');
    console.log('✓ Created favicon-16x16.png');

    // Convert to favicon.ico (32x32)
    await sharp(inputFile)
      .resize(32, 32)
      .png()
      .toFile('public/favicon-32x32.png');
    console.log('✓ Created favicon-32x32.png');

    // Convert to Apple touch icon (180x180)
    await sharp(inputFile)
      .resize(180, 180)
      .png()
      .toFile('public/apple-touch-icon.png');
    console.log('✓ Created apple-touch-icon.png');

    // Convert to logo192.png
    await sharp(inputFile)
      .resize(192, 192)
      .png()
      .toFile('public/logo192.png');
    console.log('✓ Created logo192.png');

    // Convert to logo512.png
    await sharp(inputFile)
      .resize(512, 512)
      .png()
      .toFile('public/logo512.png');
    console.log('✓ Created logo512.png');

    // Create a larger version for PWA
    await sharp(inputFile)
      .resize(1024, 1024)
      .png()
      .toFile('public/logo1024.png');
    console.log('✓ Created logo1024.png');

    console.log('\n🎉 All icon formats created successfully!');
    console.log('\nNext steps:');
    console.log('1. Update your HTML head section with the new favicons');
    console.log('2. Update manifest.json with the new icon references');
    
  } catch (error) {
    console.error('Error converting icon:', error);
  }
}

convertIcon();
