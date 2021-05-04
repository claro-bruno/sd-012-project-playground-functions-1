// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
  if(a === true && b == true){
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
return (base * altura) / 2;
}

// Desafio 3
function splitSentence(separacao) {
  // seu código aqui
  return separacao.split (' ');
}

// Desafio 4
function concatName(nomes) {
  // seu código aqui
  let primeiroPosicao = nomes[0]
  let segundoPosicao = nomes[nomes.length - 1]
  return segundoPosicao + ', ' + primeiroPosicao;

}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties 

}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let maiorNumero = 0;
  let repetidor = 0;

  for(let index = 0; index < arrayNumbers.length; index += 1){
    if(arrayNumbers[index] > maiorNumero){
      maiorNumero = arrayNumbers[index];
    }
  }
  for(let index2 = 0; index2 < arrayNumbers.length; index2+= 1){
    if(arrayNumbers[index2] === maiorNumero){
      repetidor+= 1;
    }
}
return repetidor;
}
 console.log(highestCount([0, 0, 0]))

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
