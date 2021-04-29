// Desafio 10
function bubbleSortchange(index, secondIndex, array) {
  if (array[index] < array[secondIndex]) {
    let position = array[index];
    array[index] = array[secondIndex];
    array[secondIndex] = position;
  }
  return array;
}
function bubbleSort(array) {
// Sort bubble retirado do link: https://app.betrybe.com/course/fundamentals/introducao - a - javascript - e - logica - de - programacao/javascript - array - e - loop - for/3d453622 - 6c99 - 46af - a884 - fecc68811230/exercicios/565f9827 - b39d - 4f06 - 95ae - 419cebb4f782/bonus/24730d5a - f630 - 4053 - 81b5 - 51f6bd110199?use_case=side_bar
  for (let index = 1; (index < (array.length)); index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      array = bubbleSortchange(index, secondIndex, array);
    }
  }
  return array;
}
function geraObjetosordenados(arrayEntrada, nome, arraySaida) {
  for (let key in arrayEntrada) {
    if ({}.hasOwnProperty.call(arrayEntrada, key)) {
      arraySaida[key] = { tech: arrayEntrada[key], name: nome };
    }
  }
  return arraySaida;
}
function techList(tecnologia, nome) {
  if ((tecnologia.length) === 0) {
    return 'Vazio!';
  }
  let objetosOrdenados = [];
  tecnologia = bubbleSort(tecnologia);
  objetosOrdenados = geraObjetosordenados(tecnologia, nome, objetosOrdenados);
  return objetosOrdenados;
}

// Desafio 11
function checkPhoneNumber1(arrayNum) {
  if ((arrayNum.length) !== 11) {
    return 'Array com tamanho incorreto.';
  }
  return true;
}
function checkPhoneNumber2(arrayNum) {
  let checkNum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let index = 0; index < (arrayNum.length); index += 1) {
    checkNum[arrayNum[index]] += 1;
    if (arrayNum[index] > 9 || arrayNum[index] < 0 || checkNum[arrayNum[index]] > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return true;
}
function styleNumber(index, arrayNum) {
  switch (index) {
  case 2:
    return `) ${arrayNum[index]}`;
  case 7:
    return `-${arrayNum[index]}`;
  default:
    return arrayNum[index];
  }
}
function generatePhoneNumber(arrayNum) {
  let check = checkPhoneNumber1(arrayNum);
  if (check !== true) { return check; }
  check = checkPhoneNumber2(arrayNum);
  if (check !== true) { return check; }
  let numero = '(';
  for (let index = 0; index < (arrayNum.length); index += 1) {
    numero += styleNumber(index, arrayNum);
  }
  return numero;
}

// Desafio 12
function lineOk(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) {
    return true;
  }
  return false;
}
function triangleCheck(lineA, lineB, lineC) {
  return lineOk(lineA, lineB, lineC) && lineOk(lineB, lineA, lineC) && lineOk(lineC, lineA, lineB);
}

// Desafio 13
function hydrate(strBebidas) {
  let qtdBedidas = strBebidas.replace(/\D/g, '');
  let qtdTotal = 0;
  for (let index = 0; index < qtdBedidas.length; index += 1) {
    qtdTotal += parseInt(qtdBedidas[index], 10);
  }
  if (qtdTotal === 1) {
    return `${qtdTotal} copo de água`;
  }
  return `${qtdTotal} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
