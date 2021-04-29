// Desafio 1
function compareTrue(num1, num2) {
  let somaPar = num1 + num2;
  let zero = true;

  if ( somaPar % 2 === 0  && zero === true) {
    resultado = true;
  } else if (somaPar % 2 === 0 || zero === true) {
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

//   let posicaoGato2 = cat2
//   let posicaoRato = mouse
//   let resultado;

//   if(posicaoGato1 <= posicaoRato && posicaoGato1 < posicaoGato2 + 1 && posicaoGato2 !== posicaoRato){
//     resultado = "cat1"
//   } else {
//     resultado = "cat2"
//   }
//   return resultado;
}
//   console.log(catAndMouse(1,2,3)); */
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


// Desafio 9
function encode(stringVogais) {
  // function trocaLetra(vogal, numeroInteiro){
  // let fraseEncode = stringVogais
  // let resultado = fraseEncode.replace(/vogal/g, "numero") 
  // return resultado;
  let resultado = stringVogais;
  for (index = 0; index < stringVogais.length; index +=1){
    if(stringVogais[index] === "a"){
      resultado = resultado.replace(/a/g, "1")
  }   else if (stringVogais[index] === "e"){
      resultado = resultado.replace(/e/g, "2")
  }   else if(stringVogais[index] === "i"){
      resultado = resultado.replace(/i/g, "3")
  }   else if(stringVogais[index] === "o"){
      resultado = resultado.replace(/o/g, "4")
  }   else if(stringVogais[index] === "u"){
      resultado = resultado.replace(/u/g, "5")
  }   
  
}
return resultado;
}


function decode(stringVogais) {
  // seu código aqui
  let resultado = stringVogais;
  for (index = 0; index < stringVogais.length; index +=1){
    if(stringVogais[index] === "1"){
      resultado = resultado.replace(/1/g, "a")
  }   else if (stringVogais[index] === "2"){
      resultado = resultado.replace(/2/g, "e")
  }   else if(stringVogais[index] === "3"){
      resultado = resultado.replace(/3/g, "i")
  }   else if(stringVogais[index] === "4"){
      resultado = resultado.replace(/4/g, "o")
  }   else if(stringVogais[index] === "5"){
      resultado = resultado.replace(/5/g, "u")
  }   
  
}
return resultado;
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
