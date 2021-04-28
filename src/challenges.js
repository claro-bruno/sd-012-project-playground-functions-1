// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 == true && bool2 == true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let index_a = 0;
  let index_i = 0;
  let index_f = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] != ' ') {
      if (array[index_a] == undefined) {
        array[index_a] = string[i];
      }
      else {
        array[index_a] = array[index_a] + string[i];
      }
    }
    else {
      index_a++;
    }
  }
  return array;
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let count = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  for (let j = 0; j < array.length; j++) {
    if (array[j] == maior) {
      count++;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 - mouse > cat2 - mouse) {
    return cat1;
  }
  if (cat2 - mouse > cat1 - mouse) {
    return cat2;
  }
  return "os gatos trombam e o rato foge";
}

// Desafio 8
function fizzBuzz(n) {
  let array = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 3 == 0 && n[i] % 5 == 0) {
      array[i] = "fizzBuzz";
    }
    else if (n[i] % 3 == 0) {
      array[i] = "fizz";
    }
    else if (n[i] % 5 == 0) {
      array[i] = "buzz";
    }
    else {
      array[i] = "bug!";
    }
  }
  return array;
}

// Desafio 9
function encode() {
  // seu código aqui
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
