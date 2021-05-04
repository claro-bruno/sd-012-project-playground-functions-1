// Desafio 1
function compareTrue(n1, n2) {
  if (n1.valueOf() === true && n2.valueOf() === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  let array = [];
  let string = '';
  for (let index = 0; index < frase.length; index += 1){
    if (frase[index] != ' '){
      string = string + frase[index];
    } else {
      array.push (string);
      string = '';
    }
  };
  array.push (string);
  return array;
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(parametro) {
  let resultado = parametro[parametro.length - 1] + ', ' + parametro[0];
  return resultado;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitorias = wins * 3;
  let pontosEmpates = ties;
  return pontosEmpates + pontosVitorias;  
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(numeros) {
  let numeroMaior = 0;
  let contador = 0;
  for (index = 0; index < numeros.length; index += 1){
      if (numeros[index] >= contador){
          contador = numeros[index];
        }
    };
    for (indexVerify = 0; indexVerify < numeros.length; indexVerify += 1){
        if (numeros[indexVerify] == contador){
            numeroMaior += 1;
        }
    }
    return numeroMaior;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distMouseCat1 = mouse - cat1;
  let distMouseCat2 = mouse - cat2;
  if ((Math.abs(distMouseCat1) < Math.abs(distMouseCat2))){
    return 'cat2';
  } else if ((Math.abs(distMouseCat2) < Math.abs(distMouseCat1))){
    return 'cat1';
  } else if ((Math.abs(distMouseCat1) == Math.abs(distMouseCat2))){
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(1, 0, 2));
console.log(catAndMouse(1, 7, 13));
console.log(catAndMouse(1, 4, 4));

// Desafio 8
function fizzBuzz(parametro) {
  let array = [];
  for (index = 0; index < parametro.length; index += 1){
    if (parametro[index] % 3 == 0 && parametro[index] % 5 == 0){
    array.push('fizzBuzz');
    } else if (parametro[index] % 3 == 0){
    array.push('fizz');
    } else if (parametro[index] % 5 == 0){
    array.push('buzz');
    } else if (parametro[index] % 3 != 0 || parametro[index] % 5 != 0) {
    array.push('bug!');
    }
  };
  return array;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(parametro) {
/*  let substA;
  let substE;
  let substI;
  let substO;
  let substU;
  for (index = 0; index < parametro.length; index += 1){
    if(parametro[index] === 'a'){
      parametro[index] = 1;
    } else if (parametro[index] === 'e'){
      parametro[index] = 2;
    } else if (parametro[index] === 'i'){
      parametro[index] = 3;
    } else if (parametro[index] === 'o'){
      parametro[index] = 4;
    } else if (parametro[index] === 'u'){
      parametro[index] = 5;
    }
  };
  return parametro;*/
}
console.log(encode("hi there!"));


function decode(parametro) {
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
