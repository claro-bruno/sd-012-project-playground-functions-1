// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) {
    return 'Vazio!';
  }
  techs.sort()
  let listaVazia = [];
  for (let index = 0; index < techs.length; index += 1) {
    let object = {
      tech: techs[index],
      name: name,
    }
    listaVazia[index] = object;
  };
  return listaVazia;
};


// Desafio 11
function generatePhoneNumber(phNumber) {

  //verifica se é diferente de 11
  if (phNumber.length !== 11) {
    return "Array com tamanho incorreto.";
  }

  //verifica se é menor que 0 ou maior que 9
  for (let key in phNumber){
    if (phNumber[key] < 0 || phNumber[key] > 9){
      return "não é possível gerar um número de telefone com esses valores";
    } 
  }

  //verifica se o valor se repete 3 vezes ou mais
  for (let index = 0; index < phNumber.length; index += 1){
    let numDeRepeticoes = 0;
    for (let index2 = 0; index2 < phNumber.length; index2 += 1){
      if (phNumber[index] === phNumber[index2]){
        numDeRepeticoes += 1;
      }
    }
  if (numDeRepeticoes >= 3){
    return "não é possível gerar um número de telefone com esses valores";
  }
  }


  return `(${phNumber[0]}${phNumber[1]}) ${phNumber[2]}${phNumber[3]}${phNumber[4]}${phNumber[5]}${phNumber[6]}-${phNumber[7]}${phNumber[8]}${phNumber[9]}${phNumber[10]}`
  

}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
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
