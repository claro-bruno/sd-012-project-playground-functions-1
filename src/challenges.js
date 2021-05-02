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
function fizzBuzz(listNumbers) {
  // seu código aqui
  for(let index in listNumbers) {
      let valor = listNumbers[index]
      if((valor % 3) === 0) {
        listNumbers[index] = 'fizz'
      };
      if((valor % 5) === 0) {
          listNumbers[index] = 'buzz'
      };
      if((valor % 3) === 0 && (valor % 5 === 0)) {
        listNumbers[index] = 'fizzBuzz'
      };
      if((valor % 3) != 0 && (valor % 5) != 0) {
        listNumbers[index] = 'bug!'
      };
      
  };
  return listNumbers;  
}
// Desafio 9
function encode(string) {
  // seu código aqui
let splitada = string.split('');
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
    };
};
return splitada.join('');
}
function decode(string) {
  // seu código aqui
  let decodifica = string.split('');
  for(let verifica in decodifica){
    if (decodifica[verifica] === '1') {
      decodifica[verifica] = 'a';
    }
    if (decodifica[verifica] === '2') {
      decodifica[verifica] = 'e';
    }
    if (decodifica[verifica] === '3') {
      decodifica[verifica] = 'i';
    }
    if (decodifica[verifica] === '4') {
      decodifica[verifica] = 'o';
    }
    if (decodifica[verifica] === '5') {
      decodifica[verifica] = 'u';
    }
  }
return decodifica.join('');
}
// Desafio 10
function techList(tecno, name){
    
  let objectList = [];
  
      if(tecno.length === 0){
          return 'Vazio!'            
      } 
      else {
        for(let index = 0; index < tecno.length ; index += 1){
          objectList[index]  = { 
            tech: tecno[index], 
            name: name
          };       
        };
      };
  
  return objectList.sort(function(a, b){
      if(a.tech < b.tech) return -1;
      if(a.tech > a.tech) return 1;
      });
}
console.log(techList([], "Lucas"));
// Desafio 11
function generatePhoneNumber(numbers){
  let contRepeat = 0;
  let testNumbers = true;
  let numberValid = [];
  if(numbers.length < 11){
    return 'Array com tamanho incorreto.'
    testNumbers = false;
  };
  for(let index of numbers){
      let valor = index;
      if (index < 0) {
      return 'não é possivel gerar um numero de telefone com esses valores.1'
      testNumbers = false;
   } else if (index > 9){
      return "não é possivel gerar um numero de telefone com esses valores.2"
      testNumbers = false;
   } else if (valor === numbers[index] + 1) {
      return "não é possivel gerar um numero de telefone com esses valores.3"
      contRepeat += 1;    
   }  
  };
  if(testNumbers === true && contRepeat < 3){
    for(let indexTwo = 0; indexTwo < 14; indexTwo += 1){
      if(indexTwo === 0){
        numberValid.push = '(';
      }
      if (indexTwo === 3) {
        numberValid.push = ')';
      }
      if (indexTwo === 4) {
        numberValid.push = ' ';
      }
      if (indexTwo === 10){
        numberValid.push = '-';
      }
      numberValid.push = numbers[indexTwo]
    }    
  }
  return numberValid

}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
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
