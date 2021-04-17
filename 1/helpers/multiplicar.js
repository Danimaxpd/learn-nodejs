const fs = require('fs');

const createFile = async (base) => {

    try {
        let output = '';
        const fileName = `tabla-${base}.txt`;

        for (let i = 1; i <= 10; i++) {
            output += `${base} X ${i} = ${(base * i)}\n`
        }

        fs.writeFile(fileName, output, (error) => {
            if (error) throw error

            console.log('Archivo creado')
        });

        return fileName;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    createFile
}