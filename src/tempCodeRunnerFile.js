// Desafio 11
function generatePhoneNumber(numero) {
  let repetidos = 0;
  let boolean = false

  for (let i = 0; i < numero.length; i += 1) {
    for (let j = 0; j < numero.length; j += 1){
      if (numero[i] === numero[j]) {
        repetidos += 1;
      }
    }
        if (repetidos >= 19) {
         boolean = true;
      }
  }
  if (numero.length < 11 || numero.length > 11){
    return "Array com tamanho incorreto.";
  }
  for (let index = 0; index < numero.length; index += 1){
    if (numero[index] < 0 || numero[index] > 9  || boolean === true) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  let pC = [];
  for (let index1 = 0; index1 < numero.length ; index1 += 1){
    pC.push(numero[index1]);
  }
    verifica = ( '(' + pC[0] + pC[1] + ')' + ' ' + pC[2] + pC[3] + pC[4] + pC[5] + pC[6] + '-' + pC[7] + pC[8] + pC[9] + pC[10]);
    return verifica;
 }
console.log(generatePhoneNumber([5, 2, 8, 1, 5, 3, 7, 2, 7, 9, 0]))