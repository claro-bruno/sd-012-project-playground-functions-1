// Desafio 1
function compareTrue(firstBoolean, secondBoolean) {
  if ((firstBoolean && secondBoolean) === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(stringToSplit) {
  let array = stringToSplit.split(' ');
  return array;
}

// Desafio 4
function concatName(namesArray) {
  let max = namesArray[namesArray.length - 1];
  let min = namesArray[0];
  let string = `${max}, ${min}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(numbArrey) {
  let maior = 0;
  let count = 0;
  for (let index = 0; index < numbArrey.length; index += 1) {
    if (numbArrey[index] >= maior) {
      maior = numbArrey[index];
    }
  }
  console.log(maior);
  for (let index = 0; index < numbArrey.length; index += 1) {
    if (numbArrey[index] === maior) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1,cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  if(cat1Distance < cat2Distance){
   return ("cat1");
  }else if (cat2Distance < cat1Distance){
    return("cat2");
  }else{
    return ("os gatos trombam e o rato foge");
  }
}


// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
