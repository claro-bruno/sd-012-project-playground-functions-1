// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11

let phNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

function generatePhoneNumber(phNumber) {

  let phSintaxe = 0;

  if (phNumber.length > 11 || phNumber.length < 11) {
    return "Array com tamanho incorreto.";
  } 

  let compareN = 0;
  let qntN = 0;

  for (let index = 0; index < phNumber; index += 1){
    compareN = phNumber[index];

    for (let index2 = 0; index2 < phNumber; index2 += 1){
      if (compareN === phNumber[index2]){
        qnt += 1;
      }
    }
  }

  if (qntN === 3 || qntN > 3){
    return "não é possível gerar um número de telefone com esses valores";
  }

  for (let index3 = 0; index3 < phNumber; index3 += 1){
    if (phNumber[index3] < 0 || phNumber[index3] > 9){
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

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
