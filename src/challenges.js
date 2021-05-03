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
function catAndMouse(mouse, cat1, cat2) {
  if(Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)){
    return 'os gatos trombam e o rato foge'
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

function encode(str) {
  
  let arrayLetras = str.split('')
  let newArray = []

  for(let letra of arrayLetras){
    if(letra === 'a'){
      newArray.push('1')
    }
    else if(letra === 'e'){
      newArray.push('2')
    }
    else if(letra === 'i'){
      newArray.push('3')
    }
    else if(letra === 'o'){
      newArray.push('4')
    }
    else if(letra === 'u'){
      newArray.push('5')
    }
    else{
      newArray.push(letra)
    }
  }

  return newArray.toString().replace(/\,/g, '')

}

function decode(str) {
  let arrayLetras = str.split('')
  let newArray = []

  for(let number of arrayLetras){
    if(number === '1'){
      newArray.push('a')
    }
    else if(number === '2'){
      newArray.push('e')
    }
    else if(number === '3'){
      newArray.push('i')
    }
    else if(number === '4'){
      newArray.push('o')
    }
    else if(number === '5'){
      newArray.push('u')
    }
    else{
      newArray.push(number)
    }
  }

  return newArray.toString().replace(/\,/g, '')
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
