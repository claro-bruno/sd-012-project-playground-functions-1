// Desafio 1
function compareTrue(valor1, valor2) {
  return (valor1 === true && valor2 === true);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// console.log(splitSentence('foguete'))

// Desafio 4
function concatName(arrayStrings) {
  let firstString = arrayStrings[0];
  let lastString = arrayStrings[arrayStrings.length - 1];
  return (lastString + ', ' + firstString);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let times = 0;
  let highestNumber = 0;
  for (let index in numbers) {
    for (let indexNumber = 0; indexNumber < numbers.length; indexNumber += 1) {
      if (numbers[index] > highestNumber) {
        highestNumber = numbers[index];
      }
    }
  }
  for (let index in numbers) {
    if (numbers[index] === highestNumber) {
      times += 1;
    }
  }
  return times;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  // pesquisar funcao ABS (plantao do Issac)
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  let nearCat = '';
  if (cat1Distance < cat2Distance) {
    nearCat = 'cat1';
  } else if (cat2Distance < cat1Distance) {
    nearCat = 'cat2';
  } else {
    nearCat = 'os gatos trombam e o rato foge';
  }
  return nearCat;
}
// console.log(catAndMouse(0, 6, 12));

// Desafio 8
function fizzBuzz(numbers) {
  let outputArray = [];
  for (let index in numbers){
    if (((numbers[index] % 3) === 0) && ((numbers[index] % 5) === 0)){
      outputArray.push('fizzBuzz');
    }else if ((numbers[index] % 3) === 0){
      outputArray.push('fizz');
    }else if ((numbers[index] % 5) === 0){
      outputArray.push('buzz');
    }else {
      outputArray.push('bug!');
    };
  };
  return outputArray;
}
// console.log(fizzBuzz([9, 25]));

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
