
// Cleanup.
var rmdir = require('rimraf').sync;
rmdir('./dist', function (e) {
  console.log('Error deleting dist.');
});

// In your Brocfile, instead of requiring the index file,
// require the npm installed package. Eg:
//
//   var fc2json = require('broccoli-file-contents-to-json');
//
var fc2json = require('./index');

var concatenated = fc2json('./my-files', {
  inputFiles: ['**/*'],
  outputFile: './fc2.json'
});

module.exports = concatenated;
