// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(telefone) {
  let string = '';
  let array = [];
  let contador = 0;
  //let verifica = 3;
  for (index = 0; index < telefone.length; index += 1){
    array.push(telefone[index]);
    if(telefone[index] < 0 || telefone[index] > 9){
      return 'não é possível gerar um número de telefone com esses valores'
    } /*else if (telefone[index] >= contador){
      contador = telefone[index];
    }
    for (indexVerify = 0; indexVerify < array.length; indexVerify += 1){
      if (array[indexVerify] === telefone[index]){
        contador += 1;
      }
    };
    return contador;*/
  };
  if (telefone.length < 12){
  let telefoneFinal = '(' + telefone[0] + telefone[1] + ')' + telefone[2] + telefone[3] + telefone[4] + telefone[5] + telefone[6] + '-' + telefone[7] + telefone[8] + telefone[9] + telefone[10];
  return telefoneFinal;
  } else if (telefone.length != 11){
    string = 'Array com tamanho incorreto.'
    return string;
  }
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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
