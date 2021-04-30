// Desafio 1
function compareTrue(bool1,bool2) {
  // seu código aqui
 if (bool1 === true && bool2 === true ) {
   return true
  }
  else {
    return false;
  }
};
// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  return (base * height)/ 2
};
// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  return phrase.split(' ')
};
// Desafio 4
function concatName(string) {
  // seu código aqui
  return `${string[string.length -1]}, ${string[0]}`;
};
// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let victory = wins * 3
  let empate = ties
  let pontos = empate + victory
  return pontos
};
// Desafio 6
function highestCount(array1) {
  // seu código aqui
  let maiorNum = array1[0];
  let Count = 1;
  for(let index = 1; index < array1.length; index += 1){
    if(array1[index] > maiorNum){
      maiorNum = array1[index];
      Count = 1;
    }
    else if(array1[index] === maiorNum){
     Count += 1;
    }
  }
  return Count;
};
// Desafio 7
function catAndMouse(mouse,cat1,cat2){
  //seu codigo aqui
  function distanciaratão(rato,gato){
    let rangeCatMouse = rato - gato
    if (rangeCatMouse < 0 ) {
      rangeCatMouse = gato - rato

    }
    return rangeCatMouse
  }
  let rangeCat1 = distanciaratão(mouse, cat1)
  let rangeCat2 = distanciaratão(mouse, cat2)
  let string = ' '
  if (rangeCat1 < rangeCat2){
    string = 'cat1'
  }else if (rangeCat1 > rangeCat2) {
    string = 'cat2'
  }else if (rangeCat1 === rangeCat2) {
    string = 'os gatos trombam e o rato foge'
  }
  return string
}
// Desafio 8
function fizzBuzz(arrey3) {
  // seu código aqui
  let array_3 = [];
  for (let index = 0; index < arrey3.length; index += 1) {
    array_3[index] = '';
    if ((arrey3[index] % 3) === 0) {
      array_3[index] += 'fizz';
    } 
    if ((arrey3[index] % 5) === 0) {
      array_3[index] += 'buzz';
    } 
    if ((arrey3[index] % 5) !== 0 && (arrey3[index] % 3) !== 0) {
      array_3[index] += 'bug!';
    }
  }

  return array_3;
};
// Desafio 9
function encode(string) {
  let text = string;
  text = text.replace(/a/g, '1');
  text = text.replace(/e/g, '2');
  text = text.replace(/i/g, '3');
  text = text.replace(/o/g, '4');
  text = text.replace(/u/g, '5');
  return text;
};
function decode(string) {
  let text = string;
  text = text.replace(/1/g, 'a');
  text = text.replace(/2/g, 'e');
  text = text.replace(/3/g, 'i');
  text = text.replace(/4/g, 'o');
  text = text.replace(/5/g, 'u');
  return text;
  // seu código aqui
};

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
