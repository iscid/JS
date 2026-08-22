/*
 * Permite seleccionar clases o ids
 * Similar a getElementById, sólo devuelve un resultado (el primer resultado)
 */

const card = document.querySelector(".card");
console.log(card); // <div class="card"></div>

// Selectores específicos
const info = document.querySelector(".premium .info"); // El espacio entre las clases indica que la seunda está dentro de la primera
console.log(info); // <div class="info"></div>

const otroDiv = document.querySelector(".contenedor-cards.premium");
console.log(otroDiv);

// Segundo card de hospedaje: etiqueta (section) clase hospedaje, y el segundo hijo de la clase card
const segundoCard = document.querySelector(
  "section.hospedaje .card:nth-child(2",
);
console.log(segundoCard);

const formulario = document.querySelector(".contenido-hero #formulario");
console.log(formulario);
