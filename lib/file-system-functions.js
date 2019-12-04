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
  return await fs.readdir(dir);
    // .then(readFile => JSON.parse(readFile).map(file => readJSON(file)));
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

