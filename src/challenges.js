// Desafio 1
function compareTrue(numero, numero2) {

  if (numero === true && numero2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2

}
// Desafio 3
function splitSentence(string) {

  let splits = string.split(' ')
  return splits
}

// Desafio 4
function concatName(Valor) {

  let arrayLeng = Valor.length - 1
  let resultado = Valor[arrayLeng] + ", " + Valor[0]
  return resultado

}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 3
  let pontosEmpate = 1
  let pontosTotal = wins * pontos + pontosEmpate * ties
  return pontosTotal
}
// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaMouse = Math.abs(mouse - cat1)
  let distanciaMouse2 = Math.abs(mouse - cat2)

  if (distanciaMouse == distanciaMouse2) {
      return "os gatos trombam e o rato foge"
  } else if (distanciaMouse < distanciaMouse2) {
      return "cat1"
  } else if (distanciaMouse2 < distanciaMouse) {
      return "cat2"
  }
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
