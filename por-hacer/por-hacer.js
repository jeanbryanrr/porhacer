const fs = require('fs');
let listadoPorHacer = [];


const guardarBD = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`./db/data.json`, data, (err) => {
        console.log("saved!");
    });
}


const cargarBD = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


}

const crear = (descripcion) => {
    cargarBD();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarBD();
    return porHacer;
}


const listar = () => {
    cargarBD();

    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarBD();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion

    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarBD();
        return true;
    } else {
        return false;
    }
}

module.exports = { crear, listar, actualizar }