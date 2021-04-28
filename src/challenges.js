// Desafio 1
function compareTrue(bool1Compare,bool2Compare) {
  return (bool1Compare && bool2Compare);
}

// Desafio 2
function calcArea(baseTriangulo,aulturaTriangulo) {
  return (baseTriangulo*aulturaTriangulo/2);
}

// Desafio 3
function splitSentence(frase) {
  let arrayStrings=[]
  for (index=0;index<frase.lenght;index+=1)
}

// Desafio 4
function concatName(listaNomes) {
  return (listaNomes[((listaNomes.length)-1)] + ", " + listaNomes[0]);
}

// Desafio 5
function footballPoints(wins,ties) {
  return (wins*3+ties*1);
}

// Desafio 6
function highestCount(arrayNum) {
  let contHigh=1;
  let numHigh=arrayNum[0];
  for (let index=1;index<(arrayNum.length);index+=1) {
    if (numHigh==arrayNum[index]){
      contHigh+=1;
    }
    if (numHigh<arrayNum[index]){
      numHigh=arrayNum[index];
      contHigh=1;
    }
  }
  return contHigh;
}

// Desafio 7
function catAndMouse(positionMouse,positionCat1,positionCat2) {
let d1 = Math.abs(positionMouse-positionCat1);
let d2 = Math.abs(positionMouse-positionCat2);

if (d1<d2){return "cat1";}
if (d2<d1){return "cat2";}
if (d1==d2){return "os gatos trombam e o rato foge";}
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
