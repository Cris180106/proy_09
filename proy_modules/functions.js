//hecho por Cristian Pimiento y Juan Pablo B

/* Mi código es un prototipo de aplicación que administra un inventario de productos
 el cual  usa dos clases la primera es "producto" para representar productos 
 y "almacenProductos" para cargar, guardar, mostrar y atualizar los 
 dato del inventario a través de operaciones asincrónicas con archivos JSON.*/ 

const fs = require('fs').promises;

// Importamos el módulo 'fs' y específicamente la función 'promises' para operaciones de archivo asincrónicas.

// Definimos una clase llamada 'Producto' para representar objetos de productos.
class Producto {
    constructor(codigo = '', nombre = '', stock = 0, precio = 0) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
    }
}

class AlmacenProductos {
    constructor() {
        this.items = [];
    }
    
    // Definimos una clase llamada 'AlmacenProductos' que se utilizará para gestionar un inventario de productos.

    cargarProductos() {
        return fs.readFile('./datos.json', 'utf-8')
            .then(data => {// se una para cargar datos de un archivo de manera asincrónica y, una vez cargados, se transforman en objetos de productos para su utilización.
                // Leemos el archivo de datos y, cuando la lectura se complete, se ejecuta la función .then con los datos leídos.
                const productos = JSON.parse(data);
                this.items = productos.map(objeto => new Producto(objeto.codigo, objeto.nombre, objeto.stock, objeto.precio));
                // Analizamos los datos en wl formato JSON y los transformamos en objetos de la clase producto
                return this.items.length;
                // Retornamos la cantidad de productos cargados.
            });
    }
    
    guardarProductos() {
        const datosGuardados = this.items.map(item => ({
            codigo: item.codigo,
            nombre: item.nombre,
            stock: item.stock,
            precio: item.precio,
        }));
        
        const jsonData = JSON.stringify(datosGuardados, null, 2);
        const nombreArchivo = 'data.json';

        return fs.writeFile(nombreArchivo, jsonData, 'utf-8');
    }
    
    mostrarProductos() {
        this.items.forEach(item => {
            console.log(`|    ${item.codigo}    |` +
                `    ${item.nombre}    |` +
                `    ${item.stock}    |` +
                `    ${item.precio}    |`);
        });
    }
    
    actualizarInventario() {
        this.items.forEach(item => {
            item.stock = Math.floor(Math.random() * (45 - 1) + 1);
        });

        console.log(`DATOS CIERRE TIENDA`.bgGreen);
        this.mostrarProductos();
    }
}
// Exportamos la clase 'AlmacenProductos' para que pueda ser utilizada en otros archivos.
module.exports = AlmacenProductos;


