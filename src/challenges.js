// Desafio 1
function compareTrue(valor1, valor2) {
//   // seu código aqui
  let resultado;
 if (valor1 === true && valor2 === true){
    resultado = true;
 } else {
    resultado = false;
 }
  return (resultado);
};
// console.log(compareTrue(false,true));
// console.log(compareTrue(false,false));
// console.log(compareTrue(true,true));



// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) /2;
  return (area);
  }
  // console.log(calcArea(10,50));
  // console.log(calcArea(5,2));
  // console.log(calcArea(51,1));


// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let resultado = string.split([" "]);
  return (resultado);
};
  // console.log(splitSentence("Go Trybe"));
  // console.log(splitSentence("Vamo que Vamo"))

// Desafio 4
function concatName(concatarray) {
  // seu código aqui
  let firstArray = concatarray[0];
  let lastArray = concatarray[(concatarray.length) - 1];
  let resultado = '${lastArray}, ${firstArray}';
  // let resultado = [lastArray +', '+ firstArray];
  return (resultado);

};
// console.log(concatName(['Lucas','Cassiano','Ferraz','Paolillo']));
// console.log(concatName(['foguete', 'não', 'tem','ré']));
// console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let resultado = (wins*3) + (ties*1);
  return (resultado);
};
  // console.log (footballPoints(14,8))
  // console.log (footballPoints(1,2))
  // console.log (footballPoints(0,0))


// Desafio 6
function highestCount(highestNumber) {
  // seu código aqui
 let orderNumber = highestNumber.sort();
 let resultado = [];
 
 for (let index = 0; index < orderNumber.length; index += 1) {
   if (orderNumber[index] === orderNumber[(orderNumber.length - 1)]) {
     resultado.push(orderNumber[index]);
   } 
 }
 return (resultado.length);
};
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
// console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse() {
  // seu código aqui

}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

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
