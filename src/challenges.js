// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(splitString) {
  let words = splitString.split(' ');
  return words;
}
// Desafio 4
function concatName(strings) {
  let lastAndFirst = `${strings[strings.length - 1]}, ${strings[0]};`;
  return lastAndFirst;
}
// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}
// Desafio 6
function highestCount(array) {
  let repeticoes = 0;
  let maiorNum = 0;
  for (let num of array) {
    if (num > maiorNum) {
      maiorNum = num;
    }
  }
  for (let key of array) {
    if (key === maiorNum) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let d1 = Math.abs(mouse - cat1);
  let d2 = Math.abs(mouse - cat2);
  if (d1 < d2) {
    return 'cat1';
  } else if (d2 < d1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8
function fizzBuzz(numbers) {
  let output = [];
  for (let num in numbers) {
    if(numbers[num] % 3 === 0 && numbers[num] % 5 !== 0) {
      output.push('fizz');
    } else if (numbers[num] % 3 !== 0 && numbers[num] % 5 === 0) {
      output.push('buzz');
    } else if (numbers[num] % 3 === 0 && numbers[num] % 5 === 0) {
      output.push('fizzBuzz');
    } else if (numbers[num] % 3 !== 0 && numbers[num] % 5 !== 0) {
      output.push('bug!');
    }
  }
  return output;
}
// Desafio 9
function encode(imputCode) {
  let imputLetter = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  let output = '';
  for(let bit of imputCode){
    for(let key in imputLetter){
      if(bit === key){
        bit = imputLetter[key]; 
      }
    }
    output += bit;
  }
  return output;
}

function decode(imputCode) {
  let imputLetter = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let output = '';
  for(let num of imputCode){
    for(let key in imputLetter){
      if(num === key){
        num = imputLetter[key]; 
      }
    }
    output += num;
  }
  return output;
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
