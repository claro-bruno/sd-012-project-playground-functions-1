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
let phNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

function generatePhoneNumber(phNumber) {

  //verifica se é diferente de 11
  let difOuiguala11;

  if (phNumber.length !== 11) {
    difOuiguala11 = "Array com tamanho incorreto.";
  } else {
    difOuiguala11 = phNumber;
  };

  let menorOumaior;

  //verifica se é menor que 0 ou maior que 9
  for (let index = 0; index < difOuiguala11.length; index += 1) {
    if (difOuiguala11[index] < 0 || difOuiguala11[index] > 9) {
      menorOumaior = "não é possível gerar um número de telefone com esses valores";
    } else {
      menorOumaior = ok11;
    }
  }

  //verifica se o número se repete 3 vezes
  for (let index2 = 0; index2 < menorOumaior.length; index2 += 1) {
    let seRepete3 = 0;
    for (let index3 = 0; index3 < menorOumaior.length; index3 += 1) {
      if (menorOumaior[index2] === menorOumaior[index3]) {
        seRepete3 += 1;
      }
    }
  }

  if (verificador > 3) {
    ok11 = "não é possível gerar um número de telefone com esses valores";
  } else {
    ok11 = ok11;
  }

};

console.log(generatePhoneNumber(phNumber));






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
