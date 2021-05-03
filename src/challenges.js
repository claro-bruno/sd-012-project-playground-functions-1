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
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1;
  let distanceCat2;
 
  if (mouse - cat1 >= 0){
    distanceCat1 = mouse - cat1;
  };

  if(mouse - cat1 < 0){
    distanceCat1 = (mouse - cat1) * -1;   
  };

  if (mouse - cat2 >= 0){
    distanceCat2  = mouse - cat2;
  };
  if(mouse - cat2 < 0){
    distanceCat2 = (mouse - cat2) * -1;   
  };

  if(distanceCat1 < distanceCat2){
  return 'cat1';

  }

  if (distanceCat1 > distanceCat2){
    return 'cat2';

  }

  if (distanceCat1 === distanceCat2){
    return 'os gatos trombam e o rato foge';
    
    }

}

// Desafio 8
function fizzBuzz(numberArray) {
  let result8 = [];
  for (let index = 0; index < numberArray.length; index += 1) {
    
    if (numberArray[index] % 3 === 0 && numberArray[index] % 5 === 0) {
      result8[index] = 'fizzBuzz';

    } 
    if (numberArray[index] % 5 === 0 && numberArray[index] % 3 != 0) {
      result8[index] = 'buzz';

    } 
    if (numberArray[index] % 3 === 0 && numberArray[index] % 5 != 0) { 
      result8[index] = 'fizz'; 

    }
    if (numberArray[index] % 3 != 0 && numberArray[index] % 5 != 0) {
      result8[index] = 'bug!';

    }
  }
  return result8
}


// Desafio 9
function encode(letterNumber) {
// https://www.w3schools.com/jsref/jsref_replace.asp
// utilizei a função 'string replace' para deixar o codigo mais conciso.
  letterNumber = letterNumber.replace(/a/g, '1');
  letterNumber = letterNumber.replace(/e/g, '2');
  letterNumber = letterNumber.replace(/i/g, '3');
  letterNumber = letterNumber.replace(/o/g, '4');
  letterNumber = letterNumber.replace(/u/g, '5');

  return letterNumber;
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
