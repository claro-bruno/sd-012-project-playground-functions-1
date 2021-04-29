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
  let distancecat1 = (cat1 - mouse);
  let distancecat2 = (cat2 - mouse);
  if (distancecat1 < distancecat2) {
    return "cat1";
  } else if (distancecat2 < distancecat1) {
    return "cat2";
  } else if (distancecat1 === distancecat2) {
    return 'os gatos trombaram e o rato foge';
  }
}
// console.log(catAndMouse(1, 4, 3));
// console.log(catAndMouse(1, 6, 12));
// console.log(catAndMouse(1, 3, 3));

// Desafio 8
function fizzBuzz(array) {
  let arrayNumber = [];
  for(let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 !== 0){
      arrayNumber.push("fizz");
    } else if (array[index] % 5 === 0 && array[index] % 3 !== 0){
      arrayNumber.push("buzz");
    } else if (array[index] % 3 === 0 && array[index] % 5 === 0){
      arrayNumber.push("fizzBuzz");
    } else {
      arrayNumber.push("bug!");
    }
  }
  return arrayNumber;
}

// Referencia - as linhas 97,100, 102, 104, 106 foram modificadas após sucessivas tentativas de alteração do código, a versão mais proxima, nao trazia uma variavel para armazenar o resultado das interações, e ao invés de realizar o push, utilizava o return com a mensagem correspondente, o que fazia o código retornar apenas o resultado do primeiro número, após consultar, novamente a resolução do colega Eric Kreis (https://github.com/tryber/sd-012-project-playground-functions/commit/d820b69cf5cd11a6a2b68f156616e9fb3f3a183b), fez todo o sentido e compreendi a necessidade de uma váriavel de um array vazio que seria preenchida conforme o resultado. O restante (percorrer todo o objeto com o for in, e fazer as interações de verificação de divisão pelo número determinado, consegui sozinho. Graças a God!)
// console.log(fizzBuzz([2, 15, 7, 9, 45]));
// console.log(fizzBuzz([7, 9]));
// console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(code) {
  let arrayCode = [code];
  for(let index in code) {
    if


function decode(arrayDecode) {
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
