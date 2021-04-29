// Desafio 10
function techList(tech, name) {
  // seu código aqui

}

// Desafio 11
function generatePhoneNumber(arr) {
  // seu código aqui
  // AJUDA EM: https://www.florin-pop.com/blog/2019/04/jcc-create-a-phone-number/
  return `(${arr.slice(0, 2).join('')}) ${arr.slice(2, 7).join('')}-${arr.slice(7, 11).join('')}`;
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
