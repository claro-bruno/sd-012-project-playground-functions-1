// Desafio 1
function compareTrue(par1, par2) {
  // seu código aqui

  if (par1 == true && par2 == true){
    return true;
  } else{
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let palavras = frase.split(" ");
  return palavras;
}

// Desafio 4
function concatName(nomes) {
  // seu código aqui
  let firstName = nomes[0];
  let lastName = nomes[nomes.length - 1];
  return lastName + ", " + firstName
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount() {
  // seu código aqui
  let numeros = [9, 1, 2, 3, 9, 5, 7];
  let maiorNumero = Math.max(9, 1, 2, 3, 9, 5, 7)
  let contador = 0

  for (let index = 0; index <= numeros.length; index += 1){
    if (maiorNumero == numeros[index]){
      contador ++
    };
  };
  return contador;
}

console.log(highestCount());

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
