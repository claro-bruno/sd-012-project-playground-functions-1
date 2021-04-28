// Desafio 10
let stringArray1 = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let emptyStringArray = [];
let name1 = "Lucas";

function techList(stringArray, name) {
  if (stringArray.length === 0) {
    return 'Vazio!';
  }
  let sortedArray = stringArray.sort();
  let objectsList = [];
  for (let index in sortedArray) {
    let object = {tech: sortedArray[index], name: name};
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
  } else {
    return false;
  }
}
//console.log(repeats3OrMoreTimes(elevenNumbersArray1));
//console.log(repeats3OrMoreTimes(elevenNumbersArray2));
//console.log(repeats3OrMoreTimes(elevenNumbersArray3));

function generatePhoneNumber(elevenNumbersArray) {
  let tooManyRepeats = repeats3OrMoreTimes(elevenNumbersArray);
  if (elevenNumbersArray.length !== 11) {
    return "Array com tamanho incorreto.";
  }
  for (let index in elevenNumbersArray) {
    if (elevenNumbersArray[index] < 0 || elevenNumbersArray[index] > 9 || tooManyRepeats === true) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  return `(${elevenNumbersArray[0]}${elevenNumbersArray[1]}) ${elevenNumbersArray[2]}${elevenNumbersArray[3]}${elevenNumbersArray[4]}${elevenNumbersArray[5]}${elevenNumbersArray[6]}-${elevenNumbersArray[7]}${elevenNumbersArray[8]}${elevenNumbersArray[9]}${elevenNumbersArray[10]}`;
}
console.log(generatePhoneNumber(elevenNumbersArray1));
console.log(generatePhoneNumber(elevenNumbersArray2));
console.log(generatePhoneNumber(elevenNumbersArray3));

// Desafio 12
function triangleCheck() {
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
