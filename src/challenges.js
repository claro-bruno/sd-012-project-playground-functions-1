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
  let repeat = 0;
  highestNumber = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] >= highestNumber) {
      highestNumber = array[index];
    }
  }
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] >= highestNumber)
      repeat += 1;
    }
    return repeat;
}

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
function fizzBuzz(array) {
  let div3 = 0;
  let div5 = 0;
  let div35 = 0;
  let divn35 = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0) {
    div3 = 'fizz';
    return div3;
    } else if (array[index] % 5 === 0) {
      div5 = 'buzz';
      return div5;
      } else if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      div35 = 'fizzBuzz'
      return div35;
      } else if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
      divn35 = 'bug!'
      return divn35;
      }
  }
  return 
}

console.log(fizzBuzz([2, 15, 7, 9, 45]))
console.log(fizzBuzz([7, 9]))
console.log(fizzBuzz([9, 25]))

// Desafio 9
function encode(string) {
  let split = string.split('');
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'i') {
      
    }
  }
  return split;
}
function decode() {
  
}

console.log(encode('hi there'))

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
