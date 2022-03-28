const fs = require('fs');

//--- using async function to handle promise

// (async () => {
//   const filenames = await fs.promises.readdir('files/');

//   let fileContent = [];
//   filenames.forEach(async (filename) => {
//     const res = await fs.promises.readFile('files/' + filename, 'utf-8');
//     fileContent.push(res);
//     console.log(fileContent);
//   });
// })();

var fileName = [];
var fileContent = [];
async function readFileContent(dirname, fileName) {
  try {
    const data = await fs.promises.readFile(dirname + fileName, 'utf-8');
    fileContent.push(data);
    //console.log(fileContent);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function readDirectory(dirname) {
  try {
    fileName = await fs.promises.readdir(dirname);
    fileName.map((file) => {
      readFileContent(dirname, file);
    });
  } catch (error) {
    throw error;
  }
}
readDirectory('files/');

//---- using Pomise

const getFileContent = (dirname) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, (err, filename) => {
      if (err) {
        reject(err);
      }
      resolve(filename);
    });
  });
};

// getFileContent('files/')
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
