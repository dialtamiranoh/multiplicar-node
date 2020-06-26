// requireds
const fs = require('fs'); //nativos
const colors = require('colors');

// const fs = require('express'); paquetes no nativos
// const fs = require('./path'); //archivos propios



let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {

            reject(`El valor introducido ${limite} no es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base*i}\n`;

        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else

                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });

}

let listarTabla = (base, limite = 10) => {
    console.log('========================'.green);
    console.log(`===Tabla del ${base}====`.green);
    console.log('========================'.green);
    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base*i}`);

    }


}


module.exports = {
    crearArchivo,
    listarTabla
}