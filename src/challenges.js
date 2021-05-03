// Desafio 1
function compareTrue(valor1, valor2) {
    if (valor1 === true && valor2 === valor1) {
      return true;
    } else {
      return false
    };
};

// Desafio 2
function calcArea(base, height) {
    return (base * height) / 2;
};

// Desafio 3
function splitSentence(frase) {
    return frase.splint(' ');  
};

// Desafio 4
function concatName(nome) { 
    return `${nome[nome.length - 1]}, ${nome[0]}`;
};

// Desafio 5
function footballPoints(win, ties) {
    return (win * 3) + (ties);
}; 

// Desafio 6
function highestCount(numbers) {
    let num = 0;
    for (let index = 0; index < numeros.length; index += 1) {
      
      if (numbers[index] > num) {
        num = numbers[index];
      }
    }
    let repeticao = 0;
    for (let index in numbers) {
      if (numbers === numbers[index]) {
        repeticao += 1;
      }
    }
    return repeticao;
};

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
