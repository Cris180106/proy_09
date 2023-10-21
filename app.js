const colors = require('colors');
const AlmacenProductos = require('./proy_modules/functions');

const main = async () => {
    console.clear();
    console.log('////////////////////////////////////');
    console.log('//     GESTIÓN DE PRODUCTOS      //');
    console.log('////////////////////////////////////\n');

    const almacenProductos = new AlmacenProductos();
    almacenProductos.cargarProductos();

    console.log(`DATOS APERTURA TIENDA`.bgBlue);
    almacenProductos.mostrarProductos();
    almacenProductos.actualizarInventario();
    almacenProductos.guardarProductos();
}

main();
