// Desafio 10
function techList(arrayTech, name) {
  tecnologia = {tech:arrayTech , nome:name}

  return tecnologia;
}

let minhaHonda = {cor: "vermelho", rodas: 4, motor: {cilindros: 4, tamanho: 2.2}};
console.log(minhaHonda);
console.log(techList('JavaScript','Pedro'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
