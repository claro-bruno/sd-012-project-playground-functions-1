/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
// Desafio 1
function compareTrue(word1, word2) {
  if (word1 === true && word2 === true) {
    return true
  } else {
    return false
  }
}
compareTrue(false, true)

// Desafio 2
function calcArea(base, height) {
  let area = (base * height / 2);
  return area;
};
let base = 51;
let height = 1;

calcArea(base, height)


// Desafio 3
function splitSentence(phrase) {
  let result = phrase.split(' ');
  return result;
}


(splitSentence('vamo que vamo'))

// Desafio 4
function concatName(nomeCompleto) {
  for (contador = 0; contador < nomeCompleto.length; contador += 1); {
    nomeCompleto = (nomeCompleto[nomeCompleto.length - 1] + ',') + ' ' + (nomeCompleto[0]);
  }
  return nomeCompleto
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3;
  let finalResult = wins + ties;
  return finalResult
}
let wins = 14
let ties = 8
footballPoints(wins, ties)

// Desafio 6
function highestCount(array) {
  let repeat = 0;
  let highNumber = 0;

  for (accountant = 0; accountant < array.length; accountant += 1) {
    if (array[accountant] > highNumber) {
      highNumber = array[accountant]
    }
  }
  for (accountant = 0; accountant < array.length; accountant += 1) {
    if (highNumber === array[accountant]) {
      repeat += 1
    }
  }
  return repeat
}
highestCount([9, 1, 2, 3, 9, 5, 7])

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1position = Math.abs(mouse - cat1)
  let cat2position = Math.abs(mouse - cat2)

  if (cat1position === cat2position) {
    return "os gatos trombam e o rato foge"
  }
  if (cat1position < cat2position) {
    return "cat1"
  }
  if (cat2position < cat1position) {
    return "cat2"
  }
}
catAndMouse(1, 0, 2)

// Desafio 8
function fizzBuzz(array) {
  let finalvalue = [];
  for (let accountant = 0; accountant < array.length; accountant += 1) {

    if (array[accountant] % 3 === 0 && array[accountant] % 5 === 0) {
      finalvalue.push("fizzBuzz")
    } else if (array[accountant] % 3 === 0) {
      finalvalue.push("fizz")
    } else if (array[accountant] % 5 === 0) {
      finalvalue.push("buzz")
    } else {
      finalvalue.push("bug!");
    }
  }
  return finalvalue
}
fizzBuzz([9, 25])

// Desafio 9
function encode(word) {
  let encriptword = '';
  let yesno = true;
  let encript = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let accountant = 0; accountant < word.length; accountant += 1) {
    yesno = true;
    for (let key in encript) {
      if (word[accountant] === key) {
        encriptword += encript[key];
        yesno = false;
      }
    }
    if (yesno) {
      encriptword += word[accountant];
    }
  }
return encriptword;
}
encode('hi there!');

function decode(word) {
  let encriptword = ''
  let yesno = true;
  let encript = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let accountant = 0; accountant < word.length; accountant += 1) {
    yesno = true;
    for (let key in encript) {
      if (word[accountant] === key) {
        encriptword += encript[key];
        yesno = false;
      }
    }
    if (yesno) {
      encriptword += word[accountant];
    }
  }
  console.log(encriptword);
}
decode('h3 th2r2!');

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
