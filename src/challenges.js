// Desafio 1
function compareTrue(num1, num2) {
  if (num1 === true && num2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
    return (base * height) / 2
}


// Desafio 3
function splitSentence(string) {
  return string.split(' ')
}

// Desafio 4
function concatName(array) {
  let primeiroNome = array[0];
  let ultimoNome = array[array.length -1];
  let nome = ultimoNome + ', ' + primeiroNome;

  return nome;
}

// Desafio 5
function footballPoints(wins, ties) {
   return  (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let highestNumber = array[0];
  let repeat = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] >= highestNumber) {
      highestNumber = array[index];
      repeat += 1;
    }
  }  
  return repeat
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))
console.log(highestCount([0, 0, 0]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2'
} else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
  return 'cat1'
} else {
    return 'os gatos trombam e o rato foge'
}
}

// Desafio 8
function fizzBuzz() {
  
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
