console.log(process.argv);
const {reverse} = require("./05_reverse.js");

// Index 2 holds the first actual command line argument
let argument = process.argv[2];
console.log(process.argv);
console.log("the reverse of "+argument+" is:");
console.log(reverse(argument));