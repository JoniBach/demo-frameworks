const fs = require('fs');
const path = require('path');

// Get the destination path from command-line arguments
const destinationPath = process.argv[2];

if (!destinationPath) {
  console.error('Please provide a destination path as the first argument.');
  process.exit(1);
}

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
  console.error(`The destination path ${destinationPath} does not exist.`);
  process.exit(1);
} else {
  // Delete existing files and directories in the destination directory
  deleteAllContents(destinationPath);
  console.log('All existing data has been cleared successfully!');
}
