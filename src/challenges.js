// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
  if(a === true && b == true){
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
return (base * altura) / 2;
}

// Desafio 3
function splitSentence(separacao) {
  // seu código aqui
  return separacao.split (' ');
}

// Desafio 4
function concatName(nomes) {
  // seu código aqui
  let primeiroPosicao = nomes[0]
  let ultimaPosicao = nomes[nomes.length - 1]
  return ultimaPosicao + ', ' + primeiroPosicao;

}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties 

}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  // Referencia : bruno-yamamoto
  let maior = Math.max.apply(null, arrayNumbers);
  let counter = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === greater) {
      maior += 1;
    }
  }
  return maior;
}
 

// Desafio 7
function catAndMouse(mouse, cat1, cat2){
  // seu código aqui
  //referencia : alice-gonçalves
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);
  
  if( distancia1 < distancia2){
    return 'cat1';
  } else if (distancia1 > distancia2) {
    return 'cat2';
  } else if (distancia1 === distancia2) {
    return 'os gatos trombam e o rato foge';
  };
};

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let lista = []
  for(let index = 0; index < numeros.length; index += 1){
    if(numeros[index] % 3 === 0 && numeros[index] % 5 === 0){
      lista.push('fizzBuzz')
    } else if (numeros[index] % 3 === 0){
      lista.push('fizz')
    } else if (numeros[index] % 5 === 0){
      lista.push('buzz')
    } else if (numeros[index] % 3 != 0 && numeros[index] % 5 != 0) {
      lista.push('bug!')
    };
  };
return lista
};


// Desafio 9
function encode(letras) {
  // seu código aqui
  // referencia : Emerson-MM-Filho
  let novaPalavra = ''
  for(let index = 0; index < letras.length; index += 1){
    switch (letras[index]) {
      case 'a':
        novaPalavra += 1;
        break;

      case 'e':
        novaPalavra += 2;
        break;

      case 'i':
        novaPalavra += 3;
        break;

      case 'o':
        novaPalavra += 4;
        break;

      case 'u':
        novaPalavra += 5;
        break;

      default:
        novaPalavra += letras[index];
        break;
    }
  
  }
 return novaPalavra
}


function decode(letras) {
  // seu código aqui
  //referencia : Emerson-MM-Filho
  let novaPalavra = ''

  for(let index = 0; index < letras.length; index += 1){
    switch (letras[index]){
      case '1':
        novaPalavra += 'a';
        break;

        case '2':
        novaPalavra += 'e';
        break;

        case '3':
        novaPalavra += 'i';
        break;

        case '4':
        novaPalavra += 'o';
        break;

        case '5':
        novaPalavra += 'u';
        break;

        default:
          novaPalavra += letras[index];
          break;
    }
    
  }
  return novaPalavra 
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
