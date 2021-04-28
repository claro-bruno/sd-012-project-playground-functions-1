// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base*height) / 2);
}

// Desafio 3
function splitSentence(nameToSplit) {
  return nameToSplit.split(' ');
}

// Desafio 4
function concatName(arrayStringsToConcat) {
  return (`${arrayStringsToConcat[arrayStringsToConcat.length - 1]}, ${arrayStringsToConcat[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties * 1);
}

// Desafio 6
function highestCount(arrayToCount) {
  let highestNumber = 0;
  let highestNumberCount = 0;

  for (let index = 0; index < arrayToCount.length; index += 1) {
    if (arrayToCount[index] > highestNumber) {
      highestNumber = arrayToCount[index];
      highestNumberCount = 0;
      highestNumberCount += 1;
    }
    else if (arrayToCount[index] == highestNumber) {
      highestNumberCount += 1;
    }
  }
  return highestNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let cat1ToMouse = mouse - cat1;
  let cat2ToMouse = mouse - cat2;

  if (cat1ToMouse > cat2ToMouse) {
    return ('cat2');
  }
  
  else if (cat1ToMouse < cat2ToMouse) {
    return ('cat1');
  }

  else if (cat1ToMouse === cat2ToMouse) {
    return ('os gatos trombam e o rato foge')
  }
}

// Desafio 8
function fizzBuzz(arrayToFizzBuzz) {
  for (let index = 0; index < arrayToFizzBuzz.length; index += 1) {
    if (arrayToFizzBuzz[index] % 3 == 0 && arrayToFizzBuzz[index] % 5 == 0) {
      arrayToFizzBuzz[index] = 'fizzBuzz';
    }

    else if (arrayToFizzBuzz[index] % 3 == 0) {
      arrayToFizzBuzz[index] = 'fizz';
    }

    else if (arrayToFizzBuzz[index] % 5 == 0) {
      arrayToFizzBuzz[index] = 'buzz';
    }

    else {
      arrayToFizzBuzz[index] = 'bug!';
    }
  }
  return arrayToFizzBuzz;
}

// Desafio 9
function encode(stringToEncode) {
  stringToEncode = stringToEncode.toString().split('');

  for (let index = 0; index < stringToEncode.length; index += 1) {
    switch(stringToEncode[index]) {
      case 'a':
        stringToEncode[index] = 1;
        break;

      case 'e':
        stringToEncode[index] = 2;
        break;

      case 'i':
        stringToEncode[index] = 3;
        break;

      case 'o':
        stringToEncode[index] = 4;
        break;

      case 'u':
        stringToEncode[index] = 5;
        break;
    }
  }
  return stringToEncode.join('');
}

function decode(stringToDecode) {
  stringToDecode = stringToDecode.toString().split('');

  for (let index = 0; index < stringToDecode.length; index += 1) {
    switch(stringToDecode[index]) {
      case '1':
        stringToDecode[index] = 'a';
        break;

      case '2':
        stringToDecode[index] = 'e';
        break;

      case '3':
        stringToDecode[index] = 'i';
        break;

      case '4':
        stringToDecode[index] = 'o';
        break;

      case '5':
        stringToDecode[index] = 'u';
        break;
    }
  }
  return stringToDecode.join('');
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