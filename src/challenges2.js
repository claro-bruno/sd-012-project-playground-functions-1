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
    return 'Array com tamanho incorreto';
  } else {
    for (let i = 0; i < numeros.length; i += 1) {
      let count = 0;
      for (let j = 0; j < numeros.length; j += 1) {
        if (numeros[i] === numeros[j]) {
          count += 1;
          if (count > 2) {
            return 'Não é possível gerar um número de telefone com esses valores';
          }
        }
      }
    }
    return `(${numeros[0]}${numeros[1]})${numeros[2]}${numeros[3]}${numeros[4]}${numeros[5]}${numeros[6]}-${numeros[7]}${numeros[8]}${numeros[9]}${numeros[10]}`;
  }
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1]));

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
