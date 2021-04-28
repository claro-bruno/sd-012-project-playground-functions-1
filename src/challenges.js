// Desafio 1
function compareTrue(valor1, valor2) {
if (valor1 === true && valor2 === true) {
  return true;
} else {
  return false;
}
};

// Desafio 2
function calcArea(base, height) {
  const areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let splitString = string.split(' ');
  return splitString;
}

// Desafio 4
function concatName(strName) {
  let concatenadoString = strName[strName.length - 1] + ', ' + strName[0];
  return concatenadoString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosWins = wins * 3;
  let pontosTies = ties;
  let pontosTotais = pontosWins + pontosTies;
  return pontosTotais;
}

// Desafio 6

function highestCount(mainArray) {
  let maiorNumero = mainArray.reduce(function(a, b) {
    return Math.max(a, b);
  });
  let count = 0;
  for (let key in mainArray) {
    if (maiorNumero === mainArray[key]) {
      count += 1;
    }
  }
  return count;
  }

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = Math.abs(mouse - cat1);
  let distanciaGato2 = Math.abs(mouse - cat2);
  if (distanciaGato1 < distanciaGato2) {
    return 'cat1';
  } else if(distanciaGato1 === distanciaGato2) {
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(arr) {
  for (let key in arr) {
    if (arr[key] % 3 === 0 && arr[key] % 5 === 0) {
      arr[key] = 'fizzBuzz';
    } else if (arr[key] % 3 === 0) {
      arr[key] = 'fizz';
    } else if (arr[key] % 5 === 0) {
      arr[key] = 'buzz';
    } else {
      arr[key] = 'bug!';
    }
  }
  return arr;
}

// Desafio 9

let strTeste = 'hi there!';
let strTeste2 = 'h3 th2r2!';

function encode(str) {
  let separatedStr = str.split('');
  for (let key in separatedStr) {
    if (separatedStr[key] === 'a') {
      separatedStr[key] = 1;
    } else if (separatedStr[key] === 'e') {
      separatedStr[key] = 2;
    } else if (separatedStr[key] === 'i') {
      separatedStr[key] = 3;
    } else if (separatedStr[key] === 'o') {
      separatedStr[key] = 4;
    } else if (separatedStr[key] === 'u') {
      separatedStr[key] = 5;
    }
  }
  let jointStr = separatedStr.join('');
  return jointStr;
}
function decode(str) {
  let separatedStr2 = str.split('');
  for (let key in separatedStr2) {
    if (separatedStr2[key] === '1') {
      separatedStr2[key] = 'a';
    } else if (separatedStr2[key] === '2') {
      separatedStr2[key] = 'e';
    } else if (separatedStr2[key] === '3') {
      separatedStr2[key] = 'i';
    } else if (separatedStr2[key] === '4') {
      separatedStr2[key] = 'o';
    } else if (separatedStr2[key] === '5') {
      separatedStr2[key] = 'u';
    }
  }
  let jointStr2 = separatedStr2.join('');
  return jointStr2;
  ;
}

console.log (encode(strTeste));
console.log (decode(strTeste2));


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
