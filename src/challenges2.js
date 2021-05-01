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
function hydrate(string) {
let somaNum = 0;
let numeros = /\d+/g;
let resultado = string.match(numeros);
  for (let index = 0; index < resultado.length; index += 1){
    somaNum += parseInt(resultado[index]);
  }
  if (somaNum !== 1){
    return (somaNum + " copos de água");
  } else {
    return (somaNum + " copo de água")
  }

}
console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"))
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
