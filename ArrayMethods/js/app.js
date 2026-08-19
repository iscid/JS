const productos = [
  {
    id: 1,
    nombre: "Laptop Lenovo",
    categoria: "Computadoras",
    precio: 15000,
    etiquetas: ["laptop", "computadora", "oficina"],
  },
  {
    id: 2,
    nombre: "Laptop HP",
    categoria: "Computadoras",
    precio: 18000,
    etiquetas: ["laptop", "computadora", "trabajo"],
  },
  {
    id: 3,
    nombre: "Mouse Logitech",
    categoria: "Accesorios",
    precio: 650,
    etiquetas: ["mouse", "accesorio", "computadora"],
  },
  {
    id: 4,
    nombre: "Teclado Logitech",
    categoria: "Accesorios",
    precio: 900,
    etiquetas: ["teclado", "accesorio", "computadora"],
  },
  {
    id: 5,
    nombre: "Monitor Samsung",
    categoria: "Monitores",
    precio: 4500,
    etiquetas: ["monitor", "pantalla", "computadora"],
  },
  {
    id: 6,
    nombre: "Monitor LG",
    categoria: "Monitores",
    precio: 5200,
    etiquetas: ["monitor", "pantalla", "oficina"],
  },
];

const buscador = document.querySelector("#buscador");
const resultados = document.querySelector("#resultados");

// Mostrar todos los productos inicialmente
// mostrarProductos(productos);

// Detectar lo que escribe el usuario
buscador.addEventListener("input", function () {
  const texto = buscador.value.toLowerCase().trim();

  // Si el buscador está vacío mostramos todos
  if (texto === "") {
    mostrarProductos(productos);
    return;
  }

  // Buscar coincidencias
  const productosEncontrados = productos.filter((producto) => {
    return (
      producto.nombre.toLowerCase().includes(texto) ||
      producto.categoria.toLowerCase().includes(texto) ||
      producto.etiquetas.some((etiqueta) =>
        etiqueta.toLowerCase().includes(texto),
      )
    );
  });

  mostrarProductos(productosEncontrados);
});

// Función para pintar los productos
function mostrarProductos(productos) {
  resultados.innerHTML = "";

  if (productos.length === 0) {
    resultados.innerHTML = `
            <p class="sin-resultados">
                No se encontraron productos.
            </p>
        `;

    return;
  }

  productos.forEach((producto) => {
    resultados.innerHTML += `
            <div class="producto">

                <h3>${producto.nombre}</h3>

                <p>
                    Categoría: ${producto.categoria}
                </p>

                <p class="precio">
                    $${producto.precio.toLocaleString("es-MX")}
                </p>

            </div>
        `;
  });
}
