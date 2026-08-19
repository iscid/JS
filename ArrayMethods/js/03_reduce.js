// reduce: devuelve lo acumulado

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

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

// Ejemplo con forEach
let total = 0;

carrito.forEach((producto) => {
  total += producto.precio;
});

console.log(`El total con forEach es ${total}`);

// Ejemplo con reduce
let totalReduce = carrito.reduce((total, producto) => {
  return total + producto.precio;
}, 0);

console.log("El total con reduce: ", totalReduce);
