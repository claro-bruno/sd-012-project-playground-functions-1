// Desafio 1
function compareTrue(a, b) {
  if (a == true && b == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let c = 0;
  c = (base * height) / 2;
  return c;
}

// Desafio 3
function splitSentence(string) {
  for (let i = 0; i < string.length; i += 1) {
    let string2 = '';
    string2 = string.split(' ', string.length);
    return string2;
  }
}

// Desafio 4
function concatName(array) {
  let resultado = '';
  resultado = array[array.length - 1] + ', ' + array[0];
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let seletor = 0;
  let contador = 0;
  for (i in array) {
    if (array[i] >= seletor) {
      seletor = array[i];
    }
  }
  for (c in array) {
    if (array[c] == seletor) {
      contador += 1;
    }
  }

  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado = '';
  let d1 = Math.abs(cat1 - mouse);
  let d2 = Math.abs(cat2 - mouse);
  if (d1 == d2) {
    resultado = 'os gatos trombam e o rato foge';
    return resultado;
  } else if (d1 < d2) {
    resultado = 'cat1';
    return resultado;
  } else {
    resultado = 'cat2';
    return resultado;
  }
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (i in array) {
    if (array[i] % 3 != 0 && array[i] % 5 != 0) {
      resultado.push('bug!');
    } else if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      resultado.push('fizzBuzz');
    } else if (array[i] % 3 == 0) {
      resultado.push('fizz');
    } else if (array[i] % 5 == 0) {
      resultado.push('buzz');
    }
  }
  return resultado;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))
// Desafio 9
function encode(string) {
  let cod = ['a', 1, 'e', 2, 'i', 3, 'o', 4, 'u', 5];
  string = string.split('');
  for (i in string) {
    for (let k = 0; k < cod.length * 2; k += 2) {
      if (string[i] == cod[k]) {
        string[i] = cod[k + 1];
      }
    }
  }
  return string.join('');
}
function decode(string) {
  let cod = [1, 'a', 2, 'e', 3, 'i', 4, 'o', 5, 'u'];
  string = string.split('');
  for (i in string) {
    for (let k = 0; k < cod.length * 2; k += 2) {
      if (string[i] == cod[k]) {
        string[i] = cod[k + 1];
      }
    }
  }
  return string.join('');
}
console.log(decode('h3 th2r2!'));

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
