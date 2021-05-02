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
function triangleCheck(lineA, lineB, lineC) {
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
