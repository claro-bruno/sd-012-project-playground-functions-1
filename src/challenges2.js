// Desafio 10
let stringArray1 = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let emptyStringArray = [];
let name1 = 'Lucas';

function techList(stringArray, name) {
  if (stringArray.length === 0) {
    return 'Vazio!';
  }
  let sortedArray = stringArray.sort();
  let objectsList = [];
  for (let index = 0; index < stringArray.length; index += 1) {
    let object = { tech: sortedArray[index], name };
    objectsList.push(object);
  }
  return objectsList;
}
console.log(techList(stringArray1, name1));
console.log(techList(emptyStringArray, name1));

// Desafio 11
let elevenNumbersArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 1];
let elevenNumbersArray2 = [1, 3, 3, 4, 5, 6, 7, 8, 3, 0, 1];
let elevenNumbersArray3 = [1, 2, 2, 4, 5, 5, 7, 8, 9, 0, 1];

function repeatCountBuilder(array, verificaNumero, contNumero) {
  for (let index = 0; index < array.length; index += 1) {
    if (verificaNumero === array[index]) {
      contNumero += 1;
    }
  }
  return contNumero;
}

function repeatCounter(array, contRepetido) {
  let contNumero = 0;
  for (let index = 0; index < array.length; index += 1) {
    let verificaNumero = array[index];
    contNumero = repeatCountBuilder(array, verificaNumero, contNumero);
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
    }
    contNumero = 0;
  }
  return contRepetido;
}

function repeatCheck(elevenNumbersArray) {
  let contRepetido = 0;
  contRepetido = repeatCounter(elevenNumbersArray, contRepetido);
  if (contRepetido >= 3) {
    return true;
  }
  return false;
}

function lengthCheck(array) {
  if (array.length !== 11) return true;
}

function numbersCheck(array, boolean) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9 || boolean === true) return true;
  }
}

function buildString(array) {
  let phoneNumber = '(';
  for (let index = 0; index < array.length; index += 1) {
    switch (index) {
    case 2:
      phoneNumber += `) ${array[index]}`;
      break;
    case 3:
      phoneNumber += `${array[index]}`;
      break;
    case 7:
      phoneNumber += `-${array[index]}`;
      break;
    default:
      phoneNumber += array[index];
    }
  }
  return phoneNumber;
}
// 3, 1, 9, 9, 6, 7, 9, 0, 2, 5, 5
// (31) 99679-0255

function generatePhoneNumber(array) {
  let tooManyRepeats = repeatCheck(array);
  let check1 = lengthCheck(array);
  let check2 = numbersCheck(array, tooManyRepeats);
  if (check1) return 'Array com tamanho incorreto.';
  if (check2) return 'não é possível gerar um número de telefone com esses valores';
  // return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  return buildString(array);
}
console.log(generatePhoneNumber(elevenNumbersArray1));
console.log(generatePhoneNumber(elevenNumbersArray2));
console.log(generatePhoneNumber(elevenNumbersArray3));

// Desafio 12
function firstCheck(lineA, lineB, lineC) {
  if (lineA <= lineB + lineC && lineB <= lineA + lineC && lineC <= lineA + lineB) return true;
}

function a(lineB, lineC) {
  return Math.abs(lineB - lineC);
}

function b(lineA, lineC) {
  return Math.abs(lineA - lineC);
}

function c(lineA, lineB) {
  return Math.abs(lineA - lineB);
}

function secondCheck(lineA, lineB, lineC) {
  if (lineA >= a(lineB, lineC) && lineB >= b(lineA, lineC) && lineC >= c(lineA, lineB)) return true;
}

function triangleCheck(lineA, lineB, lineC) {
  if (firstCheck(lineA, lineB, lineC) && secondCheck(lineA, lineB, lineC)) {
    return true;
  }
  return false;
}
console.log(triangleCheck(10, 14, 25));

// Desafio 13
let string1 = '1 cerveja';
let string2 = '1 cachaça, 5 cervejas e 1 copo de vinho';
let string3 = '1 cachaça, 5 cervejas e 1 copo de vinho';

function hydrate(string) {
  let numbers = string.match(/\d+/g).map(Number); // array.match() retorna um array com os matches da expressão regular dentro dos parênteses. A expressão regular '/\d+/g' seleciona dígitos (números) '/\d+/', em toda a string (flag global) 'g'. O método .map(Number) converte um array de strings para um array de integers.
  let sum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}
console.log(hydrate(string1));
console.log(hydrate(string2));
console.log(hydrate(string3));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
