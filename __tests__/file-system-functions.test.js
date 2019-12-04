const {
  mkdirp,
  writeJSON 
//   readDirectoryJSON, 
//   updateJSON, 
//   deleteFile
} = require('../lib/file-system-functions.js');

const fs = require('fs').promises;

jest.mock('fs', () => ({
  promises: {
    mkdir: jest.fn(() => Promise.resolve('This would be the path')), 
    writeFile: jest.fn(() => Promise.resolve('The file has been written'))
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

});
