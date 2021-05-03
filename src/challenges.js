// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if ((value1 === true) && (value2 === true)) {
    console.log(value1);
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  console.log(area)
  return area;
}
console.log(calcArea(7, 8));

// Desafio 3
function splitSentence(string) {
    // seu código aqui
      let frase = '';
      let array = [];

      for(let index = 0; index < string.length; index += 1){
        if(index === string.length - 1){
          frase += string[index];
          array.push(frase);
        }
        else if(string[index] != ' '){
          frase += string[index];
        }
        else{
          array.push(frase);
          frase = '';
        }
      }
      console.log(array)
      return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return array[array.length -1] + ", " + array[0]; 

}console.log(concatName(['eer', 'urm', 'ebl']));
  
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  // let wins = 14;
  // let ties = 8;
  let pontos = (wins * 3) + ties;

  return pontos;
}    console.log(pontos)

// Desafio 6
let maiorNum = Math.max(...array); //referencia retirada da documentação Math.max()

function highestCount(array) {
  // seu código aqui
  let contagem = 0;

  for (let index = 0; index < array.length; index += 1) {
      if (array[index] == maiorNum)
        contagem += 1;
  }
    return contagem;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if ((cat1 - mouse) < (cat2 - mouse)) {
    return "cat1";
  } else if (cat2 - mouse < cat1 - mouse){
    return "cat2";
  } else {
    return "Os gatos trombam e o rato foge."
  }  
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
let fbrray = [];
for (let index in array) {
  if ((array[index] % 3 == 0) && (array[index] % 5 == 0)) {
    fbrray.push("fizzBuzz");
  } else if (array[index] % 3 == 0) {
    fbrray.push("fizz");
  } else if (array[index] % 5 == 0) {
    fbrray.push("buzz");
  } else {
    fbrray.push("bug!");
  };
};
    return fbrray;
};

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