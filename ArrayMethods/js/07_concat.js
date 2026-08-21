// concat: permite unir dos arreglos

const primerCuatrimestre = ["Enero", "Febrero", "Marzo", "Abril"];
const segundoCuatrimestre = ["Mayo", "Junio", "Julio", "Agosto"];
const tercerCuatrimestre = ["Septiembre", "Octubre", "Noviembre", "Diciembre"];

const anioCompleto = primerCuatrimestre.concat(
  segundoCuatrimestre,
  tercerCuatrimestre,
);

console.log(anioCompleto);

const lenguajes = ["JavaScript", "PHP", "Python"];

const frameworks = ["React", "Laravel", "Django"];

// Ejemplo con spreed operator: es posible pasar otro arreglo o un valor
const resultado = [...lenguajes, ...frameworks, "Vue"]; // [ 'JavaScript', 'PHP', 'Python', 'React', 'Laravel', 'Django', 'Vue' ]

const resultadoDos = [...lenguajes, ...frameworks, "Vue", ..."Angular"]; // [ 'JavaScript', 'PHP', 'Python', 'React', 'Laravel', 'Django', 'Vue', 'A', 'n', 'g', 'u', 'l', 'a', 'r' ]

console.log(resultado);
console.log(resultadoDos);
