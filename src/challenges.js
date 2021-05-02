// Desafio 1
function compareTrue(nun1, nun2) {
  if (nun1 === true && nun2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let msg = string.split(' ');
  return msg;
}

// Desafio 4
function concatName(arrayStrings) {
  let firstName = arrayStrings[0];
  let lastName = arrayStrings[arrayStrings.length - 1];
  return lastName + ', ' + firstName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vicPoints = 3;
  let tiesPoint = 1;
  let quantidade = ((wins * vicPoints) + (ties * tiesPoint));
  return quantidade;
}

// Desafio 6
function highestCount(numbers) {
  let higherNumber = numbers[0];
  let repeat = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
      higherNumber = numbers[index];
    }
  }
  for (let key in numbers) {
    if (numbers[key] === higherNumber) {
      repeat += 1;    
  }
 } return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 > distCat2) {
    return 'cat2';
  } else if (distCat2 > distCat1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrayResposta = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      arrayResposta[i] = 'fizzBuzz';
    } else if (array[i] % 5 === 0) {
      arrayResposta[i] = 'buzz';
    } else if (array[i] % 3 === 0) {
      arrayResposta[i] = 'fizz';
    } else {
      arrayResposta[i] = 'bug!';
    }
  } return arrayResposta;
}

// Desafio 9 - POR FAZER
function encode(stringStart) {
  let resposta = stringStart.replace(/a/g, "1");
   resposta = resposta.replace(/e/g, "2");
   resposta = resposta.replace(/i/g, "3");
   resposta = resposta.replace(/o/g, "4");
   resposta = resposta.replace(/u/g, "5");

  return resposta;
}

function decode(stringFinal) {
  let resposta = stringFinal.replace(/1/g, "a");
  resposta = resposta.replace(/2/g, "e");
  resposta = resposta.replace(/3/g, "i");
  resposta = resposta.replace(/4/g, "o");
  resposta = resposta.replace(/5/g, "u");

 return resposta;
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
