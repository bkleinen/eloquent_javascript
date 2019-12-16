/*
npm demands semantic versioning
middle number is incremented with new functionality

Every time compatibility is broken, so that existing code that uses the package might not work with the new version,
the first number has to be incremented.
A caret character (^) in front of the version number for a dependency in package.json indicates that any version
compatible with the given number may be installed. So, for example, "^2.3.0" would mean that any version greater
than or equal to 2.3.0 and less than 3.0.0 is allowed.

documentation about npm https://www.npmjs.com/
yarn does a similar thing.
 */
let {readFile} = require("fs");
readFile("08_file.txt", "utf8", (error, text) => {
    if (error) throw error;
    console.log("The file contains:", text);
});