// find: crea un nuevo arreglo con base a la condición a revisar, sólo devuelve el primer elemento.

const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet Lenovo", precio: 200 },
  { nombre: "Tablet Xiaomi", precio: 200 },
  { nombre: "Tablet Samsung", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

let resultadoForEach = "";
carrito.forEach((producto, index) => {
  if (producto.nombre === "Celular") {
    resultadoForEach = carrito[index];
  }
});

console.log(resultadoForEach); // { nombre: 'Celular', precio: 700 }

let resultadoFind = carrito.find((producto) => producto.nombre === "Audifonos");

console.log(resultadoFind); // { nombre: 'Audifonos', precio: 300 }
