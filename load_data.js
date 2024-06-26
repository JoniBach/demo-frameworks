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

// Function to delete all contents in a directory recursively
function deleteAllContents(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const currentPath = path.join(dirPath, file);
      if (fs.lstatSync(currentPath).isDirectory()) {
        // Recursively delete contents of the directory
        deleteAllContents(currentPath);
        // Remove the directory itself
        fs.rmdirSync(currentPath);
      } else {
        // Delete file
        fs.unlinkSync(currentPath);
      }
      console.log(`Deleted ${currentPath}`);
    });
  }
}

// Ensure the destination directory exists, if not, create it
if (!fs.existsSync(destinationPath)) {
  fs.mkdirSync(destinationPath, { recursive: true });
} else {
  // Delete existing files and directories in the destination directory
  deleteAllContents(destinationPath);
}

// Copy files from source directory to the destination directory
fs.readdirSync(sourceDir).forEach(file => {
  const sourceFile = path.join(sourceDir, file);
  const targetFile = path.join(destinationPath, file);

  fs.copyFileSync(sourceFile, targetFile);
  console.log(`Copied ${sourceFile} to ${targetFile}`);
});

console.log('All files copied successfully!');
