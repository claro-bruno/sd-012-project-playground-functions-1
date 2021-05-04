// Desafio 10
function techList(nomeTech, name) {
let code = []; 
nomeTech.sort();

  if (nomeTech.length > 4) {
    for (let index in nomeTech){
    code.push ({ tech: nomeTech[index],
    name: name});
    }
      return code;
  } else {
      return ('Vazio!');
  }
}

// Desafio 11
function generatePhoneNumber(numero) {
  let repetidos = 0;
  let valRepetidos = 0;

  for (let i = 0; i < numero.length; i += 1) {
    for (let j = 0; j < numero.length; j += 1){
      if (numero[i] === numero[j]) {
        repetidos += 1;
      }
    }
        if (repetidos > valRepetidos) {
         valRepetidos = repetidos;
      } repetidos = 0;
  }
  if (numero.length < 11 || numero.length > 11){
    return "Array com tamanho incorreto.";
  }
  for (let index = 0; index < numero.length; index += 1){
    if (numero[index] < 0 || numero[index] > 9  || valRepetidos > 2) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  let pC = [];
  for (let index1 = 0; index1 < numero.length ; index1 += 1){
    pC.push(numero[index1]);
  }
    verifica = ( '(' + pC[0] + pC[1] + ')' + ' ' + pC[2] + pC[3] + pC[4] + pC[5] + pC[6] + '-' + pC[7] + pC[8] + pC[9] + pC[10]);
    return verifica;
 };

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumAB = Math.abs(lineA + lineB);
  let sumAC = Math.abs(lineA + lineC);
  let sumCB = Math.abs(lineC + lineB);
  let boolean = false;
  if (lineA < sumCB && lineB < sumAC && lineC < sumAB) {
    boolean = true
    return boolean;
  }
  return boolean;
}

// Desafio 13
function hydrate(bebida) {
  let cont = /\d+/g;
  let contador = 0;
  let agua = bebida.match(cont);
 
   for (let index = 0; index < agua.length; index += 1){
   contador += parseInt(agua[index]);
   } if(contador > 2) {
     return (contador + " copos de água");
     }
      else if (contador === 1){
       return (contador + " copo de água");
      }
 };

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};