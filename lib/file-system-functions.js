// readDirectoryJSON - read all files in a directory as objects
// updateJSON - update a file JSON
// deleteFile - delete a file
const fs = require('fs').promises;

const mkdirp = path => fs.mkdir(path, { recursive: true }); 
 
const writeJSON = (path, obj) => {
  const stringifiedObj = JSON.stringify(obj);
  return fs.writeFile(path, stringifiedObj);
};
 
const readJSON = (file) => {
  return fs.readFile(file, 'utf8')
    .then(content => JSON.parse(content));
};

const readDirectoryJSON = async(dir) => {
  const fileNamesArray = await fs.readdir(dir);
  console.log(fileNamesArray, 'this should be an array');
  return Promise.all(fileNamesArray.map(file => readJSON(file)));
};

 
const updateJSON = () => {
 
};
 
const deleteFile = () => {
 
};

module.exports = {
  mkdirp,
  writeJSON, 
  readJSON,
  readDirectoryJSON, 
  updateJSON, 
  deleteFile
};

