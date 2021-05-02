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
function reducao(arrayAgua, numeroBebida, arrayBebidas) {
  for (let key in numeroBebida) {
    if (arrayBebidas === numeroBebida[key]) {
      return arrayAgua[key - 1];
    }
  }
}

function chamaObjeto() {
  let numeroBebida = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
  };
  return numeroBebida;
}

function hydrate(bebidas) {
  // seu código aqui
  let agua = 0;
  let arrayBebidas = bebidas.split('');
  let arrayAgua = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let numeroBebida = chamaObjeto();
  for (let charBebida = 0; charBebida < arrayBebidas.length; charBebida += 1) {
    agua += reducao(arrayAgua[charBebida], numeroBebida, arrayBebidas);
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
