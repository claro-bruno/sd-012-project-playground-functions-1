// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let fraseSeparada = frase.split(' ');
  return fraseSeparada;
}

// Desafio 4
function concatName(paramArray) {
  let primeiroUltimo = `${paramArray[paramArray.length - 1]}, ${paramArray[0]}`;
  return primeiroUltimo;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numArray) {
  let hiNum = 0;
  let repetitions = 0;
  for (let index in numArray) {
    if (numArray[index] > hiNum) {
      hiNum = numArray[index];
    }
  }
  for (let number of numArray) {
    if (number === hiNum) {
      repetitions += 1;
    }
  }
  return repetitions;
}

// Desafio 7
function catAndMouse(posMouse, posCat1, posCat2) {
  let distance1 = Math.abs(posMouse - posCat1);
  let distance2 = Math.abs(posMouse - posCat2);
  if (distance1 < distance2) {
    return 'cat1';
  } else if (distance2 < distance1) {
    return 'cat2';
  }
  return 'os gatos trombaram e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNum) {
  let arrayResult = [];
  for (let index in arrayNum) {
    if (arrayNum[index] % 3 === 0 && arrayNum[index] % 5 !== 0) {
      arrayResult.push('fizz');
    } else if (arrayNum[index] % 5 === 0 && arrayNum[index] % 3 !== 0) {
      arrayResult.push('buzz');
    } else if (arrayNum[index] % 3 === 0 && arrayNum[index] % 5 === 0) {
      arrayResult.push('fizzBuzz');
    } else {
      arrayResult.push('bug!');
    }
  }
  return arrayResult;
}

// Desafio 9
function encode(word) {
  let vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  }

}
function decode() {
  // seu código aqui
}

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
