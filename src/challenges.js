// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  };
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(arrayNames) {
  // seu código aqui
  let nome = arrayNames[arrayNames.length - 1] + ', ' + arrayNames[0];
  return nome;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let highestNumber = 0;
  let quantity = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    for (let index2 = 0; index2 < arrayNumbers.length; index2 += 1) {
      if (arrayNumbers[index] > arrayNumbers[index2] && arrayNumbers[index] > highestNumber) {
        highestNumber = arrayNumbers[index];
      };
    };
  };
  for (let index3 = 0; index3 < arrayNumbers.length; index3 += 1) {
    if (arrayNumbers[index3] === highestNumber) {
      quantity += 1;
    };
  };
  return quantity;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let diffCat1Mouse = cat1 - mouse;
  let diffCat2Mouse = cat2 - mouse;

  if (diffCat1Mouse < 0) {
    diffCat1Mouse = diffCat1Mouse * -1;
  }

  if (diffCat2Mouse < 0) {
    diffCat2Mouse = diffCat2Mouse * -1;
  }

  if ((diffCat1Mouse) < (diffCat2Mouse)) {
    return 'cat1';
  } else if ((diffCat1Mouse) > (diffCat2Mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  };
}

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  // seu código aqui

  let arrayAnswer = [];

  for (let contador = 0; contador < arrayFizzBuzz.length; contador += 1) {
    if (arrayFizzBuzz[contador] % 3 === 0 && arrayFizzBuzz[contador] % 5 !== 0) {
      arrayAnswer.push('fizz');
    } else if (arrayFizzBuzz[contador] % 5 === 0 && arrayFizzBuzz[contador] % 3 !== 0) {
      arrayAnswer.push('buzz');
    } else if (arrayFizzBuzz[contador] % 5 === 0 && arrayFizzBuzz[contador] % 3 === 0) {
      arrayAnswer.push('fizzBuzz');
    } else {
      arrayAnswer.push('bug!');
    };
  };
  return arrayAnswer;
}

// Desafio 9
function encode(stringEncode) {
  // seu código aqui

  let phraseEncode = '';

  for (let index4 = 0; index4 < stringEncode.length; index4 += 1) {
    switch (stringEncode[index4]) {
      case 'a': 
        phraseEncode = phraseEncode + '1';
        break;
      case 'e': 
        phraseEncode = phraseEncode + '2';
        break;
      case 'i': 
        phraseEncode = phraseEncode + '3';
        break;
      case 'o': 
        phraseEncode = phraseEncode + '4';
        break;
      case 'u': 
        phraseEncode = phraseEncode + '5';
        break;
      default:
        phraseEncode = phraseEncode + stringEncode[index4];
        break;
    };
  };
  return phraseEncode;
}

function decode(stringDecode) {
  // seu código aqui
  let phraseDecode = '';

  for (let index4 = 0; index4 < stringDecode.length; index4 += 1) {
    switch (stringDecode[index4]) {
      case '1': 
        phraseDecode = phraseDecode + 'a';
        break;
      case '2': 
        phraseDecode = phraseDecode + 'e';
        break;
      case '3': 
        phraseDecode = phraseDecode + 'i';
        break;
      case '4': 
        phraseDecode = phraseDecode + 'o';
        break;
      case '5': 
        phraseDecode = phraseDecode + 'u';
        break;
      default:
        phraseDecode = phraseDecode + stringDecode[index4];
        break;
    };
  };
  return phraseDecode;
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
