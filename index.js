var fs = require('fs');
var path = require('path');
var Writer = require('broccoli-writer');
var helpers = require("broccoli-kitchen-sink-helpers");

module.exports = Fc2JSON;

Fc2JSON.prototype = Object.create(Writer.prototype);
Fc2JSON.prototype.constructor = Fc2JSON;

function Fc2JSON(inputTree, options) {
  if (!(this instanceof Fc2JSON)) return new Fc2JSON(inputTree, options);

  // A little setup.
  this.inputTree = inputTree;
  this.outputFile = "fc2.json";

  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      this[key] = options[key];
    }
  }

}

Fc2JSON.prototype.write = function (readTree, destDir) {
  var self = this;

  return readTree(this.inputTree).then(function(srcDir) {

    var output = {};
    var inputFiles = helpers.multiGlob( self.inputFiles, { cwd: srcDir });

    // Iterate over all of the files,
    // reading in their contents.
    inputFiles.forEach(function (file) {
      var joined = path.join(srcDir, file);
      var stat = fs.statSync(joined);
      if (stat && stat.isFile()) {
        var fileContents = fs.readFileSync(joined, { encoding: "utf8" });
        output[file] = fileContents;
      }
    });

    // Make the dir. Write the file.
    var outDir = path.join(destDir, path.dirname(self.outputFile));
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

    fs.writeFileSync(path.join(destDir, self.outputFile), JSON.stringify(output, null, 2));

  });
};
