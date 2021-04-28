// Desafio 1

function compareTrue(param1, param2) {
  let result;

  if(param1 === true && param2 === true) {
    result = true;
  } else {
    result = false;
  };

  return result;
}

// Desafio 2

function calcArea(base, height) {
  let areaDoTriangulo;

  areaDoTriangulo = (base * height)/2;

  return areaDoTriangulo;
};

// Desafio 3

function splitSentence(str) {
  let arrayDeStrings = [];
  let palavraSozinha = "";

  for (let index = 0; index < str.length; index += 1) {

    if (str[index] !== " " && index < str.length-1) {

      palavraSozinha += str[index];

    } else if (str[index] !== " " && index == str.length-1 ) {

      palavraSozinha += str[index];
      arrayDeStrings.push(palavraSozinha);

    } else {

      arrayDeStrings.push(palavraSozinha);
      palavraSozinha = "";

    };
  }

  return arrayDeStrings;
};

// Desafio 4

function concatName(array) {
  let strResult = "";

  strResult = array[array.length - 1] + ", " + array[0];

  return strResult;
};

// Desafio 5
function footballPoints(wins, ties) {
  
  let points;

  points = (wins*3) + ties;

  return points;
};

// Desafio 6

function highestCount(arrayNumbers) {

  let maiorNumero = 0;
  let qtdeDeRepeticoes = 0;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (maiorNumero < arrayNumbers[index]) {
      maiorNumero = arrayNumbers[index];
    };
  };

    for (let index = 0; index < arrayNumbers.length; index += 1) {
      if (arrayNumbers[index] === maiorNumero) {
        qtdeDeRepeticoes += 1;
      };
    };

    return qtdeDeRepeticoes;
};

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let distacia1;
  let distacia2;
  let result;

  if (cat1 > mouse) {
    distacia1 = cat1 - mouse;
  } else {
    distacia1 = mouse - cat1;
  };
  
  if (cat2 > mouse) {
    distacia2 = cat2 - mouse;
  } else {
    distacia2 = mouse - cat2;
  };
  

  switch (true) {
    case (distacia1 > distacia2):
      result = "cat2";
      break;

    case (distacia2 > distacia1):
      result = "cat1";
      break;
    
    case ( distacia1 === distacia2):
      result = "os gatos trombam e o rato foge";
      break;
  };

  return result;
};

// Desafio 8

function fizzBuzz(arrayOfNumbers) {
  let arrayResult = [];

  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    switch (true) {
      case (arrayOfNumbers[index] % 3 === 0 && arrayOfNumbers[index] % 5 === 0):
        arrayResult.push("fizzBuzz");
        break;

      case (arrayOfNumbers[index] % 3 === 0):
        arrayResult.push("fizz");
        break;

      case (arrayOfNumbers[index] % 5 === 0):
        arrayResult.push("buzz");
        break;
      
      default:
        arrayResult.push("bug!");
        break;
    };
  };

  return arrayResult;
};

// Desafio 9
function encode(str1) {

  let str1Result = "";

  for (let key in str1) {
    switch (true) {
      case (str1[key] === "a"):
        str1Result += "1";
        break;
        
      case (str1[key] === "e"):
        str1Result += "2";
        break;

      case (str1[key] === "i"):
        str1Result += "3";
        break;

      case (str1[key] === "o"):
        str1Result += "4";
        break;

      case (str1[key] === "u"):
        str1Result += "5";
        break;

      default:
        str1Result += str1[key];
        break;
    };
  };

  return str1Result;
};

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
