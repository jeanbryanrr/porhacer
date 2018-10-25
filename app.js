const argv = require('./config/config').argv;
const porhacer = require('./por-hacer/por-hacer');
const colors = require('colors');
console.log(argv);
let comando = argv._[0];

switch (comando) {
    case 'crear':

        let tarea = porhacer.crear(argv.descripcion);

        console.log(tarea);
        break;
    case 'listar':
        let lista = porhacer.listar();
        for (let itemn of lista) {
            console.log("=====================".yellow);
            console.log(itemn.descripcion);
            console.log("estado :" + itemn.completado);
            console.log("====================".green);
        }

        break;
    case 'actualizar':
        let actualizar = porhacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;

    default:
        break;
}