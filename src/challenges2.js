// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(numero) {
  let numerotel = '(';
  if (numero.length != 11) {
    return 'Array com tamanho incorreto.';
  } else {
     let matrizAux = numero.sort();
     let repetiu = 0;
     for (posicao = 0; posicao < matrizAux.length; posicao += 1) {
       for (let index = 0; index < numero.length; index += 1) {
         if (numero[index] < 0 || numero[index] > 9 ) {
           return 'não é possível gerar um número de telefone com esses valores';
         } else
            if (matrizAux[posicao] === numero[index]) {
               repetiu += 1
            }
           if (repetiu >= 3 ) {
              return 'não é possível gerar um número de telefone com esses valores';
           }
        }
      }
      for (let index = 0; index < numero.length; index += 1) {
        if (index = 2) {
          numerotel += ')';
        } 
        numerotel += numero[index];
        if (index = 7) {
          numerotel += '-';
        } 
        numerotel += numero[index];
      }
    }
  return numerotel;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let resposta = false;
  if (linea > (lineb + linec)) {
    resposta = true;
  }

   /* é necessário que a medida de qualquer um dos lados seja 
   menor que a soma das medidas dos outros dois e 
   maior que o valor absoluto da diferença entre essas medidas.
} */

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
