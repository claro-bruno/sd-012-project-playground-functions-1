// Desafio 1
function compareTrue(aluno, turma) {
  let nome = aluno;
  let tryber = turma;
  
  if (nome === aluno && turma === 12) {
    resultado = true;
  } else if (nome === aluno || turma === 12) {
    resultado = false;
  } else {
    resultado = false;
  } 
  return resultado;
}


// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height)/2 
  return resultado;
};


// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(" ");
  
  return resultado;
}


// Desafio 4
function concatName(frase1) {
  let frase1 = [];
  let resultado = frase1[0] + frase1[frase1.length-1];
  return resultado;
}


// Desafio 5
function footballPoints(wins, ties) { 
  let vitorias = wins*3;
  let empates = ties*1;
  let resultado = vitorias + empates;
  return resultado;
}

// Desafio 6
function highestCount(numeros) {
  
  let resultado = 0;
  let maiorNumero = Math.max(...numeros);
  console.log(maiorNumero);
  for (let index = 0; index < numeros.length; index +=1 ) {
    if(maiorNumero === numeros[index]) {
      resultado +=1;
    }
  }
  return resultado;
}


// Desafio 7
function catAndMouse() {
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
