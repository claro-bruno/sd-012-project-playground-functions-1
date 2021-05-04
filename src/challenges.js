// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  else {
    return false;
  };
};

console.log(compareTrue(true, true));
console.log(compareTrue(false, false));
console.log(compareTrue(false, true));
console.log(compareTrue(true, false));


// Desafio 2
function calcArea(base, height) {
  return (base * height / 2);
};

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));


// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}; 

console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));


// Desafio 4
function concatName(array) {
  let lastItem = array[array.length - 1];
  let firstItem = array[0];
  let result = lastItem + ', ' + firstItem;
  return result;
};

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));


// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3)+ ties;
  return points;
};

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));



// Desafio 6
function highestCount(number) {
  let highestNumber = 0;
  let repetition = 0;
  
  for (let index = 0; index < number.length; index += 1) {
    if (highestNumber < number[index]) {
      highestNumber = number[index];
    };
  };

  for (let index = 0; index < number.length; index += 1) {
    if (number[index] === highestNumber) {
      repetition += 1;
    };
  };
  return repetition;

};

console.log(highestCount([9,1,2,3,9,5,7]));
console.log(highestCount([0,4,4,4,9,2,1]));
console.log(highestCount([0,0,0]));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1;
  let distanceCat2;
  let result;
  
  if (cat1 > mouse) {
    distanceCat1 = cat1 - mouse;
  }
  else {
    distanceCat1 = mouse - cat1;
  };

  if (cat2 > mouse) {
    distanceCat2 = cat2 - mouse;
  }
  else {
    distanceCat2 = mouse - cat2;
  };

  switch (true) {
    case (distanceCat1 > distanceCat2):
      result = 'cat2';
      break;

    case (distanceCat2 > distanceCat1):
      result = 'cat1';
      break;
    
    case (distanceCat1 === distanceCat2):
      result = 'os gatos trombam e o rato foge';
      break;
  };
  return result;
};

console.log(catAndMouse(8, 5, 6));
console.log(catAndMouse(20, 14, 8));
console.log(catAndMouse(30, 15, 15));



// Desafio 8
function fizzBuzz() {

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
