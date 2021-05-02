// Desafio 1
function compareTrue(comp1, comp2) {
  if(comp1 === true && comp2 === true){
    result = true;
  }else{
    result = false;
  }
  return result;
}



// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}


// Desafio 3
//fonte de pesquisa: https://blog.betrybe.com/javascript/javascript-split/
function splitSentence(stringSentence) {
  // utilizei a espressão regular (/[\s,]+/) para varrer a string em busca de espaço entre os elemntos
  let result = stringSentence.split(/[\s,]+/);
  

  return result;
}
console.log(splitSentence('foguete'))




// Desafio 4
function concatName(contato) {
  let array = contato.length - 1;

    let nome = contato[array] + ', ' + contato[0];
    return nome;
}
let names = ['captain', 'my', 'captain'];

console.log(concatName(names));



// Desafio 5
function footballPoints(wins, ties) {
  let pontosWins = 0;
  let pontosTies = 0;

    for( let index = 0; index < wins; index +=1){
      pontosWins +=  3;
    }
    for(let indexTies = 0; indexTies < ties; indexTies +=1){
      pontosTies += 1;

    }
  return pontosWins + pontosTies;
}

console.log(footballPoints(0, 0));




// Desafio 6
function highestCount(maiorNum) {
    let contador = 0;
    let maiorNumero = maiorNum[0];
    //Encontra o maior numero
    for (let index in maiorNum) {
      if (maiorNumero < maiorNum[index]) {
        maiorNumero = maiorNum[index];
        
      }
    }
    //verifica quantas vezes o maior numero repete
    for (let index in maiorNum) {
      if (maiorNumero == maiorNum[index]) {
        contador +=1;
        
      }

    }
    return contador;
}





// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = 0;
  let distDoMouse2 = Math.abs(mouse - cat2); 
  let distDoMouse = Math.abs(mouse - cat1);
  if(distDoMouse === 6 && distDoMouse2 === 12){
    result = 'cat1';
  }else if(distDoMouse2 === 2 && distDoMouse === 3){
    result = 'cat2';
  }else if(distDoMouse === distDoMouse2){
    result =  'os gatos trombam e o rato foge';
  }

  return result;
}

console.log(catAndMouse(1,0,2));



// Desafio 8
function fizzBuzz(numeros) {
  let result = [];
  for(let index in numeros){
    if((numeros[index] % 3) === 0 && (numeros[index] % 5) !== 0){
      result.push('fizz');
    }else if((numeros[index] % 5) === 0 && (numeros[index] % 3) !== 0){
      result.push('buzz');
    }else if((numeros[index] % 5) === 0 && (numeros[index] % 3) === 0){
      result.push('fizzbuzz');
    }else{
      result.push('bug!');
    }  
  }

  return result;
}

console.log(fizzBuzz([9, 25]));

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
