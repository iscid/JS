const meses = ["Enero", "Febrero", "Marzo"];

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

// spreed operator: crea una copia del arreglo original y agrega los nuevos elementos
const mesesDos = [...meses, "Abril"];
const mesesTres = ["Mayo", ...mesesDos];

console.log(mesesDos);
console.log(mesesTres);

const producto = { nombre: "Disco duro", precio: 250 };
const productoDos = { nombre: "Laptop", precio: 1450 };

const carritoDos = [...carrito, producto];
console.log("Carrito Dos: ", carritoDos);

const carritoTres = [productoDos, ...carritoDos];
console.log("Carrito Tres: ", carritoTres);
