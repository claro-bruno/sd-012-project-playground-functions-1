// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui Xablau
  let trueOrFalse;
  if (bool1 === true && bool2 === true){
    trueOrFalse = true;
  } else {
    trueOrFalse = false;
  }
  return trueOrFalse;
  
};
//console.log(compareTrue(true, false));


// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calc;
  calc = (base * height) /2;

  return calc;
};

//console.log(calcArea (51, 1));

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let separador;
  separador = frase.split (" ");

  return separador;
};
//console.log (splitSentence("foguete"));

// Desafio 4
function concatName(array) {
  // seu código aqui
  let concat;
  for(let index = 0; index < array.length; index += 1){
    concat = (array[array.length-1]) + ', ' + array[0];
  }
  
  return concat;
}

//console.log(concatName (['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let calculo = (wins * 3) + (ties * 1);

  return calculo;
}
//console.log(footballPoints(0, 0))

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let cont = 0;
  let maior = numbers[0];
  for (let index = 0; index < numbers.length; index +=1){
    if (maior < numbers[index]){
      maior = numbers[index];
    };
  };
  
  for (index = 0; index < numbers.length; index += 1){
    if (maior === numbers[index]){
      cont +=1
    }else if(maior === 0){
      cont = 3
    };
  };
  return cont
}
//console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let calcCat1 = cat1 - mouse;
  let calcCat2 = cat2 - mouse;
  
  if (Math.abs(calcCat1) < Math.abs(calcCat2)) {
    return 'cat1';

  } else if (Math.abs(calcCat1) > Math.abs(calcCat2)) {
    return 'cat2';
  
  } else {
    return 'os gatos trombam e o rato foge';

  }

}
//console.log(catAndMouse(0, -3, -3))

// Desafio 8
function fizzBuzz(numbersFizzBuzz) {
  // seu código aqui
  let arrayComplete = [];
  for (let index = 0; index < numbersFizzBuzz.length; index += 1) {
    if (numbersFizzBuzz[index] % 3 === 0 && numbersFizzBuzz[index] % 5 === 0) {
      arrayComplete.push ('fizzBuzz');
    } else if (numbersFizzBuzz[index] % 3 === 0) {
      arrayComplete.push ('fizz');
    } else if (numbersFizzBuzz[index] % 5 === 0) {
      arrayComplete.push('buzz');
    } else {
      arrayComplete.push('bug!')
    }
  } 
  return arrayComplete
}
//console.log (fizzBuzz([9, 25]))

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
