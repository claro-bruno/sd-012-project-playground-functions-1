// Desafio 1
function compareTrue(bool1, bool2) {
  return (bool1 && bool2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let splitWords = [];
  let word = '';

  for (let letter of string) {
    if (letter !== ' ') {
      word += letter;
    } else {
      splitWords.push(word);
      word = '';
    }
  }

  if (word !== '') {
    splitWords.push(word);
  }

  return splitWords;
}

// Desafio 4
function concatName(arr) {
  let stringConcatenada = arr[arr.length - 1] + ', ' + arr[0];

  return stringConcatenada;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let maiorNumero = 0;
  let repeticoesMaiorNumero = 0;

  for (let numero of arrayNumeros) {
    if (numero > maiorNumero) {
      maiorNumero = numero;
      repeticoesMaiorNumero = 1;
    } else if (numero === maiorNumero) {
      repeticoesMaiorNumero += 1;
    }
  }

  return repeticoesMaiorNumero;
}

// Desafio 7
function catAndMouse(cat1, cat2) {
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1 < cat2) {
    return 'cat1';
  }

  return 'cat2';
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let resultadosFizzBuzz = [];

  for (let numero of arrayNumeros) {
    resultadosFizzBuzz.push(!(numero % 15) ? "fizzBuzz" : !(numero % 3) ? "fizz" : !(numero % 5) ? "buzz" : "bug!");
  }

  return resultadosFizzBuzz;
};

// Desafio 9
function encode(mensagem) {
  let transformacao = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  };

  let mensagemCodificada = '';

  for (let indiceMensagem in mensagem) {
    for (let chave in transformacao) {
      if (mensagem[indiceMensagem] == chave) {
        mensagemCodificada += transformacao[chave];
        break;
      };
    };
    if ((mensagemCodificada.length - 1) != indiceMensagem) {
      mensagemCodificada += mensagem[indiceMensagem];
    };
  };

  return mensagemCodificada;;
};

function decode(mensagemCodificada) {
  let transformacao = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  };

  let mensagemDecodificada = '';

  for (let indiceMensagem in mensagemCodificada) {
    for (let chave in transformacao) {
      if (mensagemCodificada[indiceMensagem] == transformacao[chave]) {
        mensagemDecodificada += chave;
        break;
      };
    };
    if ((mensagemDecodificada.length - 1) != indiceMensagem) {
      mensagemDecodificada += mensagemCodificada[indiceMensagem];
    };
  };

  return mensagemDecodificada;
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
