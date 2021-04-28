// Desafio 1
function compareTrue(elemento1, elemento2) {
  if (elemento1 === true && elemento2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let array = phrase.split(' ');
  return array;
}

// Desafio 4
function concatName(arrayNomes) {
   let ultPrimeiro = ("" + arrayNomes[arrayNomes.length -1] + ", " + arrayNomes[0]);
  return ultPrimeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosWins = (wins * 3);
  return pontosWins + ties;
}

// Desafio 6
function highestCount(numbers) {
  let contMaiorNum = 0;
  let maiorNum = 0;
  for (let i in numbers){
    if(numbers[i] > maiorNum) maiorNum = numbers[i];
  }
  for (let i in numbers){
    if(numbers[i] === maiorNum) contMaiorNum += 1;
  }
  return contMaiorNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = (mouse - cat1);
  let distanciaCat2 = (mouse - cat2);
  if (distanciaCat1 < 0) distanciaCat1 = (distanciaCat1 * -1);
  if (distanciaCat2 < 0) distanciaCat2 = (distanciaCat2 * -1);

  if( distanciaCat1 < distanciaCat2){
    return "cat1";
  }else if (distanciaCat2 < distanciaCat1){
    return "cat2";
  }else{
    return "os gatos trombam e o rato foge";
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
