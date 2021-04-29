// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(palavra) {
  return palavra.split(" ");
}
// Desafio 4
function concatName(nome) {
  return (`${nome[nome.length - 1]}, ${nome[0]}`);
}
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}
//let array6 = [0, 0, 0];
// Desafio 6
function highestCount(Array) {
  let maior = 0;
  let contador = 0;
  for (let key = 0; key < Array.length; key += 1) {
    if (maior < Array[key]) {
      maior = Array[key];
    }
  }
  for (let keyCont in Array) {
    if (maior === Array[keyCont]) {
      contador += 1;
    }
  }
  return contador;
}
//console.log(highestCount(array6));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let auxCat1 = cat1 - mouse;
  let auxCat2 = cat2 - mouse;
  if (Math.abs(auxCat1) < Math.abs(auxCat2)) {
    return 'cat1';
  } else if (Math.abs(auxCat2) < Math.abs(auxCat1)) {
    return 'cat2';
  } else {
  return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(Array) {
  let stringResultado = [];
  for (let key = 0; key < Array.length; key += 1) {
    if ((Array[key] % 3 === 0) && (Array[key] % 5 !== 0)) {
      stringResultado.push('fizz');
    } else if ((Array[key] % 3 !== 0) && (Array[key] % 5 === 0)) {
      stringResultado.push('buzz');
    } else if ((Array[key] % 3 === 0) && (Array[key] % 5 === 0)) {
      stringResultado.push('fizzBuzz');
    } else {
      stringResultado.push('bug!');
    }
  }
  return stringResultado;
}

//let stringAquiorigin = "hi there!";
// Desafio 9
function encode(stringAqui) {
  let stringRetornoEncode = '';
  for (let key in stringAqui) {
    if (stringAqui[key] === 'a') {
      stringRetornoEncode += '1'; 
    } else if (stringAqui[key] === 'e') {
      stringRetornoEncode += '2';
    } else if (stringAqui[key] === 'i') {
      stringRetornoEncode += '3'; 
    } else if (stringAqui[key] === 'o') {
      stringRetornoEncode += '4'; 
    } else if (stringAqui[key] === 'u') {
      stringRetornoEncode += '5'; 
    } else {
      stringRetornoEncode += stringAqui[key];
    }
  }
  return stringRetornoEncode;
}
//console.log(encode(stringAquiorigin));

//let outra = "h3 th2r2!";
function decode(stringAqui) {
  let stringRetornoDecode = '';
  for (let key in stringAqui) {
    if (stringAqui[key] === '1') {
      stringRetornoDecode += 'a'; 
    } else if (stringAqui[key] === '2') {
      stringRetornoDecode += 'e';
    } else if (stringAqui[key] === '3') {
      stringRetornoDecode += 'i'; 
    } else if (stringAqui[key] === '4') {
      stringRetornoDecode += 'o'; 
    } else if (stringAqui[key] === '5') {
      stringRetornoDecode += 'u'; 
    } else {
      stringRetornoDecode += stringAqui[key];
    }
  }
  return stringRetornoDecode;
}
//console.log(decode(outra));
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
