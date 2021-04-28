// Desafio 1
let index = 0;
function compareTrue( bolleano1, bolleano2) {

  if (bolleano1 === true && bolleano2 === true) {
    return true;
  };
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height / 2)
}

// Desafio 3
function splitSentence(frase) {
let marcador = 0;
let palavras = [];
let ffinal= [];
  for (let index = 0; index < frase.length; index += 1){
    if (frase[index] === ' '){
        for (marcador; marcador < index; marcador += 1){
          palavras += frase[marcador];
        };
        ffinal.push(palavras);
        palavras = [];
        marcador = index + 1;
    };
  };
  for (marcador;marcador < frase.length;marcador += 1){
    palavras+=frase[marcador];
  };
     ffinal.push(palavras);
  return ffinal;
}

// Desafio 4
function concatName(array) {
  ultimo= array.length;
  return array[ultimo-1] + ',' + array[0];
}

function footballPoints(wins,ties) {
  return wins * 3 + ties;
  
}

// Desafio 6
function highestCount(inteiros) {
let maior = inteiros[0];
let contador = 0;
  for (index = 0;index < inteiros.length;index += 1){
    if (inteiros[index] > maior){
      maior = inteiros[index];
    }
  };
  for (index = 0;index < inteiros.length;index += 1){
    if (inteiros[index] === maior){
      contador += 1;
    }
  };
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = mouse - cat1;
  let distancia2 = mouse - cat2;
  if (distancia2 < distancia1){
    return 'cat2';
  }
  if (distancia2 > distancia1){
    return 'cat1';
  }
  else {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8
function fizzBuzz(buzzer) {
  let fizer = [];
  for(index =0 ; index <= buzzer.length; index += 1){
    if(buzzer[index] % 3 === 0 && buzzer[index] % 5 !== 0 ){
      fizer.push('fizz');
    }
    else if(buzzer[index] % 5 === 0 && buzzer[index] % 3 !== 0){
      fizer.push('buzz');
    }
    else if(buzzer[index] % 5 === 0 && buzzer[index] % 3 === 0){
      fizer.push('fizzBuzz');
    }
    else{
      fizer.push('bug!')
    }
  }
return fizer;  
}

// Desafio 9
function encode(string) {
  let final = [];
    for (index = 0; index < string.length; index += 1){
      if(string[index] === 'a'){
        final += '1';
      }
      else if(string[index] === 'e'){
        final += '2';
      }
      else if(string[index] === 'i'){
        final += '3';
      }
      else if(string[index] === 'o'){
        final += '4';
      }
      else if(string[index] === 'u'){
        final += '5';
      }
      else{
        final +=string[index];
      }
    }
return final
}


function decode(string1) {
  let final1 = [];
  for (index = 0; index < string1.length; index += 1){
    if(string1[index] === '1'){
      final1 += 'a';
    }
    else if (string1[index] === '2'){
      final1 += 'e';
    }
    else if (string1[index] === '3'){
      final1 += 'i';
    }
    else if (string1[index] === '4'){
      final1 += 'o';
    }
    else if (string1[index] === '5'){
      final1 += 'u';
    }
    else{
      final1 += string1[index];
    }
  }
return final1
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
