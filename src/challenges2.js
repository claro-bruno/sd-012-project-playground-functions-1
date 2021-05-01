// Desafio 10
function techList(techs, name) {
  let rtn = [];
  techs.sort();
  if (techs.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < techs.length; index += 1) {
    rtn.push({
      tech: techs[index],
      name: name,
    });
  }
  return rtn;
}

// Desafio 11
function generatePhoneNumber(array) {
  let count = 0;
  let number = '(';
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 9 || array[i] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    count = 0;
    for (let j = 1; j < array.length; j += 1) {
      if (array[j] === array[i]) {
        count += 1;
        if (count >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  for (let k = 0; k < array.length; k += 1) {
    if (k === 2) {
      number += ') ';
    } else if (k === 7) {
      number += '-';
    }
    number += array[k];
  }
  return number;
}

// Desafio 12
function triangleCheck(A, B, C) {
  return (A < B + C && A > Math.abs(B - C)) || (B < A + C && B > Math.abs(A - C) || (C < B + A && C > Math.abs(B - A))) ;
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
