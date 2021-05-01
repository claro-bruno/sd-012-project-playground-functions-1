// Desafio 10
function techList(arrayTech, name) {
  // seu código aqui
   let saida = [];

   for (let index = 0; index < arrayTech.length; index += 1){
     saida.push(index);
   }

   return saida;
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Luciano'));

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
