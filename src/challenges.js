// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui!
  let resultado = false;
  if (valor1 === true && valor1 === valor2){
     resultado = true;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let triangleArea = ((base * height) / 2);
  return triangleArea;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let newSentence = frase.split(' ');
  return newSentence;
}

// Desafio 4
function concatName(array) {
  // seu código aqui  
  return `${array[array.length-1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = ((wins * 3) + (ties * 1));
  return points;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let highestValue = numbers[0];
  let soma = 0;

  for (let index = 1; index < numbers.length; index += 1){
    if (numbers[index] > highestValue) {
      highestValue = numbers[index];
      };
    };

  for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] === highestValue){
      soma += 1;
    }; 
  };
  return soma;
}
                       
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
    let positionCat1 = Math.abs(mouse - cat1);
    let positionCat2 = Math.abs(mouse - cat2);
    let result;
       
    if (positionCat1 < positionCat2){
      result = "cat1";
    } 
    else if (positionCat1 > positionCat2){
      result = "cat2";
    }
    else {
      result = "os gatos trombam e o rato foge"
    }
    return result;
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let newArray = [];
  
  for (let index = 0; index < array.length; index += 1){
    if ((array[index] % 3 === 0) && (array[index] % 5 === 0)){
      newArray.push('fizzBuzz');
    }
    else if ((array[index] % 3 === 0) && (array[index] % 5 !== 0)){
      newArray.push('fizz');
    } 
    else if ((array[index] % 3 !== 0) && (array[index] % 5 === 0)){
      newArray.push('buzz');
    }
    else {
      newArray.push('bug!');
    }
  }
  return newArray;
} 

// Desafio 9
function encode(frase) {
  // seu código aqui
   let array = frase.split();

  for (let index = 0; index < array.length; index += 1){
    switch(true){
      case 'a':
        frase[index] = '1';
        break;

      case 'e':
        frase[index] = '2';
        break;

      case 'i':
        frase[index] = '3';
        break;
        
      case 'o':
        frase[index] = '4';
        break;  

      case 'u':
        frase[index] = '5';
        break;     
    }
  }
  return array;
}

console.log(encode('hi there!'))

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
