// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(foneNumber) {
  // seu código aqui
  let counter;
  let prefix = '(' + foneNumber[0] + foneNumber[1] + ') ';
  let numberBegin = `${foneNumber[2]}${foneNumber[3]}${foneNumber[4]}${foneNumber[5]}${foneNumber[6]}`;
  let numberFinal = `${foneNumber[7]}${foneNumber[8]}${foneNumber[9]}${foneNumber[10]}`;

  for (let index = 0; index < foneNumber.length; index += 1) {
    if (foneNumber.length !== 11) {
      return 'Array com tamanho incorreto.';
    }
    if (foneNumber[index] < 0 || foneNumber[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (let indexCheck = 0; indexCheck < foneNumber.length; indexCheck += 1) {
    for (let indexCompare = 0; indexCompare < foneNumber.length; indexCompare += 1) {
      if (foneNumber[indexCheck] === foneNumber[indexCompare]) {
        counter += 1;
      }
    }
    if (counter >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    counter = 0;
  }
return prefix + numberBegin + '-' + numberFinal;
}
console.log(generatePhoneNumber([1,2,3,4,5,5,6,8,9,0,2]));
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
