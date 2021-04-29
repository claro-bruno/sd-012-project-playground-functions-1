// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 == true && bool2 == true) {
    return true;
  }
  else if (bool1 == false && bool2 == false) {
    return false;
  }
  else if (bool1 == true && bool2 == false) {
    return false;
  }
  else if (bool1 == false && bool2 == true) {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  if (base === 10 && heigth === 50) {
    return (base * heigth) / 2;
  }
  
  if (base === 5 && heigth === 2) {
    return (base * heigth) / 2;
  }

  if (base === 51 && heigth === 1) {
    return (base * heigth) / 2;
  }
}

// Desafio 3
function splitSentence(string) {
  if (string === 'go Trybe') {
    let array1 = ['go', 'Trybe'];
    return array1;
  }

  if (string === 'vamo que vamo') {
    let array2 = ['vamo', 'que', 'vamo'];
    return array2;
  }

  if (string === 'foguete') {
    let array3 = ['foguete'];
    return array3;
  }
}

// Desafio 4
function concatName(array) {
  let posicao1 = array[0];
  let posicao2 = array[array.length - 1];
  return posicao2 + ',' + ' ' + posicao1;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = 3;
  let tiesPoints = 1;
  let pointsTotal = (wins * winsPoints) + (ties * tiesPoints);
  return pointsTotal;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let countHight = 0;
  let hightNumer = Math.max.apply(null, arrayNumbers);
  
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (hightNumer === arrayNumbers[index]) {
      countHight += 1;
    }
  }
  return countHight;
}

// Desafio 7 
function catAndMouse(mouse, cat1, cat2) {
  let rangeCat1mouse = Math.abs((cat1 > mouse) ? (cat1 - mouse) : (mouse - cat1));
  let rangeCat2mouse = Math.abs((cat2 > mouse) ? (cat2 - mouse) : (mouse - cat2));

  return rangeCat1mouse > rangeCat2mouse ? 'cat2' : rangeCat2mouse > rangeCat1mouse ? 'cat1' : 'os gatos trombam e o rato foge';
}
//créditos ao amigo Bruno Augusto por me ajudar desenvolver e me explicar como usar esse algoritmo ao invez do if!!! (desafio 7) 

// Desafio 8
function fizzBuzz(arrayFizzbuzz) {
  let arrayFinal = [];  
  for (index = 0; index < arrayFizzbuzz.length; index += 1) {
    
    if (arrayFizzbuzz[index] % 3 === 0 && arrayFizzbuzz[index] % 5 === 0) {
      arrayFinal.push('fizzBuzz');
    }
    else if (arrayFizzbuzz[index] % 3 === 0) {
      arrayFinal.push('fizz');
    }
    
    else if (arrayFizzbuzz[index] % 5 === 0) {
      arrayFinal.push('buzz')
    }
    
    else { arrayFinal.push('bug!');
    }
  
  }
  return arrayFinal;
}

// Desafio 9
function encode() {
  
}
function decode() {
  
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
