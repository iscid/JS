// filter: crea un nuevo arreglo con base al parámetro.

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

const television = carrito.filter((producto) => {
  return producto.nombre === "Television";
  //   return producto.nombre !== "Television";
});

console.log(television);

let menorQuinientos = carrito.filter((producto) => {
  return producto.precio < 500;
  //   return producto.precio > 500;
});

console.log(menorQuinientos);
