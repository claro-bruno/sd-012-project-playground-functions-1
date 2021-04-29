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
function repNumero(arrNum, arrNum2) {
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

function generatePhoneNumber(arrNum) {
  if (arrNum.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrNum.length; index += 1) {
    if (arrNum[index] < 0 || arrNum[index] > 9 || repNumero(arrNum, arrNum[index]) === true) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let numFinal = [];
  for (let index = 0; index < 11; index += 1) {
    numFinal.push(arrNum[Math.floor(Math.random() * 9)]);
  }
  return `(${numFinal[0]}${numFinal[1]}) ${numFinal[2]}${numFinal[3]}${numFinal[4]}${numFinal[5]}${numFinal[6]}-${numFinal[7]}${numFinal[8]}${numFinal[9]}${numFinal[10]}`;
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
