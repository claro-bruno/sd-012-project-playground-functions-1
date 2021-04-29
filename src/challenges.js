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
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array [index] = 'fizzBuzz'
    
    } else if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
      array[index] = 'bug!'
      
    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz'
    
    } else if (array[index] % 5 === 0) {
      array[index] = 'buzz';  
    
    }
  }
  return array
}

// Desafio 9
function encode(string) {
  let split = string.split('');
  let inplit = split.join('')
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      string[index] = 1;
    } else if (string[index] === 'e') {
      string[index] = 2;
    } else if (string[index] === 'i') {
      string[index] = 3;
    } else if (string[index] === 'o') {
      string[index] = 4;
    } else if (string[index] === 'u') {
      string[index] = 5;
    }
  }
  return split;
}

function decode() {
  
}

console.log(encode('hi there'));

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
