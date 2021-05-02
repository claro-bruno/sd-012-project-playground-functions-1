// Desafio 1
function compareTrue(value1, value2) {
  let result1;
  if (value1 == true && value2 == true){
    
    return result1 = true;
  }
  else {
    return result1 = false;

  }
}


// Desafio 2
function calcArea(base, height) {
  let result2 = (base * height) /2;
  return result2;
  
}


// Desafio 3
function splitSentence(sentence) {
  let result3 = sentence.split (" ");
  return result3;
}


// Desafio 4
function concatName(nameList) {
  let firstName = nameList[0];
  let lastName = nameList [(nameList.length) -1];
  let result4 = [lastName, firstName]; 
  return result4;

}

// Desafio 5
function footballPoints(wins, ties) {

  let result5 = (wins *3) + (ties);
  return result5;
}

// Desafio 6
function highestCount(numberList) {
  let highestNumber = 0;
  let timesNumber = 0;

  for (let index = 0; index < numberList.length; index += 1) {

    if (highestNumber < numberList[index]){
      highestNumber = numberList[index];
    };
  };
  for (let index = 0; index < numberList.length; index += 1) {

    if (highestNumber === numberList[index]){
      timesNumber = timesNumber + 1;
    };
  };
  return timesNumber;
};


// Desafio 7
function catAndMouse() {
  // seu código aqui
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
