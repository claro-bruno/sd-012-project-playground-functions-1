// Desafio 1
function compareTrue(boo1, boo2) {
  if (boo1 === true && boo2 === true) {
    return true;
  } if (boo1 === false || boo2 === false) {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(' ');
  return result;
}

// Desafio 4
function concatName(arrayDeStrings) {
  return arrayDeStrings[arrayDeStrings.length - 1] + ', ' + arrayDeStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties * 1);
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let maiorNumero = 0;
  let contador = 0;
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    if (arrayDeNumeros[index] > maiorNumero) {
      maiorNumero = arrayDeNumeros[index];
    }
  }
  for (let i = 0; i < arrayDeNumeros.length; i += 1) {
    if (arrayDeNumeros[i] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let winnerCat;
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  if (cat1Distance > cat2Distance) {
    winnerCat = 'cat2';
  } else if (cat2Distance > cat1Distance) {
    winnerCat = 'cat1';
  } else {
    winnerCat = 'os gatos trombam e o rato foge';
  }
  return winnerCat;
}

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  let result = [];
  for (let key in arrayFizzBuzz) {
    if ((arrayFizzBuzz[key] % 3 === 0) && (arrayFizzBuzz[key] % 5 === 0)) {
      result.push('fizzBuzz');
    } else if ((arrayFizzBuzz[key] % 3 === 0)) {
      result.push('fizz');
    } else if ((arrayFizzBuzz[key] % 5 === 0)) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let splittedString = string.split("");
  let vogais = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u'
  };
  for (let key in splittedString) {
    if (splittedString[key] === vogais['1']) {
      splittedString[key] = '1';
    } else if (splittedString[key] === vogais['2']) {
      splittedString[key] = '2';
    } else if (splittedString[key] === vogais['3']) {
      splittedString[key] = '3';
    } else if (splittedString[key] === vogais['4']) {
      splittedString[key] = '4';
    } else if (splittedString[key] === vogais['5']) {
      splittedString[key] = '5';
    }
  };
  return splittedString.join("");
}

function decode(string) {
  let splittedString = string.split("");
  let vogais = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5'
  };
  for (let key in splittedString) {
    if (splittedString[key] === vogais['a']) {
      splittedString[key] = 'a';
    } else if (splittedString[key] === vogais['e']) {
      splittedString[key] = 'e';
    } else if (splittedString[key] === vogais['i']) {
      splittedString[key] = 'i';
    } else if (splittedString[key] === vogais['o']) {
      splittedString[key] = 'o';
    } else if (splittedString[key] === vogais['u']) {
      splittedString[key] = 'u';
    }
  };
  return splittedString.join("");
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
