// every: todos los elementos deben cumplir con la condición para que devuelva true.

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

const resultado = carrito.every((producto) => {
  //   return producto.precio < 1000; // true
  return producto.precio > 1000; // false
});

console.log(resultado ? "La cumple" : "No la cumple");
