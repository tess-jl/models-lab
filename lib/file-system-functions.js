// mkdirp - make a directory and all parent directories
// writeJSON - write an object to a file
// readJSON - read an object from a file
// readDirectoryJSON - read all files in a directory as objects
// updateJSON - update a files JSON
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

const readDirectoryJSON = () => {
 
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

