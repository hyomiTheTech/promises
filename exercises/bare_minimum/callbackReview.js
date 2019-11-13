/**
 * Implement these functions following the node style callback pattern
 */

var fs = require("fs");
var request = require("request");

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function(filePath, callback) {
  // TODO
  // read the contents of the file first.
  fs.readFile(filePath, (err, data) => {
    if (err) {
      callback(err);
    } else {
      var stringifiedData = data.toString();
      var dataArray = stringifiedData.split("\n");
      callback(null, dataArray[0]);
    }
  });
  // and retrieve only the first line.
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function(url, callback) {
  request(url, (error, response) => {
    if (error) {
      callback(error);
    } else {
      callback(null, response.statusCode);
    }
  });
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
