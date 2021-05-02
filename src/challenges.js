// Desafio 1
function compareTrue(numb1, numb2) {
  if (numb1 === true && numb2 === true) {
    return true;
  } else {
    return false;
  }
}
// console.log(compareTrue(false, true));
// console.log(compareTrue(false, false));
// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  return (base * heigth) / 2;
}
// console.log(calcArea(10, 50));
// console.log(calcArea(5, 2));
// console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  // let string = 'go trybe';
  let array = string.split(' ');
  return array;
}
// console.log(splitSentence('go trybe'));
// console.log(splitSentence('vamo que vamo'));
// console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  // seu código aqui
  let inicio = array[0];
  let final = array[array.length - 1];
  return final + ', ' + inicio;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vitoria = wins * 3;
  let empates = ties * 1;
  let soma = vitoria + empates;
  return soma;
}
// console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior = 0;
  let result = 0;
  // aqui ele verifica qual é o maior
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  // aqui ele me mostra quantas vezes ele se repete
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maior) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  let resposta;
  if (distanceCat1 < distanceCat2) {
    resposta = 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    resposta = 'cat2';
  } else {
    resposta = 'os gatos trombam e o rato foge';
  }
  return resposta;
}
// console.log(catAndMouse(0, 6, 12));

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let arrayFinal = [];
  for (index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayFinal.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      arrayFinal.push('fizz');
    } else if (array[index] % 5 === 0) {
      arrayFinal.push('buzz');
    } else {
      arrayFinal.push('bug!');
    }
  }
  return arrayFinal;
}
// console.log(fizzBuzz([7, 9]));

// Desafio 9
function encode(string) {
  // seu código aqui
  let newString = '';
  let consonant = '';
  // a -> 1
  // e -> 2
  // i -> 3
  // o -> 4
  // u -> 5
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      newString += '1';
    } else if (string[index] === 'e') {
      newString += '2';
    } else if (string[index] === 'i') {
      newString += '3';
    } else if (string[index] === 'o') {
      newString += '4';
    } else if (string[index] === 'u') {
      newString += '5';
    } else {
      consonant = string[index];
      newString += consonant;
    }
  }
  return newString;
}
// console.log(encode('hi there!'));
function decode(string) {
  // seu código aqui
  // a -> 1
  // e -> 2
  // i -> 3
  // o -> 4
  // u -> 5
  let newString = '';
  let constant = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index === '1']) {
      newString += 'a';
    } else if (string[index] === '2') {
      newString += 'e';
    } else if (string[index] === '3') {
      newString += 'i';
    } else if (string[index] === '4') {
      newString += 'o';
    } else if (string[index] === '5') {
      newString += 'u';
    } else {
      constant = string[index];
      newString += constant;
    }
  }
  return newString;
}

// console.log(decode('h3 th2r2!'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
