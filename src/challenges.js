// Desafio 1
function compareTrue(ParametroA, ParametroB) {
// seu código aqui
if(ParametroA === true && ParametroB === true){
  return true;
}else{
  return false;
}
}
//Teste da função
let result = compareTrue(true,true)
//console.log(result);

// Desafio 2
function calcArea(base,heigth) {
//seu código aqui
//base = 51;
//heigth = 1;
calcArea = (base * heigth)/2;
return calcArea;
}
//Teste de função
let result = calcArea(2,4);
//console.log(result);

// Desafio 3
function splitSentence(string) {
// seu código aqui

return string.split(' ');
}
//Teste de função
//console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
// seu código aqui
let firstName = array[0];
let lastName = array[(array.length -1)];
let result = lastName + ', ' + firstName;
return result;
}
//Teste de função
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
//console.log(concatName(['foguete', 'não', 'tem', 'ré']));
//console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  totalDePontos =  wins * 3 + ties;
  return totalDePontos;
}
//console.log(footballPoints(0,0))

// Desafio 6
function highestCount(array) {
let repeat = 0;
let highNumber = 0;
for(accountant = 0; accountant<array.length; accountant+=1){
  if (array[accountant] > highNumber){
    highNumber = array[accountant]
  }
}
for(accountant = 0; accountant < array.length; accountant+=1){
  if(highNumber === array[accountant]){
    repeat += 1
  }
}
return repeat;
}
//console.log(highestCount([9,1,2,3,9,5,7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let distanciaCat1 = Math.abs(cat1 - mouse)
let distanciaCat2 = Math.abs(cat2 - mouse)

  if(distanciaCat1 < distanciaCat2){
    return 'cat1';
        
  } else if(distanciaCat2 < distanciaCat1) {
    return 'cat2';
        
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
 // console.log(catAndMouse(0,3,3));

// Desafio 8
function fizzBuzz(inArray) {
  let outArray = [];

for(let index = 0; index < inArray.length; index += 1){
  if(inArray[index] % 3 === 0 & inArray[index] % 5 ===0){
    outArray.push('fizzBuzz');
    
  }
  else if( inArray[index] % 5 === 0){
   outArray.push('buzz');
    
  }
  else if(inArray[index] % 3 === 0 ){
    outArray.push('fizz');
  }
  else
  outArray.push('bug!');
}
return outArray;
}
//console.log(fizzBuzz([7, 15]));


// Desafio 9
function encode() {
/*let word = string1.split('');

 for(let index = 0; index < word.length; index += 1){
  if(word[index] === 'a'){
    word[index] = '1';
  }else if(word[index] === 'e'){
    word[index] = '2';
  }else if(word[index] === 'i'){
    word[index] = '3'; 
  }else if(word[index] === 'o'){
    word[index] = '4';
  }else if(word[index] === 'u'){
    word[index] = '5';
  }
  
  }
}

return word;
 
}
console.log(encode('aeiou'));
*/
}
function decode() {
/*let number = 0;
number = string2.split('');

 for(index = 0; index < number.length; index += 1){
  if(number[index] === '1'){
    number[0] = 'a';
  }else if(number[index] === '2'){
    number[1] = 'e';
  }else if(number[index] === '3'){
    number[2] = 'i'; 
  }else if(number[index] === '4'){
    number[3] = 'o';
  }else if(number[index] === '5'){
    number[4] = 'u';
  }
  
    
  }

}
return number;
}
console.log(decode('1234567'));
//usar o metodo join para juntar. */
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

