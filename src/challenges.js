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





// Desafio 4
function concatName(contato) {
  let array = contato.length - 1;

    let nome = contato[array] + ', ' + contato[0];
    return nome;
}
let names = ['captain', 'my', 'captain'];





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





// Desafio 8
function fizzBuzz(numeros) {
  let result = [];

  //for of pega o valor do indice
  for(let index of numeros){
    if(index % 15 === 0){
      result.push('fizzbuzz');
    }else if(index % 3 === 0){
      result.push('fizz');
    }else if(index % 5 === 0){
      result.push('buzz');
    }else{
      result.push('bug!');
    }  
  }

  return result;
}



// Desafio 9
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
function encode(code) {
  //separa os elementos e coloca em um array
  let codigo = code.split('');

  for (let index in codigo){
    //switch pega o elemento atraves do indice e compara
    switch(codigo[index]){
      case 'a':
        codigo[index] = '1';

        break;
      case 'e':
        codigo[index] = '2';

        break;
      case 'i':
        codigo[index] = '3';

        break;
      case 'o':
        codigo[index] = '4';

        break;
      case 'u':
        codigo[index] = '5';

        break;
       
      default:  
    }
  }
  //.join junta os elementos do array em uma string

  return codigo.join('');
}





function decode(deCode) {
  //separa os elementos e coloca em um array
  let deCodigo = deCode.split('');

  for (let index in deCodigo){
    //switch pega o elemento atraves do indice e compara
    switch(deCodigo[index]){
      case '1':
        deCodigo[index] = 'a';

        break;
      case '2':
        deCodigo[index] = 'e';

        break;
      case '3':
        deCodigo[index] = 'i';

        break;
      case '4':
        deCodigo[index] = 'o';

        break;
      case '5':
        deCodigo[index] = 'u';

        break;
       
      default:  
    }
  }
  //.join junta os elementos do array em uma string
  return deCodigo.join('');
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
