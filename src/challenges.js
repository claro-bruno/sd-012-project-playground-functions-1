// Desafio 1
function compareTrue(valor1,valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true)
  return true
  else
  return false
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui

let area = (base * altura)/2;
return area;

}


// Desafio 3
function splitSentence(primeiroValor) {
  // seu código aqui
return primeiroValor.split(' ');

}

// Desafio 4
function concatName(sentenca) {
  // seu código aqui
  
  let resultado = sentenca[sentenca.length-1]+ ", " + sentenca[0];

  return resultado;
}


// Desafio 5
function footballPoints(wins,ties,) {
  // seu código aqui
  let countWin = 0;
  let countTies = 0;
  for(let index = 0; index < wins; index+= 1){
    countWin+=3;
  }
  for(let index = 0; index < ties; index+= 1){
    countTies+=1;
  }
  return countWin + countTies;

}


// Desafio 6
function highestCount(vetor) {
  // seu código aqui

  let numMaior = Math.max(...vetor);
  let count = 0;
for(let index = 0; index < vetor.length;index+=1){
  if(numMaior == vetor[index]){
    count+=1;
  }
}
return count;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

if(Math.abs(cat1-mouse)<Math.abs(cat2-mouse)){
  return 'cat1';
}else if(Math.abs(cat2-mouse)<Math.abs(cat1-mouse)){
  return 'cat2';
}else
return 'os gatos trombam e o rato foge';
}



// Desafio 8
function fizzBuzz(vetor) {
  // seu código aqui
  let resultado = [];
  for(let each in vetor){
    if(vetor[each] % 3 == 0 || vetor[each] % 5 == 0){
        if(vetor[each] % 3 == 0 && vetor[each] % 5 == 0 ){
        resultado.push('fizzBuzz')
        }else if ( vetor[each] % 3 == 0){
            resultado.push('fizz')
        } else if(vetor[each] % 5 == 0){
          resultado.push('buzz')
        } 
  } else if(vetor[each] % 3 != 0 && vetor[each] % 5 != 0){
    resultado.push('bug!')
  }
  }
  return resultado
}

// Desafio 9
function encode(vogais) {
  // seu código aqui
  let resultado= [];
  for(let each in vogais){
    

    
      switch(vogais.charAt(each)){
        case 'a':
          resultado.push('1');
          break;
        case 'e':
          resultado.push('2');;
          break;
        case 'i':
          resultado.push('3');;
          break;
        case 'o':
          resultado.push('4');;
          break;
          case 'u':
            resultado.push('5');;
            break;
        default:
          resultado.push(vogais.charAt(each));;
      }
    
   } 
  return resultado.join('');
}

function decode(letras) {
  // seu código aqui
  let resultado= [];
  for(let each in letras){
    
      switch(letras.charAt(each)){
        case '1':
          resultado.push('a');
          break;
        case '2':
          resultado.push('e');;
          break;
        case '3':
          resultado.push('i');;
          break;
        case '4':
          resultado.push('o');;
          break;
          case '5':
            resultado.push('u');;
            break;
        default:
          resultado.push(letras.charAt(each));;
      }
    
   } 
  return resultado.join('');
}
function techList(vetor,name){
  vetor.sort()
  let obj = {};
  for(let each in vetor){
  
  obj ={
    tech: vetor[each],
    nome: name
  }
  console.log(obj)
 
}
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
