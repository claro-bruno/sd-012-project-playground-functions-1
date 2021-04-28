let array = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let nome = 'lucas';

// Desafio 10
function techList(array, nome) {
  let obj = {};
  if (array.length >= 0) {
    for (let i = 0; i < array.length; i += 1) {
      obj[i] = { tech: array[i], name: nome };
    }
    return obj;
  } else {
    return 'vazio';
  }
}
console.log(techList(array, nome));

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
