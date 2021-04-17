const { createFile } = require("./helpers/multiplicar");

console.clear();

const base = 5;

createFile(base)
    .then(filename => console.log(filename, "Created"))
    .catch(err => console.error(err));
