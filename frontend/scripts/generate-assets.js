#!/usr/bin/env node

/**
 * Script to generate placeholder assets for Expo
 * Run with: npm run generate-assets
 */

const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '..', 'assets');

// Ensure assets directory exists
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

async function generateAssets() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch (error) {
    console.log('❌ Sharp package not found. Installing...\n');
    console.log('Please run: npm install --save-dev sharp');
    console.log('Then run this script again.\n');
    process.exit(1);
  }

  console.log('📦 Generating placeholder assets for Expo...\n');

  // Color scheme for the app
  const primaryColor = '#4A90E2'; // Blue
  const backgroundColor = '#FFFFFF'; // White

  // Create a simple icon design (blue circle with "T" for Trickiness)
  const createIcon = async (width, height, filename) => {
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${width}" height="${height}" fill="${backgroundColor}"/>
        <circle cx="${width/2}" cy="${height/2}" r="${Math.min(width, height) * 0.25}" fill="${primaryColor}"/>
        <text x="${width/2}" y="${height/2 + Math.min(width, height) * 0.03}" font-family="Arial, sans-serif" font-size="${Math.min(width, height) * 0.12}" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">T</text>
      </svg>
    `;

    const outputPath = path.join(assetsDir, filename);
    await sharp(Buffer.from(svg))
      .png()
      .toFile(outputPath);
    
    console.log(`✅ Created ${filename} (${width}x${height})`);
  };

  // Create app icon (square with rounded corners)
  const createAppIcon = async (size, filename) => {
    const svg = `
      <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="${primaryColor}"/>
        <text x="${size/2}" y="${size/2 + size * 0.05}" font-family="Arial, sans-serif" font-size="${size * 0.4}" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">T</text>
      </svg>
    `;

    const outputPath = path.join(assetsDir, filename);
    await sharp(Buffer.from(svg))
      .png()
      .toFile(outputPath);
    
    console.log(`✅ Created ${filename} (${size}x${size})`);
  };

  try {
    // Generate all required assets
    await createAppIcon(1024, 'icon.png');
    await createIcon(1242, 2436, 'splash.png'); // Proper iPhone splash screen dimensions
    await createAppIcon(1024, 'adaptive-icon.png');
    await createAppIcon(48, 'favicon.png');

    console.log('\n✨ All assets generated successfully!');
    console.log('📁 Assets saved to: assets/');
    console.log('\n💡 You can replace these with your own designs later.\n');
  } catch (error) {
    console.error('❌ Error generating assets:', error.message);
    process.exit(1);
  }
}

generateAssets();
