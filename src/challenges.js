// Desafio 1
function compareTrue(value1, value2) {
  let result1;

  if (value1 === true && value2 === true) {
    result1 = true;
  } else {
    result1 = false;
  }
  return result1;
}

// Desafio 2
function calcArea(base, height) {
  let result2 = (base * height) / 2;
  return result2;
}

// Desafio 3 (Fonte: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_split)
function splitSentence(sentence) {
  let result3 = sentence.split(' ');
  return (result3);
}

// Desafio 4
function concatName(lastFirst) {
  let firstArray = lastFirst[0];
  let lastArray = lastFirst[(lastFirst.length) - 1];
  let result4 = `${lastArray}, ${firstArray}`;
  return (result4);
}

// Desafio 5
function footballPoints(wins, ties) {
  let result5 = (wins * 3) + (ties * 1);
  return (result5);
}

// Desafio 6
function highestCount(highestNumber) {
  let orderNumber = highestNumber.sort();
  let result6 = [];

  for (let index = 0; index < orderNumber.length; index += 1) {
    if (orderNumber[index] === orderNumber[(orderNumber.length - 1)]) {
      result6.push(orderNumber[index]);
    }
  }
  return (result6.length);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // https://www.w3schools.com/jsref/jsref_abs.asp + Trybe
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);

  if (cat1Distance > cat2Distance) {
    return 'cat2';
  } if (cat2Distance > cat1Distance) {
    return 'cat1';
  } if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numberBuzz) {
  // Consultei o codigo do colega pra ver como poderia reduzir a complexidade, exigida pelo lint
  // https://github.com/tryber/sd-012-project-playground-functions/blob/jose-reginaldo-playground-functions/src/challenges.js
  // Entendi a Logica utilizada para reduzir a complexidade
  let answer = [];
  for (let index = 0; index < numberBuzz.length; index += 1) {
    answer[index] = 'bug!';
    if (numberBuzz[index] % 15 === 0) {
      answer[index] = 'fizzBuzz';
    } else if (numberBuzz[index] % 5 === 0) {
      answer[index] = 'buzz';
    } else if (numberBuzz[index] % 3 === 0) { answer[index] = 'fizz'; }
  }
  return answer;
}

// Desafio 9
function encode(codeVowels) {
  codeVowels = codeVowels.split('');
  for (let index = 0; index < codeVowels.length; index += 1) {
    switch (codeVowels[index]) {
    case 'a': codeVowels[index] = '1';
      break;
    case 'e': codeVowels[index] = '2';
      break;
    case 'i': codeVowels[index] = '3';
      break;
    case 'o': codeVowels[index] = '4';
      break;
    case 'u': codeVowels[index] = '5';
      break;
    default:
    }
  }
  // Fonte https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  return (codeVowels.join(''));
}
function decode(codeNumber) {
  // seu código aqui
  codeNumber = codeNumber.split('');
  for (let index = 0; index < codeNumber.length; index += 1) {
    switch (codeNumber[index]) {
    case '1': codeNumber[index] = 'a';
      break;
    case '2': codeNumber[index] = 'e';
      break;
    case '3': codeNumber[index] = 'i';
      break;
    case '4': codeNumber[index] = 'o';
      break;
    case '5': codeNumber[index] = 'u';
      break;
    default:
    }
  }
  return codeNumber.join('');
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
