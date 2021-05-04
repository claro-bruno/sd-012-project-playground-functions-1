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
function encode(string) {
  // seu código aqui
  let novaString = '';
  for (let indice = 0; indice < string.length; indice += 1) {
    if (string[indice] === 'a') {
      novaString += string[indice].replace('a', '1');
    } else if (string[indice] === 'e') {
      novaString += string[indice].replace('e', '2');
    } else if (string[indice] === 'i') {
      novaString += string[indice].replace('i', '3');
    } else if (string[indice] === 'o') {
      novaString += string[indice].replace('o', '4');
    } else if (string[indice] === 'u') {
      novaString += string[indice].replace('u', '5');
    } else {
      novaString += string[indice];
    }
  }
  return novaString;
  
}
function decode(string) {
  // seu código aqui
  let novaString = '';
  for (let indice = 0; indice < string.length; indice += 1) {
    if (string[indice] === '1') {
      novaString += string[indice].replace('1', 'a');
    } else if (string[indice] === '2') {
      novaString += string[indice].replace('2', 'e');
    } else if (string[indice] === '3') {
      novaString += string[indice].replace('3', 'i');
    } else if (string[indice] === '4') {
      novaString += string[indice].replace('4', 'o');
    } else if (string[indice] === '5') {
      novaString += string[indice].replace('5', 'u');
    } else {
      novaString += string[indice];
    }
  }
  return novaString;
}
console.log(encode("hi there!"));
console.log(decode("h3 th2r2!"))

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
