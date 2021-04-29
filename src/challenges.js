// Desafio 1
function compareTrue(bool1, bool2) {
  if(bool1 === true && bool2 === true) {
      return true;
    } else {
      return false;
  };
};
// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
   return (base * height) / 2
};
// console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(frase) {
  return  frase.split(" ");
};
// console.log(splitSentence("vamo que vamo"));





// Desafio 4
function concatName() {
   // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
};
// console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(arraynumbers) {
// Verifica maior número da array.
    let maior = 0;
    for(let index =  0; index < arraynumbers.length; index++){
      if(arraynumbers[index] > maior){
        maior = arraynumbers[index];
        // console.log(maior);
      }
    }
//Verifica quantas vezes o maior número de repete dentro de uma array.
    let contador = 0;
    for(let index2 = 0; index2 < arraynumbers.length; index2 ++){
        if(maior == arraynumbers[index2]){
        contador  ++;
        // return contador;
      }
    }
    return contador;
}
// console.log(highestCount([2, 3, 5, 6, 9, 9, 9,]));

// Desafio 7
function catAndMouse() {
    
}

// Desafio 8
function fizzBuzz(buznumeros) {
let arrayFizz =[];
for(let index = 0; index < buznumeros.length; index++){
    if((buznumeros[index] % 3 == 0 && buznumeros[index] % 5 == 0)){
        arrayFizz.push("fizzBuzz");
    }else if(buznumeros[index] % 3 == 0){
        arrayFizz.push("fizz");
    }else if(buznumeros[index] % 5 == 0){
        arrayFizz.push("buzz");
    }else{
        arrayFizz.push("bug!");  
    }
}
  return arrayFizz;
}
// let variable = [2, 15, 7, 9, 45];
// console.log(fizzBuzz(variable));
// Desafio 9
function encode(codeString) {
  
  codeString = codeString.replaceAll("a","1");
  codeString = codeString.replaceAll("e","2");
  codeString = codeString.replaceAll("i","3");
  codeString = codeString.replaceAll("o","4");
  codeString = codeString.replaceAll("u","5");

return codeString;
}
// console.log(encode("aeiou uoiea"));

function decode(decodeString) {
  decodeString = decodeString.replaceAll("1","a");
  decodeString = decodeString.replaceAll("2","e");
  decodeString = decodeString.replaceAll("3","i");
  decodeString = decodeString.replaceAll("4","o");
  decodeString = decodeString.replaceAll("5","u");

return decodeString;
}
// console.log(decode("12345 54321"));
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
}