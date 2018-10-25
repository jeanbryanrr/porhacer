const paramCrear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'desc por hacer'
    }
};
const paramActualizar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'desc por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'completado o pendiente'
    }
};


const argv = require('yargs')
    .command('crear', 'crea tareas', paramCrear)
    .command('actualizar', 'actualiza tareas', paramActualizar)
    .command('listar', 'lista')
    .argv;

module.exports = { argv }