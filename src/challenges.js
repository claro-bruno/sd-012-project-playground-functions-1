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
console.log(fizzBuzz([9, 25]))

// Desafio 9
function encode(encodeString) {
  let result = '';
  let encode = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  };
  for (let index = 0; index < encondeString.length; index += 1) {
    if (encondeString[index] === 'a' || encondeString[index] === 'e' || encondeString[index] === 'i' || encondeString[index] === 'o' || encondeString[index] === 'u') {
      result += encondeString[index];
    }
  };
  return result;
}
console.log(encode('hi there!'))
function decode(decodeString) {
  let result = '';
  let decode = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u'
  };
  for (let index = 0; index < decodeString.length; index += 1) {
    if (decodeString[index] === '1' || decodeString[index] === '2' || decodeString[index] === '3' || decodeString[index] === '4' || decodeString[index] === '5') {
      result += decodeString[index];
    }
  }
  return result;
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
