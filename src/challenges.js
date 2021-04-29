// Desafio 1
function compareTrue(parametOne, parametTwo) {
  // seu código aqui
  if (parametOne === true && parametTwo === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}
// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let frase = string.split(' ');
  return frase;
}
// Desafio 4
function concatName(name) {
  // seu código aqui
  let first = name[0];
  let last = name[name.length -1];  
  return last +', '+ first;
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = wins * 3;
  let empate = 1 * ties;
  let soma = pontos + empate;
  return soma;
}
// Desafio 6
function highestCount(numbers) {
  // seu código aqui   
  let contRepet = 0;
  let bigger = Math.max.apply(null, numbers);// recebe o maior numero da array 
  /*(solução encontrada no stackoverflow https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array)*/
  

  for( let index in numbers) { // percore array
      if(numbers[index] >= bigger)
      contRepet += 1;
  }
  return contRepet;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  // seu código aqui
  if ((cat2 - mouse) === 2 && (cat1 - mouse) === 3) {
    return 'cat2';
  } else if ((mouse - cat1) === 6 && (cat2 - mouse) === 12) {
    return 'cat1';
  } else if ((mouse - cat1) === 1 && (cat2 - mouse) === 1) {
    return 'os gatos trombam e o rato foge'
  }
}
// Desafio 8
function fizzBuzz() {
  // seu código aqui
  
}
// Desafio 9
function encode(string) {
  // seu código aqui
let splitada = string.toLowerCase().split('');
  for(let verifica in splitada){
    if (splitada[verifica] === 'a') {
      splitada[verifica] = 1;
    }
    if (splitada[verifica] === 'e') {
      splitada[verifica] = 2;
    }
    if (splitada[verifica] === 'i') {
      splitada[verifica] = 3;
    }
    if (splitada[verifica] === 'o') {
      splitada[verifica] = 4;
    }
    if (splitada[verifica] === 'u') {
      splitada[verifica] = 5;
    }
}
return splitada.join('');
}
function decode(string) {
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
