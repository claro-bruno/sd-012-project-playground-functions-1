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
/*   let posicaoGato1 = cat1
  let posicaoGato2 = cat2
  let posicaoRato = mouse
  let resultado;

  if(posicaoGato1 <= posicaoRato && posicaoGato1 < posicaoGato2 + 1 && posicaoGato2 !== posicaoRato){
    resultado = "cat1"
  } else { 
    resultado = "cat2"
  }
  return resultado;
}
  console.log(catAndMouse(1,2,3)); */
// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  
  let resultado = [];

  for (index = 0; index < arrayFizzBuzz.length; index +=1) {
    if (arrayFizzBuzz[index] % 3 === 0 && arrayFizzBuzz[index] % 5 === 0) {
      resultado.push("fizzBuzz")
    } else if (arrayFizzBuzz[index] % 3 === 0) {
      resultado.push("fizz")
    } else if (arrayFizzBuzz[index] % 5 === 0) {
      resultado.push("buzz")
    } else {
      resultado.push("bug!")
    }
  } 
  return resultado;
}
console.log(fizzBuzz([2,15,7,9,45]))

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
