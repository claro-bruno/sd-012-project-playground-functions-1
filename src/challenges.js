// Desafio 1
function compareTrue(firstBoolean, secondBoolean) {
  if ((firstBoolean && secondBoolean) === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(stringToSplit) {
  let array = stringToSplit.split(' ');
  return array;
}

// Desafio 4
function concatName(namesArray) {
  let max = namesArray[namesArray.length - 1];
  let min = namesArray[0];
  let string = `${max}, ${min}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(numbArrey) {
  let maior = 0;
  let count = 0;
  for (let index = 0; index < numbArrey.length; index += 1) {
    if (numbArrey[index] >= maior) {
      maior = numbArrey[index];
    }
  }
  console.log(maior);
  for (let index = 0; index < numbArrey.length; index += 1) {
    if (numbArrey[index] === maior) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  if (cat1Distance < cat2Distance) {
    return ("cat1");
  } else if (cat2Distance < cat1Distance) {
    return ("cat2");
  } else {
    return ("os gatos trombam e o rato foge");
  }
}
console.log(catAndMouse(3, -6, 6));

// Desafio 8
function fizzBuzz(numberArrey) {
  let fizzBuzzArray = []
  for (let key in numberArrey) {
    if (numberArrey[key] % 3 === 0 && numberArrey[key] % 5 !== 0) {
      fizzBuzzArray.push('fizz');
    } else if (numberArrey[key] % 5 === 0 && numberArrey[key] % 3 !== 0) {
      fizzBuzzArray.push('buzz');
    } else if (numberArrey[key] % 3 === 0 && numberArrey[key] % 5 === 0) {
      fizzBuzzArray.push('fizzBuzz');
    } else {
      fizzBuzzArray.push('bug!');
    };
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(stringToEncode) {
  let encodedArray = stringToEncode.split('');
  stringToEncode = '';
  console.log(stringToEncode);
  for (let index = 0; index < encodedArray.length; index += 1) {
    if (encodedArray[index] === 'a') {
      stringToEncode += '1';
    } else if (encodedArray[index] == 'e') {
      stringToEncode += '2';
    } else if (encodedArray[index] == 'i') {
      stringToEncode += '3';
    } else if (encodedArray[index] == 'o') {
      stringToEncode += '4';
    } else if (encodedArray[index] == 'u') {
      stringToEncode += '5';
    } else {
      stringToEncode += encodedArray[index];
    }
  }
  return stringToEncode
}

function decode(stringToDecode) {
  let encodedArray = stringToDecode.split('');
  stringToDecode = '';
  console.log(stringToDecode);
  for (let index = 0; index < encodedArray.length; index += 1) {
    if (encodedArray[index] === '1') {
      stringToDecode += 'a';
    } else if (encodedArray[index] == '2') {
      stringToDecode += 'e';
    } else if (encodedArray[index] == '3') {
      stringToDecode += 'i';
    } else if (encodedArray[index] == '4') {
      stringToDecode += 'o';
    } else if (encodedArray[index] == '5') {
      stringToDecode += 'u';
    } else {
      stringToDecode += encodedArray[index];
    }
  }
  return stringToDecode
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
