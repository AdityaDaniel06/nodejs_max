const path = require("path");

//constructing a path for the root directory
// module.exports = path.dirname(process.mainModule.filename);
module.exports = path.dirname(require.main.filename);
