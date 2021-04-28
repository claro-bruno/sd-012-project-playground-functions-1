// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
    return false;
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
  if (cat1 > cat2) {
    return "cat1";
  }
  if (cat2 > cat1) {
    return "cat2";
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
function encode(string) {
  let e = string;
  for (let i = 0; i < e.length; i++) {
    if (e[i] == 'a') {
      e = e.replace('a', '1');
    }
    else if (e[i] == 'e') {
      e = e.replace('e', '2');
    }
    else if (e[i] == 'i') {
      e = e.replace('i', '3');
    }
    else if (e[i] == 'o') {
      e = e.replace('o', '4');
    }
    else if (e[i] == 'u') {
      e = e.replace('u', '5');
    }
  }
  return e;
}

function decode(string) {
  let d = string;
  for (let i = 0; i < string.length; i++) {
    if (d[i] == '1') {
      d = d.replace('1', 'a');
    }
    else if (d[i] == '2') {
      d = d.replace('2', 'e');
    }
    else if (d[i] == '3') {
      d = d.replace('3', 'i');
    }
    else if (d[i] == '4') {
      d = d.replace('4', 'o');
    }
    else if (d[i] == '5') {
      d = d.replace('5', 'u');
    }
  }
  return d;
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
