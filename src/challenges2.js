// Desafio 10
function techList(array, name) {
  // seu código aqui
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort();
  let objectArray = [];
  for (let tech in array) {
    objectArray[tech] = {
      tech: array[tech],
      name,
    };
  }
  return objectArray;
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let number in array) {
    if (array[number] < 0 || array[number] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let count = 0;
    for (let position in array) {
      if (array[position] === array[number]) {
        count += 1;
      }
    }
    if (count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let arrayString = array.join('');
  return `(${arrayString.slice(0, 2)}) ${arrayString.slice(2, 7)}-${arrayString.slice(7)}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let checkSides = lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB;
  let checkMeasure = lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC)
  && lineC > Math.abs(lineA - lineB);
  return checkSides && checkMeasure;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let numbers = string.match(/\d+/g).map(Number);
  // O código a seguir foi retirado de: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return `${numbers.reduce(reducer)} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
