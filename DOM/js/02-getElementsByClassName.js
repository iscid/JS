// Seleccionar elementos por su clase, puede obtener más de un elemento.

const header = document.getElementsByClassName("header");
console.log(header); // HTMLCollection [header.header.contenedor]

const noExiste = document.getElementsByClassName("no-existe");
console.log(noExiste); // HTMLCollection []

const card = document.getElementsByClassName("card");
console.log(card); // HTMLCollection(15) [div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card]
