// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === valor1) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');  
}

// Desafio 4
function concatName(nome) { 
  return `${nome[nome.length - 1]}, ${nome[0]}`;
}

// Desafio 5
function footballPoints(win, ties) {
  return (win * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let num = 0;
  let cont = 0;
    
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > num) {
      num = numbers[index];
      cont = 0;
    }
    if (numbers[index] === numbers) {
      cont += 1;
    }
  }  
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dCat1 = Math.abs(mouse - cat1);
  let dCat2 = Math.abs(mouse - cat2);

  if (dCat1 < dCat2) {
    return 'cat1';
  } else if (dCat2 < dCat1) {
    return 'cat2';
  } else {
    return 'Os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let array = [];
  
  for (let index of numbers) {
    if (index % 3 === 0 && index % 5 === 0) {
      array.push('fizzBUzz');
    } else if (index % 3 === 0) {
      array.push('fizz');
    } else if (index % 5 === 0) {
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode(strEncode) {
  for (let index = 0; index < strEncode.length; index += 1) {
    strEncode = strEncode.replace('a', '1');
    strEncode = strEncode.replace('e', '2');
    strEncode = strEncode.replace('i', '3');
    strEncode = strEncode.replace('o', '4');
    strEncode = strEncode.replace('u', '5');
  }
  return strEncode
}
function decode(strDecode) {
  for (let index = 0; index < strDecode.length; index += 1) {
    strDecode = strDecode.replace('1', 'a');
    strDecode = strDecode.replace('2', 'e');
    strDecode = strDecode.replace('3', 'i');
    strDecode = strDecode.replace('4', 'o');
    strDecode = strDecode.replace('5', 'u');
  }
  return strDecode;
};
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