// Desafio 1 
let retorno;
function compareTrue(valor1, valor2) {
  if (valor1 == true && valor2 == true) {
    retorno = true;
  }
  else {
    retorno = false;
  }
return retorno;
}
//console.log(compareTrue(false, true));




// Desafio 2 
let resposta;
function calcArea(base, height) {
 resposta =(base * height) / 2;
 return resposta;
}
//console.log(calcArea(10,50));
//console.log(calcArea(5,2));
//console.log(calcArea(51,1));



// Desafio 3
let results = [];
function splitSentence(frase) {
results = frase.split(' ', 20);
return results;
}
//console.log(splitSentence('vamos que vamos'))



// Desafio 4  
let result = [ ];
function concatName (nome) {
  result = nome[nome.length - 1] + ', ' + nome[0];  
  return result;
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
//console.log(concatName(['foguete', 'não', 'tem', 'ré']));
//console.log(concatName(['captain', 'my', 'captain']));



// Desafio 5
let pontos;
function footballPoints(wins,ties) {
  pontos = (wins * 3) + ties; 
  return pontos;
}
//console.log(footballPoints(14,8));
//console.log(footballPoints(1,2));
//console.log(footballPoints(0,0));



// Desafio 6
let resultados = 0;
function highestCount(repeticao) {
  let a = repeticao.sort();
  let b = a[a.length - 1]
for(index = 0; index < a.length; index += 1)
    if (a[index] === b){
    resultados = resultados + 1;
    } else { 
      resultados = resultados;
    }
  return resultados;
}
//console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
//console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
//console.log(highestCount([0, 0, 0]));



// Desafio 7
let resulta;
let posicaoCat1;
let posicaoCat2;
function catAndMouse(mouse, cat1, cat2) {
  posicaoCat1 = (mouse - cat1) * (mouse - cat1);
  posicaoCat2 = (mouse - cat2) * (mouse - cat2);
  if(posicaoCat1 < posicaoCat2){
    resulta = 'cat1';
    }
  else if(posicaoCat2 < posicaoCat1) {
    resulta = 'cat2';
    }
  else {
    resulta = 'os gatos trombam e o rato foge'
    }
return resulta;
}
//console.log(catAndMouse(5,1,2));
//console.log(catAndMouse(5,6,2));
//console.log(catAndMouse(3,1,5));



// Desafio 8
let resultad = [];
let string;
function fizzBuzz(num) {
  for(let i = 0; i < num.length; i += 1) {
    if(num[i] % 3 == 0 && num[i] % 5 != 0) {
      string = 'fizz';
    } else if(num[i] % 5 == 0 && num[i] % 3 != 0) {
      string = 'buzz';
    } else if(num[i] % 3 == 0 && num[i] % 5 == 0) {
      string = 'fizzBuzz';
    } else {
      string = 'bug!';
    }
    resultad[i] = string;
  }
return resultad;
}
//console.log(fizzBuzz([9, 25]));



// Desafio 9
let resultou = [];
let valor;
function encode(vogal) {
  
   for(index = 0; index < vogal.length; index += 1) {
     switch(vogal[index]){
       case 'a':
       resultou[index] = 1;
       break;
       case 'e':
       resultou[index] = 2;
       break;
       case 'i':
       resultou[index] = 3;
       break;
       case 'o':
       resultou[index] = 4;
       break;
       case 'u':
       resultou[index] = 5;
       break;
       default:
       resultou[index] = vogal[index];
      }
      valor = resultou.join('');
   }
   return valor;
}
//console.log(encode('How are you today?'));



let resto = [];
let valores;
function decode(numero) {
  
   for(index = 0; index < numero.length; index += 1) {
     switch(numero[index]){
       case '1':
       resto[index] = ('a');
       break;
       case '2':
       resto[index] = ('e');
       break;
       case '3':
       resto[index] = ('i');
       break;
       case '4':
       resto[index] = ('o');
       break;
       case '5':
       resto[index] = ('u');
       break;
       default:
       resto[index] = numero[index];
      }
      valores = resto.join('');
   }
   return valores;
}
//console.log(decode('h2ll4'));



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
