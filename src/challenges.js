// funcão auxiliar para o desafio 6:
const MaiorElemento = (arr) => {
  let maior = 0;

  arr.forEach(element => {
    if (element > maior) {
      maior = element;
    };
  });

  return maior;
};

// Desafio 1
function compareTrue(bool1, bool2) { return (bool1 && bool2) };

// Desafio 2
function calcArea(base, height) { return ((base * height) / 2) }

// Desafio 3
function splitSentence(str) { return str.split(" ") };

// Desafio 4
function concatName(arr) { return `${arr[arr.length - 1]}, ${arr[0]}` };

// Desafio 5
function footballPoints(wins, ties) { return ((wins * 3) + ties) };

// Desafio 6
function highestCount(arr) {
  let contador = 0;
  let maiorNum = MaiorElemento(arr);

  arr.forEach(element => {
    if (element == maiorNum) {
      contador++;
    };
  });

  return contador;
};


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let closer = '';

  if (distCat1 == distCat2) {
    closer = 'os gatos trombam e o rato foge';
  } else {
    closer = distCat1 < distCat2 ? 'cat1' : 'cat2';
  }
  return closer;
}


// Desafio 8
function fizzBuzz(arr) {
  let message = '';
  let fizzAndBuzz = [];

  arr.forEach(element => {
    (element % 3 == 0 && element % 5 == 0) ? message = 'fizzBuzz' :
      (element % 3 == 0) ? message = 'fizz' :
        (element % 5 == 0) ? message = 'buzz' :
          message = 'bug!';

    fizzAndBuzz.push(message);

  })

  return fizzAndBuzz;
}

// Desafio 9
function encode(str) {

  str = str.split('a').join('1');
  str = str.split('e').join('2');
  str = str.split('i').join('3');
  str = str.split('o').join('4');
  str = str.split('u').join('5');

  return str;
}


function decode(str) {

  str = str.split('1').join('a');
  str = str.split('2').join('e');
  str = str.split('3').join('i');
  str = str.split('4').join('o');
  str = str.split('5').join('u');

  return str;

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
