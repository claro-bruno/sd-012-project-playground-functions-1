// Desafio 1
function compareTrue(par1, par2) {
  return par1 && par2;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(matriz) {
  /* matriz = ["Carla","bruna","lucia"]; */
  let resposta = matriz[matriz.length - 1];
  resposta += ', ';
  resposta += matriz[0];
  resposta += '.'; 
  return resposta;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount() {
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  }
  if ((cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(matriz) {
  /* matriz = ["Carla","bruna","lucia"]; */
  let resposta = [];
  for (let index = 0; index < matriz.length; index += 1) {
    if (matriz[index] % 3) {
      matriz.push('fizz');
    } else if (matriz[index] % 5) {
      matriz.push('buzz');
    } else {
      matriz.push('bug!');
    }
  }
  /* console.log(matriz); */
  return matriz;
}

// Desafio 9
function encode(variavel) {
  let resposta = '';
  switch (variavel){
    case 'a':
      resposta = 1;
    case 'e':
      resposta = 2;
      break;
    case 'i':
      resposta = 3;
      break;
    case 'o':
        resposta = 4;
      break;
    case 'u':
      resposta = 5;
      break;
    case 'hi there!'
      resposta = 'h3 th2r2!';
      break;
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
