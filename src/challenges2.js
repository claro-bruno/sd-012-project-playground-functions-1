// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  } 
  array.sort();
  let novoarray = [];
  for (let index = 0; index < array.length; index += 1) {
    novoarray[index] = {
      tech: array[index],
      name: name,
    };
  }
  return novoarray;
}

// Desafio 11
function generatePhoneNumber(numero) {
  if (numero.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let numerotel = '(';
  let repetiu = 0;
  for (let posicao = 0; posicao < numero.length; posicao += 1) {
    if (numero[posicao] < 0 || numero[posicao] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (posicao === 2) {
      numerotel += ') ';
    }
    if (posicao === 7) {
      numerotel += '-';
    }
    numerotel += numero[posicao];
    repetiu = 0;
    for (let index = 0; index < numero.length; index += 1) {
      if (numero[posicao] === numero[index]) {
        repetiu += 1;
      }
      if (repetiu >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return numerotel;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let resposta = false;
  if ((lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC))) {
    resposta = true;
  }
  return (resposta);
}

// Desafio 13
function hydrate(bebida) {
  let copoBebida = 0;
  for (let index = 0; index < bebida.length; index += 1) {
    if ((parseInt(bebida[index]) > 0) && (parseInt(bebida[index]) < 9)) {
      copoBebida += parseInt(bebida[index]);
    }
  }
  if (copoBebida > 1) {
    return (copoBebida += ' copos de água');
  }
  return (copoBebida += ' copo de água');
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
