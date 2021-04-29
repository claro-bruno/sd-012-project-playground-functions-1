// Desafio 10
function techList(arrayTecnologias, name) {
  // seu código aqui
  let ordenado = arrayTecnologias.sort();
  let objeto = [];
  if (ordenado.length > 0) {
    for (let i = 0; i < ordenado.length; i += 1) {
      objeto[i] = { tech: ordenado[i], name: name };
    }
    return objeto;
  } else {
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(numeroTelefone) {
  // seu código aqui
  let numeroArrumado = [];
  let repetido = 0;
  let numeroRepetido = [];
  let maior = 0;

  for (let i = 0; i < numeroTelefone.length; i += 1) {
    if (numeroTelefone.length !== 11) {
      return 'Array com tamanho incorreto.';
    } else if (numeroTelefone[i] < 0 || numeroTelefone[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
      if (numeroTelefone[i] == numeroTelefone[i - 1]) {
        repetido += 1;
      }
      if (repetido > 2) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
  }

  for (let index in numeroTelefone) {
    numeroArrumado = `(${numeroTelefone[0]}${numeroTelefone[1]})`;
  }
  return numeroArrumado;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 1, 7, 8, 0, 9, 1]));

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
