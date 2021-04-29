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

function msgErro(arrNum) {
  for (let index = 0; index < arrNum.length; index += 1) {
    if (arrNum[index] < 0) {
      return true;
    }
    if (arrNum[index] > 9) {
      return true;
    }
    if (repNumero(arrNum, arrNum[index])) {
      return true;
    }
  }
  return false;
}

function gerNum(arrNum, n1, n2) {  
  return arrNum.slice(n1, n2).join('');
}

function generatePhoneNumber(arrNum) {
  if (arrNum.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (msgErro(arrNum)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${gerNum(arrNum, 0, 2)}) ${gerNum(arrNum, 2, 7)}-${gerNum(arrNum, 7, 11)}`;
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
