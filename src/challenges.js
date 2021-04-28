// Desafio 1
function compareTrue(boolean1, boolean2) {
  let result = boolean1 && boolean2;
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  let result = [];
  let word = "";
  for (let index = 0; index <= string.length; index += 1) {
    if (string[index] === " " || index === string.length) {
      result.push(word);
      word = "";
    } else {
      word += string[index];
    }
  }
  return result;
}

// Desafio 4
function concatName(arrayStrings) {
  let firstItem;
  let lastItem;
  let result = "";
  for (let index = 0; index < arrayStrings.length; index += 1) {
    if (index === 0) {
      firstItem = arrayStrings[index];
    }
    if (index === arrayStrings.length - 1) {
      lastItem = arrayStrings[index];
    }
  }
  result = `${lastItem}, ${firstItem}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  result = winsPoints + tiesPoints;
  return result;
}

// Desafio 6
function highestCount(highestCount) {
  let maior = 0;
  let result =0;

  for (let index in highestCount) {
    if (highestCount[index] > maior) {
      maior = highestCount[index];
    }
  }

  for (let index in highestCount) {
    if (maior === highestCount[index]) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = "";
  let distCat1 = Math.abs(mouse-cat1);
  let distCat2 = Math.abs(mouse-cat2);

  if (distCat1 < distCat2) {
    result = "cat1";
  } else if (distCat2 < distCat1) {
    result = "cat2";
  } else {
    result = "os gatos trombam e o rato foge";
  }

  return result;
}

// Desafio 8
function fizzBuzz(numbersArray) {
  let result = [];

  for (let index in numbersArray) {
    if (numbersArray[index] % 3 === 0 && numbersArray[index] % 5 === 0) {
      result.push("fizzBuzz");
    } else if (numbersArray[index] % 3 === 0) {
      result.push("fizz");
    } else if (numbersArray[index] % 5 === 0) {
      result.push("buzz");
    } else {
      result.push("bug");
    }
  }

  return result;
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
