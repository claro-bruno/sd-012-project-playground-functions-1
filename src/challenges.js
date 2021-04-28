// Desafio 1
function compareTrue(elemento1, elemento2) {
  let condicao = false;
  if (elemento1 === true && elemento2 === true) condicao = true;
  return condicao;
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
  let ultPrimeiro = (`${arrayNomes[arrayNomes.length -1]}, ${arrayNomes[0]}`);
  return ultPrimeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosWins = (wins * 3);
  return pontosWins + ties;
}

// Desafio 6
function highestCount(numbers) {
  let maiorNum = 0;
  for (let i in numbers) {
    if(numbers[i] > maiorNum) maiorNum = numbers[i];
  }
  return contRepeated(numbers, maiorNum);
}

// Desafio 6.1
function contRepeated(numbers, maiorNum){
  let contMaiorNum = 0;
  for (let i in numbers){
    if (numbers[i] === maiorNum) contMaiorNum += 1;
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
function fizzBuzz(numbers) {
  let newArray=[];
  for (let i in numbers){
    let divPor3 = false;
    let divPor5 = false;
    if(numbers[i] % 3 == 0 ) divPor3 = true;
    if(numbers[i] % 5 == 0 ) divPor5 = true;
    if (divPor3 == true && divPor5 == false) {
      newArray.push("fizz");
    }else if (divPor3 == false && divPor5 == true){
      newArray.push("buzz");
    }else if (divPor3 == true && divPor5 == true){
      newArray.push("fizzBuzz");
    } else {
      newArray.push("bug!");
    } 
  }
  return newArray;
}

// Desafio 9
function encode(string) {
  string = string.replace(/a/g,"1");
  string = string.replace(/e/g,"2");
  string = string.replace(/i/g,"3");
  string = string.replace(/o/g,"4");
  string = string.replace(/u/g,"5");
  return string;
}

function decode(string) {
  string = string.replace(/1/g,"a");
  string = string.replace(/2/g,"e");
  string = string.replace(/3/g,"i");
  string = string.replace(/4/g,"o");
  string = string.replace(/5/g,"u");
  return string;
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
