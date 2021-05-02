// Desafio 10
function techList() {
  // seu código aqui
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
function hydrate(bebida) {
  let regex = /\d+/g; 
  let result = bebida.match(regex);
  let sum = 0;

  for (let index = 0; index < result.length; index += 1 ) {
    sum = sum + parseInt(result[index]);
  }

    return `${'Beba'} ${sum}` + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};