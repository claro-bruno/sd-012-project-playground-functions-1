// Desafio 10
function techList(param1, param2) {
  let param1 = ['react', 'jest', 'html'];
  let param1obj = {};
  for (let index = 0; index < param1.length; index += 1) {
    param1.tech = param1[index];
    param1obj.push(param1.tech);
  }
  console.log(param1obj)
}

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
