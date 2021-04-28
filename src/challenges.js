// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  return a && b === true;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return frase.split(" ");
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return array[array.length - 1] + ", " + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let qtd = 0;
  let maior = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (maior < numbers[i]){
        maior = numbers[i];
    }
  }

  for (let i=0; i<numbers.length; i += 1) {
    if (numbers[i] === maior) {
      qtd += 1;
    }
  }
  return qtd;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (mouse - cat1 < mouse - cat2){
      return "cat2";
  }else if(mouse - cat1 > mouse - cat2) {
      return "cat1";
  }else{
      return "os gatos trombam e o rato foge"
  }
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
