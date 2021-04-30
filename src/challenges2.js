const { concatName } = require("./challenges");

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(n) {
  // let outputNumber = [];
  let contador = 0;
  let number = [];

  for(let i = 0; i < n.length; i++);{
      if(n[i] !== number){
        contador++;
        number.push(n[i]);
        console.log(number);
        console.log(contador);
      }else{
        console.log("deu ruim")
      }
    // if(n.length < 10 && n.length >10);{
    //     outputNumber = "Array com tamanho incorreto.";
    // }else{
    //   outputNumber = "("+n[0]+n[1]+")"+" "+n[2]+n[3]+n[4]+n[5]+"-"+n[6]+n[7]+n[8]+n[9];
    // }    
    //  return outputNumber; 
}
let nu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
generatePhoneNumber(nu);
console.log(result);


// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};