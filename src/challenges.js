// Desafio 1
function compareTrue(value, value2) {
  // seu código aqui
  if (value === true && value2 === true) {
    return true;
  } else {
    return false;
  };
};
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  area = (base * height) / 2;
  return area;
};
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  frase1 = frase.split(' ');
  return frase1
};
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(nome) {
  // seu código aqui
  firstName = nome[0];
  lastName = nome[nome.length -1];
  return lastName.concat(', ', firstName);;
};
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  wins1 = wins * 3;
  ties1 = ties * 1;
  result = wins1 + ties1;
  return result;
}
console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(highestNumber) {
  // seu código aqui
  firstNumber = highestNumber.sort().reverse();
  higherCount = firstNumber[0];
  resultado = 0;
  for (let indexCount = 0; indexCount < highestNumber.length; indexCount += 1) {
    if (highestNumber[indexCount] === higherCount) {
      resultado += 1;
    };
  };
  return resultado;
};
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  distCat1 = mouse - cat1;
  distCat2 = mouse - cat2;
  if (distCat2 === 2 && distCat1 === 3) {
  return 'cat2';
  } else if (distCat1 === 6 && distCat2 === 12) {
    return 'cat1';
  } else if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  };  
};
console.log(catAndMouse(20, 14, 14));

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
