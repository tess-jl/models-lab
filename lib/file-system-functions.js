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

const readDirectoryJSON = async(path) => {
  const fileNamesArray = await fs.readdir(path);
  return Promise.all(fileNamesArray.map(file => readJSON(`${path}${file}`)));
};

const updateJSON = (path, objToUpdateWith) => {
  return readJSON(path)
    .then(readJSONResults => Object.assign(readJSONResults, objToUpdateWith))
    .then(reassignedResults => writeJSON(path, reassignedResults));
};

const deleteFile = (path) => fs.unlink(path);

module.exports = {
  mkdirp,
  writeJSON, 
  readJSON,
  readDirectoryJSON, 
  updateJSON, 
  deleteFile
};

