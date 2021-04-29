// Desafio 1
function compareTrue(boolean1, boolean2) {
  let result = false;
  if (boolean1 === true && boolean2 === true) {
    result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(strings) {
  let lastStringIndex = strings.length - 1;
  let concatArray = [strings[lastStringIndex], strings[0]];
  return concatArray.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  let num = {};
  for (let value of numbers) {
    if (num[value] === undefined) {
      num[value] = 1;
    } else {
      num[value] += 1;
    }
  }
  let arrayNumKeys = Object.keys(num);
  let highestNumber = arrayNumKeys[0];
  for (let index = 1; index < arrayNumKeys.length; index += 1) {
    if (arrayNumKeys[index] > highestNumber) {
      highestNumber = arrayNumKeys[index];
    }
  }
  return num[highestNumber];
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result;
  let distanceMouseCat1 = Math.abs(cat1 - mouse) - 1;
  let distanceMouseCat2 = Math.abs(cat2 - mouse) - 1;
  if (distanceMouseCat1 < distanceMouseCat2) {
    result = 'cat1';
  } else if (distanceMouseCat2 < distanceMouseCat1) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let index of numbers) {
    if ((index % 3) === 0 && (index % 5) !== 0) {
      result.push('fizz');
    } else if ((index % 3) !== 0 && (index % 5) === 0) {
      result.push('buzz');
    } else if ((index % 3) === 0 && (index % 5) === 0) {
      result.push('fizzBuzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(sentence) {
  let arraySentence = sentence.split('');
  for (let index = 0; index < arraySentence.length; index += 1) {
    switch (arraySentence[index]) {
    case 'a':
      arraySentence[index] = 1;
      break;
    case 'e':
      arraySentence[index] = 2;
      break;
    case 'i':
      arraySentence[index] = 3;
      break;
    case 'o':
      arraySentence[index] = 4;
      break;
    case 'u':
      arraySentence[index] = 5;
      break;
    default:
      break;
    }
  }
  let encodeSentence = arraySentence.join('');
  return encodeSentence;
}
function decode(sentence) {
  let arraySentence = sentence.split('');
  for (let index = 0; index < arraySentence.length; index += 1) {
    switch (arraySentence[index]) {
    case '1':
      arraySentence[index] = 'a';
      break;
    case '2':
      arraySentence[index] = 'e';
      break;
    case '3':
      arraySentence[index] = 'i';
      break;
    case '4':
      arraySentence[index] = 'o';
      break;
    case '5':
      arraySentence[index] = 'u';
      break;
    default:
      break;
    }
  }
  let decodeSentence = arraySentence.join('');
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
