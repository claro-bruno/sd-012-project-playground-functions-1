// Desafio 1
function compareTrue(bool1, bool2) {
    return bool1 && bool2;
};

// Desafio 2
function calcArea(base, height) {
    return base * height / 2;
};

// Desafio 3
function splitSentence(string) {
    return string = string.split(' ');
};

// Desafio 4
function concatName(array) {
    return array = array[array.length - 1] + ', ' + array[0];
};

// Desafio 5
function footballPoints(wins, ties) {
    return wins * 3 + ties;
};

// Desafio 6  
function highestCount(array) {
  let maiorNumero;
    for (let numero in array) {
        if (numero == 0) {
            maiorNumero = array[numero];
        } else if (maiorNumero < array[numero]) {
            maiorNumero = array[numero];
        };
    };
    let cont = 0;
    for (let check in array) {
        if (maiorNumero === array[check]) {
          cont += 1;
        };
    };
    return cont;
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    let distance1 = Math.abs(mouse - cat1);
    let distance2 = Math.abs(mouse - cat2);
    if (distance1 < distance2) {
        return 'cat1';
    } else if (distance2 < distance1) {
        return 'cat2';
    } else {
        return 'os gatos trombam e o rato foge';
    };
};

// Desafio 8
function fizzBuzz(array) {
    let respArray = [];
    for (let numero in array) {
        if (array[numero] % 3 === 0 && array[numero] % 5 !==0) {
            respArray.push('fizz');
        } else if (array[numero] % 5 === 0 && array[numero] % 3 !==0) {
            respArray.push('buzz');
        } else if (array[numero] % 3 === 0 && array[numero] % 5 === 0) {
            respArray.push('fizzbuzz')
        } else {
            respArray.push('bug!')
        };
    };
    return respArray;
};
console.log(fizzBuzz([9, 25]))
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
