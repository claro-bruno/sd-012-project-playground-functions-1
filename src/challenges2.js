// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11

let phNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

//Verifica tamanho da array
if (phNumber.length > 11 || phNumber.length < 11) {
  return "Array com tamanho incorreto.";
};

//Verifica se é menor que 0 ou maior que 9
for (let verifica11 = 0; verifica11 < phNumber.length; verifica11 += 1){
  if (phNumber[verifica11] < 0 || phNumber[verifica11] > 9){
    return "não é possível gerar um número de telefone com esses valores";
  };
};

//verifica se o número aparece 3 vezes
for (let search11 = 0; search11 < phNumber.length; search11 += 1){
  for (let buscador11 = 0; buscador11 < phNumber.length; buscador11 += 1){
    if (phNumber[search11] === )
  };
};

function generatePhoneNumber(phNumber) {

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
