// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return ((base * altura) / 2);
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = [];
  let palavra = '';
  for (let word in string) {
    if (string[word] != ' ') {
      palavra = palavra + string[word];
      if ((word == (string.length - 1))) {
        array.push(palavra);
      }
    } else {
      array.push(palavra);
      palavra = '';
    }
  }
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let string = array[array.length - 1] + ', ' + array[0];
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = 0;
  pontos = (3 * wins) + ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior = array[0];
  let contador = 0;
  for (let index in array) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  for (let index2 in array) {
    if (maior === array[index2]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  } else if (Math.abs(cat2 - mouse) === Math.abs(cat1 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
}

// Função Math.abs - Retornar o valor em módulo de um número - fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let fizzbuzz = [];
  for (let number in numeros) {
    if (numeros[number] % 3 === 0 && numeros[number] % 5 === 0) {
      fizzbuzz.push('fizzBuzz');
    } else if (numeros[number] % 3 === 0) {
      fizzbuzz.push('fizz');
    } else if (numeros[number] % 5 === 0) {
      fizzbuzz.push('buzz');
    } else {
      fizzbuzz.push('bug!');
    }
  }
  return fizzbuzz
};

// Desafio 9
function encode(string) {
  // seu código aqui
  let resposta = '';
  let codigo = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  }
  for (index in string) {
    if (string[index] in codigo){
      resposta = resposta + codigo[string[index]]
    } else {
      resposta = resposta + string[index]
    }
  }
  return resposta
}




function decode(string) {
  // seu código aqui
  let resposta = '';
  let codigo = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u'
  }
  for (index in string) {
    if (string[index] in codigo){
      resposta = resposta + codigo[string[index]]
    } else {
      resposta = resposta + string[index]
    };
  };
  return resposta;
};


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
