const { compareTrue } = require("./challenges");

// Desafio 10
function techList(lista, name) {
  let listaSaida = [];
  if (lista.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < lista.length; index += 1) {
    let objeto = {
      tech: lista[index],
      name,
    };
    listaSaida.push(objeto);
  }
  return listaSaida.sort(function (a, b) {
    if (a.tech < b.tech) {
      return -1;
    }
    return true;
  });
}

// Desafio 11
function repNumero (arrNum, arrNum2) {
  let count = 0;
  for (let index = 0; index < arrNum.length; index += 1) {
    if (arrNum[index] === arrNum2) {
      count += 1;
    }
  }
  if (count >= 3) {
    return true;
  }
  return false;
}

function gerNum (arrNum, n) {
  let vezes = '';
  for (let index = 0; index < n; index += 1) {
    vezes += arrNum[Math.floor(Math.random() * 9)];
  }
  return vezes;
}

function generatePhoneNumber(arrNum) {
  if (arrNum.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrNum.length; index += 1) {
    if (arrNum[index] < 0 || arrNum[index] > 9 || repNumero(arrNum, arrNum[index]) === true) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${gerNum(arrNum, 2)}) ${gerNum(arrNum, 5)}-${gerNum(arrNum, 4)}`;
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
