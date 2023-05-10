const path = require('path');
const fs = require('fs');

const imageFolder = 'stock-food-images';
const absPath = path.resolve(`./public/${imageFolder}/`);

function getFilenamesInFolder(folderPath: string) {
  try {
    const filenames = fs.readdirSync(folderPath);
    return filenames;
  } catch (error) {
    console.error(`Error reading folder: ${error}`);
    return [];
  }
}

const imageArray = getFilenamesInFolder(absPath).map((imageName: string) => {
  return `/${imageFolder}/${imageName}`;
});

export default imageArray;
