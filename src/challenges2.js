// Desafio 10*
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!'
  } else {
    let arrayTech = [];
    for (let index in tech.sort()) {
      let tecnologias = {
        tecnologia: tech[index],
        nome: name
      };
      arrayTech.push(tecnologias);
    }
    return arrayTech;
  }
}

// Desafio 11*
function generatePhoneNumber(arrayNumbers) {
  let numeroCorreto = true;
  let numero;
  if (arrayNumbers.length === 11) {
    for (let index = 0; index < arrayNumbers.length; index += 1) {
      let count = 0;
      numero = arrayNumbers[index];
      for (let number of arrayNumbers) {
        if (number === arrayNumbers[index]) {
          count += 1;
        }
      }

      if (arrayNumbers[index] > 9 || arrayNumbers[index] < 0 || count >= 5) {
        numeroCorreto = false;
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  } else {
    numeroCorreto = false;
    return 'Array com tamanho incorreto.';
  }
  if (numeroCorreto === true) {
    let numeroFinal = '(';
    for (let indice = 0; indice < 11; indice += 1) {
      numeroFinal = numeroFinal + arrayNumbers[indice];
        if (indice === 1) {
        numeroFinal = numeroFinal + ')'
      } else if (indice === 6) {
        numeroFinal = numeroFinal + '-'
      }
    }
    return numeroFinal;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (
    Math.abs(lineA + lineB) > lineC &&
    Math.abs(lineB + lineC) > lineA &&
    Math.abs(lineC + lineB) > lineA &&
    Math.abs(lineA - lineB) < lineC &&
    Math.abs(lineB - lineC) < lineA &&
    Math.abs(lineC - lineB) < lineA
  ) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(pedidos) {
  let soma = 0;
  pedidos = pedidos.toString().split('');
  for (let pedido of pedidos) {
    pedido = parseInt(pedido) || 0;
    soma = soma + pedido;
  }

  if (soma === 1) {
    return `${soma} copo de água`;
  } else {
    return `${soma} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
