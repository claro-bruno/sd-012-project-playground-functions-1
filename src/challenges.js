// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  if(boolean1 === true && boolean2 === true){
    return true;
  }else{
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
};

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let palavrasFrase = [""];
  let indexCounter = 0;
  for(letra of sentence){
    if(letra === " "){
      palavrasFrase.push("");
      indexCounter += 1;
    }else{
      palavrasFrase[indexCounter] += letra;
    };
  };
  return palavrasFrase;
};

// Desafio 4
function concatName(listaNomes) {
  // seu código aqui
  let concat = listaNomes[listaNomes.length - 1]+", "+listaNomes[0];
  return concat;
};

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = 0;
  for(let win = 0; win < wins; win += 1){
    points += 3;
  };
  for(let tie = 0; tie < ties; tie += 1){
    points += 1;
  };
  return points;
};

// Desafio 6
function highestCount(numberList) {
  // seu código aqui
  let highest = numberList[0];
  for(let number of numberList){
    if(number > highest){
      highest = number;
    };
  };
  let repeatCounter = 0;
  for(let compareNumber of numberList){
    if(compareNumber === highest){
      repeatCounter += 1;
    };
  };
  return repeatCounter;
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let positionCat1 = mouse - cat1;
  if(positionCat1 < 0){
    positionCat1 = positionCat1 * (-1);
  };
  let positionCat2 = mouse - cat2;
  if(positionCat2 < 0){
    positionCat2 = positionCat2 * (-1);
  };
  if(positionCat1 < positionCat2){
    return "cat1";
  }else if(positionCat2 < positionCat1){
    return "cat2";
  }else{
    return "os gatos trombam e o rato foge";
  };
};

// Desafio 8
function fizzBuzz(numberArray) {
  // seu código aqui
  let stringList = [];
  for(let number of numberArray){
    if(number % 3 === 0 && number % 5 === 0){
      stringList.push("fizzBuzz");
    }else if(number % 3 === 0){
      stringList.push("fizz");
    }else if(number % 5 === 0){
      stringList.push("buzz");
    }else{
      stringList.push("bug!");
    };
  };
  return stringList;
};

// Desafio 9
function encode(stringSentence) {
  // seu código aqui
  let encodedSentence = "";
  for(let letter of stringSentence){
    switch (letter) {
      case "a":
        encodedSentence += "1"
        break;
      case "e":
        encodedSentence += "2"
        break;
      case "i":
        encodedSentence += "3"
        break;
      case "o":
        encodedSentence += "4"
        break;
      case "u":
        encodedSentence += "5"
        break;
      default:
        encodedSentence += letter;
    };
  };
  return encodedSentence;
};

function decode(stringSentence) {
  // seu código aqui
  let decodedSentence = "";
  for(let letter of stringSentence){
    switch (letter) {
      case "1":
        decodedSentence += "a"
        break;
      case "2":
        decodedSentence += "e"
        break;
      case "3":
        decodedSentence += "i"
        break;
      case "4":
        decodedSentence += "o"
        break;
      case "5":
        decodedSentence += "u"
        break;
      default:
        decodedSentence += letter;
    };
  };
  return decodedSentence;
};


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
