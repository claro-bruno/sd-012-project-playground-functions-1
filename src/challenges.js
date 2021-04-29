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
function highestCount(numeros) {
  // seu código aqui  
  let maiorNumero = 0;
  let contador = 0;

  for (let index = 0; index <= numeros.length; index +=1){
    if (maiorNumero < numeros[index]){
      maiorNumero = numeros[index];
    };
  };

  for (let index = 0; index <= numeros.length; index += 1){
    if (maiorNumero == numeros[index]){
      contador ++;
    };
  };
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

  let gato1 = Math.abs(mouse - cat1);
  let gato2 = Math.abs(mouse - cat2);

  if(gato1 < gato2){
    return "cat1";
  } else if (gato2 < gato1){
    return "cat2";
  } else{
    return "os gatos trombam e o rato foge";
  };
}

console.log(catAndMouse(2,1,3));

// Desafio 8
function fizzBuzz(inputNumbers) {
  // seu código aqui

  let outputString = [];

  for (let index = 0; index < inputNumbers.length; index += 1){
    if (inputNumbers[index] % 3 == 0 && inputNumbers[index] % 5 == 0){
      outputString.push("fizzBuzz");
    } else if (inputNumbers[index] % 3 == 0){
      outputString.push("fizz");
    } else if (inputNumbers[index] % 5 == 0){
      outputString.push("buzz");
    } else {
      outputString.push("bug!");
    }
  }
  return outputString;
}

// Desafio 9
function encode(encodeText) {
  // seu código aqui
  let minusulo = encodeText.toLowerCase();
  let teste = minusulo[0];

  return teste;

}

console.log(encode("ANA CAROLINA"));

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
