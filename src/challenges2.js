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
const telefone = (array) => {
  let fone = '(xx) xxxxx-xxxx';
  array.forEach((num) => {
    fone = fone.replace('x', num);
  });
  return fone;
};

function generatePhoneNumber(numeros) {
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let contadores = {};
  numeros.forEach((i) => { contadores[i] = (contadores[i] || 0) + 1; });
  for (let i in contadores) {
    if (contadores[i] > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return telefone(numeros);
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
