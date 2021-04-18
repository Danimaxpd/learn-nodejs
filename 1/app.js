const { createFile } = require("./helpers/multiplicar");
const argv = require('yargs').argv;
console.clear();

console.log(process.argv);
console.log(argv);

console.log("esta es la base", argv.base);

// const base = 5;

// createFile(base)
//     .then(filename => console.log(filename, "Created"))
//     .catch(err => console.error(err));
