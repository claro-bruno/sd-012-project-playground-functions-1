// Desafio 1
function compareTrue(varBoolA, varBoolB) {
  if ((varBoolA === true) && (varBoolB === true)) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let area;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(receivedSentence) {
  let dividedSentence;
  dividedSentence = receivedSentence.split(' ');
  return dividedSentence;
}

// Desafio 4
function concatName(receivedArray) {
  let { length } = receivedArray;
  return `${receivedArray[length - 1]}, ${receivedArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(receivedNumbers) {
  let highNumber;
  let count = 0;
  highNumber = receivedNumbers.reduce(function (a, b) {
    return Math.max(a, b);
  });
  for (let index in receivedNumbers) {
    if (receivedNumbers[index] === highNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(positionMouse, positionCat1, positionCat2) {
  let distanceMouseCat1;
  let distanceMouseCat2;
  distanceMouseCat1 = Math.abs(positionCat1 - positionMouse);
  distanceMouseCat2 = Math.abs(positionCat2 - positionMouse);
  if (distanceMouseCat1 < distanceMouseCat2) {
    return 'cat1';
  } if (distanceMouseCat1 > distanceMouseCat2) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzzAux(resultReceived, receivedIndex) {
  for (let index in receivedIndex) {
    if (resultReceived[receivedIndex[index]] % 3 === 0) {
      resultReceived[receivedIndex[index]] = 'fizz';
    } else if (resultReceived[receivedIndex[index]] % 5 === 0) {
      resultReceived[receivedIndex[index]] = 'buzz';
    } else resultReceived[receivedIndex[index]] = 'bug!';
  }
  return resultReceived;
}

function fizzBuzz(receivedNumbers) {
  let result = [];
  let indexAux = [];
  for (let index in receivedNumbers) {
    if ((receivedNumbers[index] % 3 === 0) && (receivedNumbers[index] % 5 === 0)) {
      result.push('fizzBuzz');
    } else {
      result.push(receivedNumbers[index]);
      indexAux.push(index);
    }
  }
  fizzBuzzAux(result, indexAux);
  return result;
}

// Desafio 9
function encode(receivedSentence) {
  let encodeSentence;
  encodeSentence = receivedSentence.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
  return encodeSentence;
}

function decode(receivedSentence) {
  let decodeSentence;
  decodeSentence = receivedSentence.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return decodeSentence;
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
