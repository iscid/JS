// Some: verifica si existe un elemento en un arreglo.

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

// Recorre un arreglo
meses.forEach((mes) => {
  console.log("Mes: ", mes);
});

// Comprueba si un valor existe en un arreglo
meses.forEach((mes) => {
  if (mes === "Abril") {
    console.log(`${mes} existe`);
  }
});

carrito.forEach((producto) => {
  console.log(producto);
});

// Arreglos basados en el índice
const resultado = meses.includes("Marzo");

console.log(resultado ? "Existe" : "No existe");

// Some se utiliza para arreglos de objetos
const existe = carrito.some((producto) => {
  return producto.nombre === "Celular";
});

console.log(existe ? "El producto existe" : "El producto no existe");

// Some también se puede utilizar en arreglos tradicionales

const existeMes = meses.some((mes) => mes === "Mayo");

console.log(existeMes ? `El mes existe` : `El mes no existe`);

// Uso práctico en un campo de búsqueda
