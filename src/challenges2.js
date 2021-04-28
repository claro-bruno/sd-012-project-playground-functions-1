// Desafio 10
function techList(tech, name) {

  tech = tech.sort();

  let tecnologias = {
    tecnologia: tech,
    nome: name
  };

  if (tech.length > 0) {
    for (let index = 0; index < tech.length; index += 1 ) {
      console.log(`${tecnologias.tecnologia[index]}, ${tecnologias.nome}`);
    }
  } else if (tech.length === 0) {
    console.log('Vazio!');
  }
}

// Desafio 11
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

      if (arrayNumbers[index] > 9 || arrayNumbers[index] < 0 || count >= 3) {
        numeroCorreto = false;
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  } else {
    numeroCorreto = false;
    return 'Array com tamanho incorreto.';
  }
  if (numeroCorreto === true) {
    return `(${arrayNumbers[0]}${arrayNumbers[1]}) ${arrayNumbers[2]}${arrayNumbers[3]}${arrayNumbers[4]}${arrayNumbers[5]}${arrayNumbers[6]}-${arrayNumbers[7]}${arrayNumbers[8]}${arrayNumbers[9]}${arrayNumbers[10]}`;
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
