// Desafio 1
function compareTrue(value1, value2) {

  if(value1 === true && value2 === true){
    return true
  }
  else{
    return false
  }

}

// Desafio 2
function calcArea(base, height) {
  
  return (base * height) / 2

}

// Desafio 3
function splitSentence(str) {
  return str.split(/\s/g)
}

// Desafio 4

function getLenght(array){
  let lenght
  for(let strings in array){
    lenght = strings
  }
  return lenght
}

function concatName(array) {
  
  return `${array[getLenght(array)]}, ${array[0]}`

}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1)
  return points
}

// Desafio 6

function highestCount(array) {

  let maiorNumero = Math.max.apply(null, array);
  let countNumber = 0;
  
  for(let number of array){
    if(number === maiorNumero){
      countNumber++;
    }
  }

  return countNumber

}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  if(cat1 === mouse || cat2 === mouse){
    return 'Os gatos trombam e o rato foge'
  }
  else if(Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    return 'cat1'
  }
  else if(Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)){
    return 'cat2'
  }
  
}

// Desafio 8

function fizzBuzz(array) {

  let res = []

  for(let number of arrayTeste){

    if(number % 3 !== 0 && number % 5 !== 0){
      res.push('bug!')
    }
    else if(number % 3 === 0 && number % 5 === 0){
      res.push('fizzBuzz')
    }
    else if(number % 3 === 0){
      res.push('fizz')
    }
    else if(number % 5 === 0){
      res.push('buzz')
    }
    
  }

  return res

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
