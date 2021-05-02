// Desafio 10
function techList(tecName, n4me) {
  // seu código aqui
  let techNameOrdenado = tecName.sort();
  let tecListReturn = [];
  if (tecName.length !== 0) {
    for (let key = 0; techNameOrdenado.length > key; key += 1) {
      let tecList = {
        tech: techNameOrdenado[key],
        name: n4me,
      };
      tecListReturn.push(tecList);
    }
  } else {
    return 'Vazio!';
  }
  return tecListReturn;
}

// Desafio 11
function testIntervalo(key, numeroTel) {
  if (numeroTel[key] < 0 || numeroTel[key] > 9) {
    return false;
  }
}

function compara(key, repeti, numeroTel) {
  if (numeroTel[key] === numeroTel[repeti]) {
    return 1;
  }
  return 0;
}

function testRepeticao(key, numeroTel) {
  let repetido = 0;
  for (let repeti = key + 1; repeti < numeroTel.length; repeti += 1) {
    repetido += compara(key, repeti, numeroTel);
    if (repetido >= 2) {
      return false;
    }
  }
  return true;
}

function testNumValido(numeroTel) {
  for (let key = 0; key < numeroTel.length; key += 1) {
    if (testIntervalo(key, numeroTel) === false) {
      return false;
    }
    if (testRepeticao(key, numeroTel) === false) {
      return false;
    }
  }
  return true;
}

function generatePhoneNumber(T) {
  // seu código aqui
  if (T.length === 11) {
    if (testNumValido(T) === true) {
      return `(${T[0]}${T[1]}) ${T[2]}${T[3]}${T[4]}${T[5]}${T[6]}-${T[7]}${T[8]}${T[9]}${T[10]}`;
    }
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return 'Array com tamanho incorreto.';
}

// Desafio 12
function soma(a, b, c) {
  if (a > b + c || b > a + c || c > a + b) {
    return false;
  }
  return true;
}

function subtracao(a, b, c) {
  if (a < Math.abs(b - c) || b < Math.abs(a - c) || c < Math.abs(a - b)) {
    return false;
  }
  return true;
}

function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (soma(lineA, lineB, lineC) === false) {
    return false;
  }
  if (subtracao(lineA, lineB, lineC) === false) {
    return false;
  }
  return true;
}

// Desafio 13
function one2five(bebidas) {
  if (bebidas === '1') {
    return 1;
  }
  if (bebidas === '2') {
    return 2;
  }
  if (bebidas === '3') {
    return 3;
  }
  if (bebidas === '4') {
    return 4;
  }
  if (bebidas === '5') {
    return 5;
  }
}

function six2nine(bebidas) {
  switch (bebidas) {
  case '6':
    return 6;
  case '7':
    return 7;
  case '8':
    return 8;
  case '9':
    return 9;
  default:
    break;
  }
}

function switchNum(bebidas) {
  if (bebidas < '6' && bebidas > '1') {
    return one2five(bebidas);
  }
  if (bebidas > '5' && bebidas <= '9') {
    return six2nine(bebidas);
  }
  return 0;
}

function hydrate(bebidas) {
  // seu código aqui
  let agua = 0;
  let arrayBebidas = bebidas.split();
  for (let key; key < arrayBebidas.length; key += 1) {
    agua += switchNum(arrayBebidas[key]);
  }
  if (agua !== 1) {
    return `${agua} copos de água`;
  }
  return '1 copo de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
