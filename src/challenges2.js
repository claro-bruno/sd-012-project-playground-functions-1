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
  for (let index in sortedArray) {
    let object = { tech: sortedArray[index], name: name };
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

function repeats3OrMoreTimes(elevenNumbersArray) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in elevenNumbersArray) {
    let verificaNumero = elevenNumbersArray[index];
    for (let index2 in elevenNumbersArray) {
      if (verificaNumero === elevenNumbersArray[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  if (contRepetido >= 3) {
    return true;
  }
  return false;
}
// console.log(repeats3OrMoreTimes(elevenNumbersArray1));
// console.log(repeats3OrMoreTimes(elevenNumbersArray2));
// console.log(repeats3OrMoreTimes(elevenNumbersArray3));

function generatePhoneNumber(elevenNumbersArray) {
  let tooManyRepeats = repeats3OrMoreTimes(elevenNumbersArray);
  if (elevenNumbersArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index in elevenNumbersArray) {
    if (elevenNumbersArray[index] < 0 || elevenNumbersArray[index] > 9 || tooManyRepeats === true) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${elevenNumbersArray[0]}${elevenNumbersArray[1]}) ${elevenNumbersArray[2]}${elevenNumbersArray[3]}${elevenNumbersArray[4]}${elevenNumbersArray[5]}${elevenNumbersArray[6]}-${elevenNumbersArray[7]}${elevenNumbersArray[8]}${elevenNumbersArray[9]}${elevenNumbersArray[10]}`;
}
console.log(generatePhoneNumber(elevenNumbersArray1));
console.log(generatePhoneNumber(elevenNumbersArray2));
console.log(generatePhoneNumber(elevenNumbersArray3));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  } else if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC || lineC < Math.abs(lineA - lineB))) {
    return false;
  }
  return true;
}
console.log(triangleCheck(10, 14, 4));

// Desafio 13
let string1 = '1 cerveja';
let string2 = '1 cachaça, 5 cervejas e 1 copo de vinho';
let string3 = '1 cachaça, 5 cervejas e 1 copo de vinho';

function hydrate(string) {
  let numbers = string.match(/\d+/g).map(Number); // array.match() retorna um array com os matches da expressão regular dentro dos parênteses. A expressão regular '/\d+/g' seleciona dígitos (números) '/\d+/', em toda a string (flag global) 'g'. O método .map(Number) converte um array de strings para um array de integers.
  let sum = 0;
  for (let index in numbers) {
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
