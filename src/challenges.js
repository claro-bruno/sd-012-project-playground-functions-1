// Desafio 1
function compareTrue(a, b){
  if (a === true && b === true) {
    return true
  } else {
    return false
  };
};


// Desafio 2
function calcArea(base, height){
  let result = (base * height) / 2;
  return result;
};


// Desafio 3
function splitSentence(string) {
  let sentence = string;
  let result = sentence.split(' ');
  return result;
};


// Desafio 4
function concatName(names) {
  let result = (names[names.length -1] + ', ' + names[0]);
  
  return result;
};


// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);

  return totalPoints
};


// Desafio 6
function highestCount(numbers) {
    let higherNumber = 0;
    let count = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
      higherNumber = numbers[index];
    }
  }

  for (let index = 0; index < numbers.length; index += 1) {
    if (higherNumber === numbers[index]) {
      count += 1;
    }
  };
  return count;
};


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);

  if( distance1 < distance2) {
    return 'cat1';
  } else if (distance1 > distance2) {
    return 'cat2';
  } else if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  };
};


// Desafio 8
function fizzBuzz(numbers) {
  let list = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 == 0) {
      list.push('fizz')
    } else if (numbers[index] % 5 == 0) {
      list.push('buzz')
    } else if (numbers[index] % 3 == 0 && numbers[index] % 5 == 0) {
      list.push('fizzBuzz')
    } else if (numbers[index] % 3 != 0 && numbers[index] % 5 != 0) {
      list.push ('bug!')
    };
  };
  return list;
};



// Desafio 9
function encode(string) {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
}

function decode(string) {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return mapString(map, string);
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