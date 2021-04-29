// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else if (value1 === false || value2 === false) {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
};

// Desafio 3
function splitSentence(sentence) {
  let arraySentence = sentence.split(" ");
  return arraySentence;
};

// Desafio 4
function concatName(list) {
  let arrayChange = [];
  for(let index = list.length - 1; index >= 0; index -= 1 ){
    if (index === 0 || index === (list.length -1)) {
      arrayChange.push(list[index]);
    }
  }
  return arrayChange.toString();
};

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
};

// Desafio 6
function highestCount(numbers) {
  let highValue = numbers[0];
  let count = 0;
  for(let number of numbers) {
    if (highValue < number) {
      highValue = number;
    };
  };
  for(let number of numbers) {
    if(number === highValue){
      count += 1;
    };
  };
  return count;
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  if (distanceCat1 < 0) {
    distanceCat1 = distanceCat1 * (-1);
  };
  let distanceCat2 = mouse - cat2;
  if (distanceCat2 < 0) {
    distanceCat2 = distanceCat2 * (-1);
  };

  if (distanceCat1 > distanceCat2) {
    return "cat2";
  } else if (distanceCat2 > distanceCat1) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  };
};

// Desafio 8
function fizzBuzz(numbers){
  let arrayFizzBuzz = [];
  for (let number of numbers){
    if((number % 3) === 0 && (number % 5) === 0) {
      arrayFizzBuzz.push("fizzBuzz");
    } else if (number % 3 === 0) {
      arrayFizzBuzz.push("fizz");
    } else if (number % 5 === 0) {
      arrayFizzBuzz.push("buzz");
    } else {
      arrayFizzBuzz.push("bug!");
    };
  };
  return arrayFizzBuzz;
};

// Desafio 9
function encode(stringEncode) {
  let rule = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  };
  for(let index = 0; index < stringEncode.length; index += 1) {
    for(let key in rule) {
      if(key == stringEncode[index]) {
        stringEncode = stringEncode.replace(stringEncode[index], rule[key]);
      };
    };
  };
  return stringEncode;
};
function decode(stringDecode) {
  let rule = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u'
  };
  for(let index = 0; index < stringDecode.length; index += 1) {
    for(let key in rule) {
      if(key == stringDecode[index]) {
        stringDecode = stringDecode.replace(stringDecode[index], rule[key]);
      };
    };
  };
  return stringDecode;

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
