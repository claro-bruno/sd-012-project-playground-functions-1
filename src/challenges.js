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
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
