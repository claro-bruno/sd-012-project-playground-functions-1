// Desafio 10
function techList(array, name) {
  let listaObjetos = [];
  if (array.length > 0) {
    let arraySort = array.sort();
    for (let i = 0; i < arraySort.length; i += 1) {
      listaObjetos.push({ tech: arraySort[i], name });
    }
    return listaObjetos;
  }
  return 'Vazio!';
}

function repeticao(array) {
  for (let i = 0; i < array.length; i += 1) {
    let vezes = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        vezes += 1;
      }
      if (vezes >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return true;
}

function verificaNumeros(array) {
  const erro = 'não é possível gerar um número de telefone com esses valores';
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 9) { return erro; }
    if (array[i] < 0) { return erro; }
  }
  return repeticao(array);
}

function changePosition(arr, from, to) {
  arr.splice(to, 0, arr.splice(from, 1)[0]);
  return arr;
}

// Desafio 11

function generatePhoneNumber(array) {
  if (array.length !== 11) { return 'Array com tamanho incorreto.'; }
  let resposta = verificaNumeros(array);
  if (resposta === true) {
    array.unshift('(', ')', '-', ' ');
    array = changePosition(array, 1, 3);
    array = changePosition(array, 4, 1);
    array = changePosition(array, 2, 10);
    array = changePosition(array, 4, 2);
    array = changePosition(array, 3, 4);
    array = array.join('');
    return array;
  }
  return resposta;
}

// Desafio 12
function triangleCheck(a, b, c) {
  // seu código aqui
  if (a < (b + c) && a > Math.abs(c - b)) {
    return true;
  }
  if (b < (a + c) && b > Math.abs(a - c)) {
    return true;
  }
  if (c < (b + a) && c > Math.abs(b - b)) {
    return true;
  }

  return false;
}

// Desafio 13
function hydrate(string) {
  let dale = 0;
  let numeros = string.split('');
  console.log(numeros);
  numeros = numeros.filter((valor) => {
    if (Number(valor)) {
      dale += Number(valor);
    }
    return dale;
  });
  return dale > 1 ? `${dale} copos de água` : `${dale} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
