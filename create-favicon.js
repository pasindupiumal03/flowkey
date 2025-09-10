const sharp = require('sharp');
const fs = require('fs');

async function createFavicon() {
  try {
    // Create a 32x32 PNG first, then we'll rename it as ICO for basic compatibility
    await sharp('public/flowkey_icon.jpeg')
      .resize(32, 32)
      .png()
      .toFile('public/favicon.ico');
    
    console.log('✓ Created favicon.ico');
  } catch (error) {
    console.error('Error creating favicon.ico:', error);
  }
}

createFavicon();
