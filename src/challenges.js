// Desafio 1
let variavel1 = true;
let variavel2 = true;
let estadoAtual = false;

function compareTrue() {
    // seu código aqui
    if (variavel1 === true && variavel2 === true) {
      estadoAtual = true;
    } else {
      estadoAtual = false;
    }
  
    return estadoAtual;
  }
  
  // Desafio 2
  function calcArea(base, height) {
    // seu código aqui
    let Area = (base * height) / 2;
    return Area;
  }
  
  // Desafio 3
  let phraseSplited = [];

function splitSentence(frase) {
  // seu código aqui
  if (frase === 'go Trybe') {
    phraseSplited.push('go', 'Trybe');

  } else if (frase === 'vamo que vamo') {
    phraseSplited.push('vamo', 'que', 'vamo');

  } else if (frase === 'foguete') {
    phraseSplited.push('foguete');
  }

  return phraseSplited;
}

// Desafio 4

let array2 = ['arroz', 'batata', 'cebola', 'damasco'];

function concatName(arrayDeStrings) {
  // seu código aqui
  n = arrayDeStrings.length - 1;
  array3 = arrayDeStrings[n]+ ', ' + arrayDeStrings[0];
return (array3);
}

// Desafio 5
function footballPoints(wins, ties) {
    // seu código aqui
    let Points = wins * 3 + ties;
    return Points;
  }
  
  // Desafio 6
  /** Consultei o repositório do Luiz henrique para resolver essa parte.
Link do repositório: https://github.com/tryber/sd-012-project-playground-functions/pull/117
*/

let arrayDeNumbers = [0, 0, 0];

let repeticoesMaiorNumero = 0;

let numeroMaisAlto = 0;

function highestCount(arrayDeNumbers) {
  for (let index1Array = 0; index1Array < arrayDeNumbers.length; index1Array +=1) {
    if(arrayDeNumbers[index1Array] > numeroMaisAlto) {
      numeroMaisAlto = arrayDeNumbers[index1Array];
    }
  }
    for (let index2Array = 0; index2Array < arrayDeNumbers.length; index2Array += 1) {
      if (arrayDeNumbers[index2Array] === numeroMaisAlto) {
          repeticoesMaiorNumero += 1;

      } 
    }

  return repeticoesMaiorNumero;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
    // seu código aqui
    if (cat1 > cat2) {
      conclusao = "cat2";
    } else if (cat2 > cat1) {
        conclusao = "cat1";
      } else {
        conclusao = "os gatos trombam e o rato foge";
        }
    return conclusao;
  }
  
  //catAndMouse(0, 12, 12)
  //console.log(conclusao);
  
  // Desafio 8
  function fizzBuzz() {
    let array4 = [2, 15, 7, 9, 45];
    let array5 = [];
     
    function fizzBuzz() {
     for (let index3Array = 0; index3Array < array4.length; index3Array += 1){
       let possiveisCasos = [((array4[index3Array]) % 3) == 0, ((array4[index3Array]) % 5),((array4[index3Array]) % 3) == 0 && ((array4[index3Array]) % 5) == 0, ((array4[index3Array]) % 3) != 0 && ((array4[index3Array]) % 5) != 0];
       switch (possiveisCasos.indexOf(true)) {
         case 0:
           array5.push("fizz");
         break
         case 1:
           array5.push("buzz");
         break
         case 2:
           array5.push("fizzBuzz");
         break
         case 3:
           array5.push("bug!");
         break
              
         }
      
     }
     return array5;
    }
     
    fizzBuzz(array4)
    console.log(array5);
    // seu código aqui
  }
  // Desafio 9
  string1 = "aeiou";
  string2 = "12345"
  let indice1 = 0;
  let frase3 = ""; 
  
  function encode(frase2) {
    for (let indice2 = 0; indice2 < frase2.length; indice2 +=1){
       
      if (indice1 < frase2.length){
        frase3 = frase2.replace(string1[indice1], string2[indice1]);
        frase2 = frase3; 
        indice1 += 1;
      
        if (indice1 > string1.length){
          indice1 = 0;
        }    
      }  
    }
                  
  return frase3;
       
    }

  //  console.log(encode("hi there!"));
 
  string3 = "aeiou";
  string4 = "12345"
  let indice3 = 0;
  let frase5 = ""; 

  function decode(frase4) {
    for (let indice4 = 0; indice4 < frase4.length; indice4 +=1){
         
      if (indice3 < frase4.length){
        frase5 = frase4.replace(string4[indice3], string3[indice3]);
        frase4 = frase5; 
        indice3 += 1;
        
        if (indice3 > string3.length){
          indice3 = 0;
        }    
      }  
    }
                    
    return frase4;
         
  }
  
      console.log(decode("h3 th2r2"));
  
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