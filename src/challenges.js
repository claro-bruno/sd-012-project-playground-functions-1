// Desafio 1
function compareTrue(valor1, valor2) {
//   // seu código aqui
  let resultado;
    if (valor1 === true && valor2 === true) {
    resultado = true;
 }  else {
    resultado = false;
 }
  return (resultado);
};
// console.log(compareTrue(false,true));
// console.log(compareTrue(false,false));
// console.log(compareTrue(true,true));



// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) /2;
  return (area);
  }
  // console.log(calcArea(10,50));
  // console.log(calcArea(5,2));
  // console.log(calcArea(51,1));


// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let resultado = string.split([" "]);
  return (resultado);
};
  // console.log(splitSentence("Go Trybe"));
  // console.log(splitSentence("Vamo que Vamo"))

// Desafio 4
function concatName(concatenedArray) {
  // seu código aqui
  return concatenedArray[concatenedArray.length - 1] +', '+ concatenedArray[0];
};
// console.log(concatName(['Lucas','Cassiano','Ferraz','Paolillo']));
// console.log(concatName(['foguete', 'não', 'tem','ré']));
// console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let resultado = (wins*3) + (ties*1);
  return (resultado);
};
  // console.log (footballPoints(14,8))
  // console.log (footballPoints(1,2))
  // console.log (footballPoints(0,0))


// Desafio 6
function highestCount(arrayNumberInput) {
  // seu código aqui
//  let orderNumber = highestNumber.sort();
//  let resultado = [];
 
//  for (let index = 0; index < orderNumber.length; index ++) {
//    if (orderNumber[index] === orderNumber[(orderNumber.length - 1)]) {
//      resultado.push(orderNumber[index]);
//    } 
//  }
//  return (resultado.length);
let matrizOrganizada = matriz.sort();
  let contar = 0;
  for (let indice = 0; indice <= matriz.length - 1; indice += 1) {
    if (matrizOrganizada[indice] === matrizOrganizada[matrizOrganizada.length - 1]) {
      contar += 1;
    }
  }
  return contar;
};
// console.log(highestCount([-2, -2, -1]));
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
// console.log(highestCount([0, 0, 0]));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  if (cat1Distance > cat2Distance) {
    return 'cat2';
  } if (cat2Distance > cat1Distance) {
    return 'cat1';
  } if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  }

};
// console.log(catAndMouse(1,4,3));
// console.log(catAndMouse(1,7,13));
// console.log(catAndMouse(1,5,5));


// Desafio 8
function fizzBuzz(numberBuzz) {
  // seu código aqui
  let answer = [];
  for (let index = 0; index < numberBuzz.length; index += 1) {
    answer[index] = 'bug!';
    if (numberBuzz[index] % 15 === 0) {
      answer[index] = 'fizzBuzz';
    } else if (numberBuzz[index] % 5 === 0) {
      answer[index] = 'buzz';
    } else if (numberBuzz[index] % 3 === 0) { answer[index] = 'fizz'; }
  }
  return answer;
};
// console.log(fizzBuzz([2, 15, 7, 9, 45]))

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
