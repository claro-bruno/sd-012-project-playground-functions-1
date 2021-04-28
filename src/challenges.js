// Desafio 1
function compareTrue(num1, num2) {
  let result = false;
  if (num1 === true && num2 === true) {
    result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(name1) {
  let resultado = '';
  resultado += name1[name1.length - 1] + ', ' + name1[0];
  return resultado;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let result = 0;
  result = (wins * 3) + ties;
  return result;
}

// Desafio 6
function highestCount(number) {
  let result = 0;
  let maior = Math.max.apply(Math, number);
  for (let index = 0; index < number.length; index += 1) {
      if (maior === number[index]) {
        result += 1;
      }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = '';
  if ((mouse - cat1) > (mouse - cat2)) {
    result = 'cat2';
  }
  else if ((mouse - cat1) == (mouse - cat2)) {
    result = 'os gatos trombam e o rato foge';
  }
  else {
    result = 'cat1';
  }
  return result;
}

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
