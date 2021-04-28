// Desafio 1
function compareTrue(parameter1, parameter2) {
  if(parameter1 && parameter2 == true){
    return (true);
  } else {
    return (false);
  }
}

// console.log(compareTrue(true, true));
// console.log(compareTrue(true, false));
// console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
} 

// console.log(calcArea(10, 50));
// console.log(calcArea(5, 2));
// console.log(calcArea(51, 1));

// Desafio 3
function splitSentence (string) {
  return string.split(' ');
}

// console.log(splitSentence("go Trybe"));
// console.log(splitSentence("vamo que vamo"));
// console.log(splitSentence("foguete"));

// Desafio 4
function concatName(strings) {
  let array = strings;
  return (array[array.length -1]) + ', ' + (array[0]);
}

// strings = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// console.log(concatName(strings));
// strings =  ['foguete', 'não', 'tem', 'ré'];
// console.log(concatName(strings));
// strings = ['captain', 'my', 'captain'];
// console.log(concatName(strings));

// Desafio 5
function footballPoints(wins, ties){
  let points = (wins*3) + ties;
  return points;
}

// console.log(footballPoints(14, 8));
// console.log(footballPoints(1, 2));
// console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(numbers) {
    let highIndex = 0;
    let repetitions = 0;
    for(let index in numbers) {
      if(numbers[index] > highIndex) {
        highIndex = numbers[index];
      }
    }
    for(let number of numbers){
      if( number === highIndex){
        repetitions += 1;
      }
    }
    return repetitions;
  }

//Retirei a idéia de parte do código do colega Eric Kreis (https://github.com/tryber/sd-012-project-playground-functions/tree/eric-kreis-playground-functions), especificamente, as linhas 58, 64, 65,66 e 69. Soube encontrar o número maior, passei horas pesquisando e testando e não consegui chegar ao resultado, desta forma, notei que faltava uma variável para repetições e que deveria fazer um for of incrementando a variavel repetição sempre que o numero maior se repetia.

// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
// console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
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
