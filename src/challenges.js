// Desafio 1
function compareTrue() {

}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence() {
//   let string = '';
//   let str = string.split(' '); {
//     return str
}


// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
    if ((wins * 3) + (ties * 1))
    return wins + ties
  }

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  let num= [2, 15, 7, 9, 45];

for (index = 0; i <= num.length; index+=1) {

if  (index % 3 === 0) {
  console.log("fizz");
  
} else if (index % 5 === 0) {
    console.log("buzz");
    
} else if (index % 3 === 0 && index % 5 === 0) {
    console.log("fizzBuzz");
    
    } else if (index % 3 !== 0 && index % 5 !== 0){
      
   console.log("bug");
   
   } else {
     console.log(i);
     }
     return fizzBuzz();
};

// Desafio 9
function encode(string) {
return string.replace(/a/g, 1)
             .replace(/e/g, 2)
             .replace(/i/g, 3)
             .replace(/o/g, 4)
             .replace(/u/g, 5);
}

function decode(string) {
return string.replace(/1/g, 'a')
             .replace(/2/g, 'e')
             .replace(/3/g, 'i')
             .replace(/4/g, 'o')
             .replace(/5/g, 'u');
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