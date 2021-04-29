/* eslint-disable complexity */
// Desafio 10
function techList(techNames, nome) {
  let result = [];
  if (techNames.length > 0) {
    let techSorted = techNames.sort();
    for (let i = 0; i < techSorted.length; i += 1) {
      let objeto = {
        tech: '',
        name: nome,
      };
      objeto.tech = techSorted[i];
      result.push(objeto);
    }
    return result;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(numeros) {
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < numeros.length; i += 1) {
    let count = 0;
    for (let j = 0; j < numeros.length; j += 1) {
      if (numeros[i] === numeros[j]) {
        count += 1;
        if (count > 2 || numeros[i] > 9 || numeros[i] < 0) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  return `(${numeros[0]}${numeros[1]}) ${numeros[2]}${numeros[3]}${numeros[4]}${numeros[5]}${numeros[6]}-${numeros[7]}${numeros[8]}${numeros[9]}${numeros[10]}`;
}

// Desafio 12
function triangleCheck(a, b, c) {
  return !!(a + b > c && a + c > b && b + c > a && Math.abs(a - b) < c && Math.abs(a - c) < b && Math.abs(b - c) < a);
}

// Desafio 13
function hydrate(birita) {
  let arrayQtdBirita = birita.replace(/[^0-9]/g, '').split('');
  let qtdBirita = 0;
  for (let i of arrayQtdBirita) {
    qtdBirita += parseInt(i, 36);
  }
  if (qtdBirita > 1) {
    return `${qtdBirita} copos de água`;
  }
  return `${qtdBirita} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
