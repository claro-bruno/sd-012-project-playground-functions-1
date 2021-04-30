// X Desafio 1
let x = true;
let y = false;
let resposta = x && y;
function compareTrue(x, y) {
  if (x && y) {
    return true;
  } else {
    return false;
  }
}
console.log(resposta);

// Desafio 2
let base = 10;
let height = 50;
function calcArea(base, height) {  
  return (base * height) / 2;
}
console.log((base * height) / 2);

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('go Trybe'));

// Desafio 4
let strings = ['foguete', 'não', 'tem', 'ré'];
function concatName(strings) {
  return strings[strings.length -1] + ', ' + [strings[0]];
}
console.log(strings[strings.length -1] + ', ' + [strings[0]]);

// Desafio 5
let wins = 14;
let ties = 8;
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}
console.log((wins * 3) + (ties * 1));

// Desafio 6
let valores = [9, 1, 2, 9, 9, 5, 7];

function highestCount(valores) {
  let maiorNumero = Math.max(...valores)
  let contador = 0;
  for (index = 0; index <= valores.length; index ++) {
    if (valores[index] === maiorNumero) {
      contador ++
    }
  }
  return contador;
}
console.log(highestCount(valores));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1';
  } else if ((cat2 - mouse) < (cat1 - mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge'
  }
}
console.log(catAndMouse(1, 3, 2));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
