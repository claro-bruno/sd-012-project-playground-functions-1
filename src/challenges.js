// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(arg) {
  // seu código aqui
  let separate = arg[arg.length - 1]  + ', ' + arg[0];
  return separate;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vit = wins * 3;
  let emp = ties;
  return vit + emp;
}

// Desafio 6
function highestCount(index) {
  // seu código aqui
  let maiorNum = 0;
  let repet = 0;
  for (count = 0; count < index.length; count += 1) {
    if (index[count] > maiorNum) {
      maiorNum = index[count];
    }
  }
  for (count2 = 0; count2 < index.length; count2 += 1) {
    if (maiorNum === index[count2]) {
      repet += 1;
    }
  }
  return repet;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let moreNear = '';
  let cat1Wins = Math.abs(cat1 - mouse);
  let cat2Wins = Math.abs(cat2 - mouse);

  if (cat1Wins < cat2Wins) {
    moreNear = 'cat1';
  } else if (cat1Wins > cat2Wins) {
    moreNear = 'cat2';
  } else if (cat1Wins === cat2Wins) {
    moreNear = 'os gatos trombam e o rato foge';
  }
  return moreNear;
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let result = [];
  
  for (let index = 0; index < array.length; index += 1) {

    if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
      result.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      result.push('buzz');
    } else if (array[index] % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
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
