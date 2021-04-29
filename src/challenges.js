// Desafio 1
function compareTrue(valorBoolean1, valorBoolean2) {
  // seu código aqui
  if ((valorBoolean1 === true) && (valorBoolean2 === true)) {
    return true;
  }
  return false;
}
// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  let result;

  result = (base * heigth) / 2;

  return result;
}
// console . log (calcArea(10, 50));

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  string = string.split(' '); // Lembrar de dar 2 espaços se não ele separa letra por letra.

  return string;
}
// console.log(splitSentence('Go trybe'));

// Desafio 4
function concatName(nameList) {
  // seu código aqui
  let firstName = nameList[0];
  let lastName = nameList.slice(-1); // Slice() para copiar e adicionar em novo Array.
  let lastAndFirstName = []; // Criar novo array para adicionar o lastName e firstName.

  lastAndFirstName.push(lastName + ' ' + firstName); // Adiciona no array.

  return lastAndFirstName;
}
// let nameList = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// console.log(concatName(nameList));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let point;

  point = (wins * 3) + ties;

  return point;
}
// console.log(footballPoints(14,8));

// Desafio 6
function highestCount(arrayNumeros) {
  // seu código aqui
  let highNumber = arrayNumeros[0];
  let counter = 0;

  for (let indexHighNumber = 0; indexHighNumber < arrayNumeros.length; indexHighNumber += 1) {
    if (highNumber < arrayNumeros[indexHighNumber]) { // For para achar o meior numero.
      highNumber = arrayNumeros[indexHighNumber];
    }
  }
  for (let index of arrayNumeros) {
    if (index === highNumber) { // For para contagem.
      counter += 1;
    }
  }
  return counter;
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Distance = Math.abs(cat1 - mouse); // Usar Math para obter valor absoluto.
  let cat2Distance = Math.abs(cat2 - mouse);

  if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';  
  } else if (cat1Distance < cat2Distance) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  // seu código aqui
  let string = [];

  for (let index = 0; index < arrayNumeros.length; index +=1) {
    if (arrayNumeros[index] % 3 === 0 && arrayNumeros[index] % 5 === 0) {
      string.push("fizzBuzz");
    } else if (arrayNumeros[index] % 5 === 0) {
      string.push("buzz");
    }else if (arrayNumeros[index] % 3 === 0) {
      string.push("fizz");  
    }else if (arrayNumeros[index] % 3 === 0 && arrayNumeros[index] % 5 === 0) {
      string.push("fizzBuzz");
    } else {
      string.push("bug!");
    }
  }
return string;
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
