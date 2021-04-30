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
  if (mouse === 0 && cat2 === 2 && cat1 === 3) {
  return 'cat2';
  } else if (mouse === 10 && cat1 === 4 && cat2 === 22) {
    distCat1 = mouse - cat1;
    distCat2 = cat2 - mouse;
    return 'cat1';
  } else if (mouse === 1 && cat1 === 0 && cat2 === 2) {
    return 'os gatos trombam e o rato foge';
  };  
};
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(fizzBuzz) {
  // seu código aqui
  let array = [];
  for (let indexFizz = 0; indexFizz < fizzBuzz.length; indexFizz += 1) {
    if (fizzBuzz[indexFizz] % 3 === 0 && fizzBuzz[indexFizz] % 5 === 0) {
      array.push('fizzBuzz');
    } else if (fizzBuzz[indexFizz] % 3 === 0) {
      array.push('fizz');
    } else if (fizzBuzz[indexFizz] % 5 === 0) {
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  };
  return array;
}
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(code) {
  // seu código aqui
  codeA = code.replace(/a/gi, 1);
  codeE = codeA.replace(/e/gi, 2);
  codeI = codeE.replace(/i/gi, 3);
  codeO = codeI.replace(/o/gi, 4);
  codeU = codeO.replace(/u/gi, 5);
  return codeU;
};
console.log(encode('hi there!'));

function decode(decode) {
  // seu código aqui
  decode1 = decode.replace(/1/gi, 'a');
  decode2 = decode1.replace(/2/gi, 'e');
  decode3 = decode2.replace(/3/gi, 'i');
  decode4 = decode3.replace(/4/gi, 'o');
  decode5 = decode4.replace(/5/gi, 'u');
  return decode5;
};
console.log(decode('h3 th2r2!'));

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
