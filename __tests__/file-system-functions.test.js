const {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON
//   updateJSON, 
//   deleteFile
} = require('../lib/file-system-functions.js');

const fs = require('fs').promises;

const mockObject = { mockKey: 'mock value' };
const mockArray = [{ mockKey: 'mock value' }, { mockKey: 'mock value' }];

jest.mock('fs', () => ({
  promises: {
    mkdir: jest.fn(() => Promise.resolve('This would be the path')), 
    writeFile: jest.fn(() => Promise.resolve('The file has been written')),
    readFile: jest.fn(() => Promise.resolve(JSON.stringify(mockObject))), 
    readdir: jest.fn(() => Promise.resolve(mockArray)),
  }
}));

describe('file system functions', () => {
  it('make a directory and all parent directories (mkdirp function)', () => {
    return mkdirp('./file.js')
      .then(() => {
        expect(fs.mkdir).toHaveBeenLastCalledWith('./file.js', { recursive: true });
      });
  });
  it('writes an object to a file (writeJSON function)', () => {
    return writeJSON('./file.js', {})
      .then(() => {
        expect(fs.writeFile).toHaveBeenLastCalledWith('./file.js', '{}');
      });
  });
  it('reads an object from a file (readJSON function)', () => {
    return readJSON('./file.js')
      .then((result) => {
        expect(fs.readFile).toHaveBeenLastCalledWith('./file.js', 'utf8');
        expect(result).toEqual(mockObject);
      });
  });
  it('read all files in a directory as objects (readDirectoryJSON function)', () => {
    return readDirectoryJSON('./file2.js')
      .then((result2) => {
        expect(fs.readdir).toHaveBeenLastCalledWith('./file2.js');
        expect(result2).toEqual(mockArray);
      });
  });

});
