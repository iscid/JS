// findIndex: devuleve el índice en caso de existir el elemento, o -1 si no lo encuentra.

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

meses.forEach((mes, index) => {
  if (mes === "Abril") {
    console.log(`Encontrado en el índice ${index}`);
  }
});

const indice = meses.findIndex((mes) => {
  return mes === "Abril";
});

console.log(indice);

const indiceCarrito = carrito.findIndex((producto) => {
  return producto.nombre === "Teclado";
});

console.log("Indice del producto dentro del carrito: ", indiceCarrito);
