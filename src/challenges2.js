/* eslint-disable max-len */
/* eslint-disable complexity */
/* eslint-disable no-else-return */
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
  } else {
    return 'Vazio!';
  }
}

// Desafio 11
// eslint-disable-next-line max-lines-per-function
function generatePhoneNumber(numeros) {
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
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
    return `(${numeros[0]}${numeros[1]})${numeros[2]}${numeros[3]}${numeros[4]}${numeros[5]}${numeros[6]}-${numeros[7]}${numeros[8]}${numeros[9]}${numeros[10]}`;
  }
}

// Desafio 12
function triangleCheck(a, b, c) {
  return !!(a + b > c && a + c > b && b + c > a && Math.abs(a - b) < c && Math.abs(a - c) < b && Math.abs(b - c) < a);
}
console.log(triangleCheck(10, 14, 8));

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
