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
    return (cat2);
  } else if (cat2Distance > cat1Distance) {
    return (cat1);
  } else if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbersBuzz) {
  let answer = [];
  for (let index = 0; index < numbersBuzz.length; index += 1) {
    if (numbersBuzz[index] % 3 === 0 && numbersBuzz[index] % 5 === 0) {
      answer.push('fizzBuzz');
    } else if (numbersBuzz[index] % 3 === 0) {
      answer.push('fizz');
    } else if (numbersBuzz[index] % 5 === 0) {
      answer.push('buzz');
    } else {
      answer.push('bug!');
    }
  }
return (answer);
};

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
