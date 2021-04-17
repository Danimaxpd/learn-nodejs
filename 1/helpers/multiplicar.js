const fs = require('fs');

const createFile = (base) => {

    let output = '';

    for (let i = 1; i <= 10; i++) {
        output += `${base} X ${i} = ${(base * i)}\n`
    }

    fs.writeFile(`tabla-${base}.txt`, output, (error) => {
        if (error) throw error

        console.log('Archivo creado')
    });
}

module.exports = {
    createFile
}