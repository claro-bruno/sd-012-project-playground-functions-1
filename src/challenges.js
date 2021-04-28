// Desafio 1
function compareTrue(varBol1, varBol2) {
  // seu código aqui
  let compare = false;
  if (varBol1 === true && varBol2 === true) {
    compare = true;
  }
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(arrayConcatName) {
  // seu código aqui
  let stringReturn = `${arrayConcatName[arrayConcatName.length - 1]}, ${arrayConcatName[0]}`;
  return stringReturn;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(arrayNum) {
  // seu código aqui
  let count = 0;
  let maiorNumero = Math.max.apply(null, arrayNum); // retirado https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array
  for (let varredura = 0; varredura < arrayNum.length; varredura += 1) {
    if (arrayNum[varredura] === maiorNumero) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let positionCat1Mouse = Math.abs(cat1 - mouse);
  let positionCat2Mouse = Math.abs(cat2 - mouse);
  let cases = 'Os gatos trombam e o rato foge';
  if (positionCat1Mouse < positionCat2Mouse) {
    cases = 'cat1';
  } else if (positionCat2Mouse < positionCat1Mouse) {
    cases = 'cat2';
  }
  return cases;
}

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  // seu código aqui
  let arrayReturn = [];
  for (let indArrayFizzBuzz = 0; indArrayFizzBuzz < arrayFizzBuzz.length; indArrayFizzBuzz += 1) {
    if (arrayFizzBuzz[indArrayFizzBuzz] % 3 === 0 && arrayFizzBuzz[indArrayFizzBuzz] % 5 === 0) {
      arrayReturn[indArrayFizzBuzz] = 'fizzBuzz';
    }
    if (arrayFizzBuzz[indArrayFizzBuzz] % 3 === 0 && arrayFizzBuzz[indArrayFizzBuzz] % 5 !== 0) {
      arrayReturn[indArrayFizzBuzz] = 'fizz';
    }
    if (arrayFizzBuzz[indArrayFizzBuzz] % 5 === 0 && arrayFizzBuzz[indArrayFizzBuzz] % 3 !== 0) {
      arrayReturn[indArrayFizzBuzz] = 'buzz';
    } 
    else {
      arrayReturn[indArrayFizzBuzz] = 'bug!';
    }
  }
  return arrayReturn;
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
