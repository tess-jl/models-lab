const {
  mkdirp
//   writeJSON, 
//   readDirectoryJSON, 
//   updateJSON, 
//   deleteFile
} = require('../lib/file-system-functions.js');

const fs = require('fs').promises;

jest.mock('fs', () => ({
  promises: {
    mkdir: jest.fn(() => Promise.resolve('This would be the path')), 
  }
}));
  
describe('file system functions', () => {
  describe('mkdirp function', () => {
    it('make a directory and all parent directories', () => {
      return mkdirp('./file.js')
        .then(() => {
          expect(fs.mkdir).toHaveBeenLastCalledWith('./file.js', { recursive: true });
        });
    });
  });
});
