const fs = require('fs');
const path = require('path');

// Get the destination path from command-line arguments
const destinationPath = process.argv[2];

if (!destinationPath) {
  console.error('Please provide a destination path as the first argument.');
  process.exit(1);
}

// Define the source directory
const sourceDir = path.join(__dirname, 'data');

// Ensure the destination directory exists, if not, create it
if (!fs.existsSync(destinationPath)) {
  fs.mkdirSync(destinationPath, { recursive: true });
}

// Delete existing files in the destination directory
fs.readdirSync(destinationPath).forEach(file => {
  const targetFile = path.join(destinationPath, file);
  fs.unlinkSync(targetFile);
  console.log(`Deleted ${targetFile}`);
});

// Copy files from source directory to the destination directory
fs.readdirSync(sourceDir).forEach(file => {
  const sourceFile = path.join(sourceDir, file);
  const targetFile = path.join(destinationPath, file);

  fs.copyFileSync(sourceFile, targetFile);
  console.log(`Copied ${sourceFile} to ${targetFile}`);
});

console.log('All files copied successfully!');
