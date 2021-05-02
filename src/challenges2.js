// Desafio 10
function techList(array, name) {
  array.sort();
  let juncao = [];
  if (array.length == 0){
    return "Vazio!";
  }
  for (let index in array) {
  let objetoCoisas = {
      tech: array[index],
      name: name,
    };
juncao.push(objetoCoisas);
  }
  return juncao;
}

// Desafio 11
function generatePhoneNumber(array) {
  let numero = array.map(String);
  let ddd = "";
  let primeiraPart = "";
  let segundaPart = "";
  let repete = 0;
  let contagem = 0;
  if (array.length !== 11){
    return "Array com tamanho incorreto."
  }
  for (let index in array){
    if (numero[index] < 0 || numero[index] > 9){
      return "não é possível gerar um número de telefone com esses valores"
    }
  }
  for (let index in array){
    if (array[index] == numero[index]){
      repete = array[index]
    }
  }
  for (let index in array){
    if (array[index] == repete){
      contagem += 1
    }
  }
  if (contagem > 2){
    return "não é possível gerar um número de telefone com esses valores"
  }
  for (let index = 0; index <= 1; index += 1){
    ddd += numero[index];
}
  for (let index = 2; index <= 6; index += 1){
    primeiraPart += numero[index]; 
  }
  for(let index = 7; index < 11; index += 1){
    segundaPart += numero[index];
}
  return `(${ddd}) ${primeiraPart}-${segundaPart}`
}

// Desafio 12
let eTringulo = false;

function triangleCheck(lineA, lineB, lineC) {
  let somaLados = Math.abs(lineA + lineB + lineC);
if (lineA > somaLados || lineB > somaLados || lineC > somaLados){
  eTringulo = false;
} else if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)){
  eTringulo = true;
} else {
  eTringulo = false;

}
return eTringulo;
}

// Desafio 13
function hydrate(string) {
let somaNum = 0;
let numeros = /\d+/g;
let resultado = string.match(numeros);
  for (let index = 0; index < resultado.length; index += 1){
    somaNum += parseInt(resultado[index]);
  };
  if (somaNum !== 1){
    return (somaNum + " copos de água");
  } else {
    return (somaNum + " copo de água")
  };

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
