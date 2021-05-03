// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if ((value1 === true) && (value2 === true)) {
    console.log(value1);
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  console.log(area)
  return area;
}
console.log(calcArea(7, 8));

// Desafio 3
function splitSentence(string) {
    // seu código aqui
      let frase = '';
      let array = [];

      for(let index = 0; index < string.length; index += 1){
        if(index === string.length - 1){
          frase += string[index];
          array.push(frase);
        }
        else if(string[index] != ' '){
          frase += string[index];
        }
        else{
          array.push(frase);
          frase = '';
        }
      }
      console.log(array)
      return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  array = ['acerola', 'abbacte', 'buroti'];
  let elem1 = array[0];
  let elem2 = array[(array.length) - 1];

  console.log(concatName(`${elem2}, ${elem1}`));

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