// Desafio 10
function techList(techName, name) {
  let objeto = [];
  let lista = {};
  if (techName.length === 0) {
    return 'Vazio!';
  } else {
    for (let key in techName.sort()) {
      lista = {
        tech: techName[key],
        name: name
      };
      objeto.push(lista);
    }
    return objeto;
  }
}

// Desafio 11
function getRepetedPhoneNumber(telefone) {
  let contadorNumero = 0;
  let valorRepetido = 0;
  for (let key in telefone) {
    let verNumero = telefone[key];
    for (let key2 in telefone) {
      if (verNumero === telefone[key2]) {
        contadorNumero += 1;
      }
    }
    if (contadorNumero > valorRepetido) {
      valorRepetido = contadorNumero;
    }
    contadorNumero = 0;
  }
  return valorRepetido;
}
function generatePhoneNumber(telefone) {
  let valorRepetido = getRepetedPhoneNumber(telefone);
  if (telefone.length > 11 || telefone.length < 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let key of telefone) {
    if (valorRepetido >= 3 || key < 0 || key > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  return `(${telefone[0]}${telefone[1]}) ${telefone[2]}${telefone[3]}${telefone[4]}${telefone[5]}${telefone[6]}-${telefone[7]}${telefone[8]}${telefone[9]}${telefone[10]}`;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let difA = (lineB - lineC);
  let difB = (lineA - lineC);
  let difC = (lineB - lineA);
  if (Math.abs(lineA) > Math.abs(difA)) {
    if (lineA < (lineB + lineC)){
      return true;
    }
  } else if (Math.abs(lineB) > Math.abs(difB)) {
    if (lineB < (lineA + lineC)) {
      return true;
    }
  } else if (Math.abs(lineC) > Math.abs(difC)) {
    if (lineC < (lineB + lineA)) {
      return true;
    }
  }
  return false;
}

// Desafio 13
function hydrate(hydrate) {
  let regRule = /\d+/g;
  let arrayHydrate = hydrate.match(regRule);
  let quantia = 0;
  let result = '';
  for (let key = 0; key < arrayHydrate.length; key += 1) {
    quantia += parseInt(arrayHydrate[key]);
  } if (quantia === 1) {
    result = `${quantia} copo de água`;
  } else {
    result = `${quantia} copos de água`;
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
