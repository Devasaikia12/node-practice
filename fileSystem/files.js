//requiring path and fs modules
const path = require('path')
const fs = require('fs')
const directoryPath = path.join(__dirname, 'files')

const getFileContent = (dirName, fileContent, onError) => {
  fs.readdir(dirName, (err, filenames) => {
    if (err) {
      onError(err)
      return
    }
    filenames.forEach((filename) => {
      fs.readFile(dirName + filename, 'utf-8', (err, data) => {
        if (err) {
          onError(err)
          return
        }
        //console.log(data)
        fileContent(filename, data)
      })
    })
  })
}

var data = {}

getFileContent(
  'files/',
  (filename, content) => {
    data[filename] = content
    //console.log(data)
  },
  (err) => {
    console.log(err)
  }
)

console.log(data)
