// Desafio 10
function techList(tecnologia, name) {
  // seu código aqui
  if (tecnologia.length === 0) {
    return 'Vazio!';
  }

  let sortList = tecnologia.sort();
  let outputObject = [];

  for (let index = 0; index < sortList.length; index += 1) {
    let object = {
      tech: sortList[index],
      name: name,
    };
    outputObject.push(object);
  }
  return outputObject;
}

// Desafio 11
function generatePhoneNumber(telefone) {
  // seu código aqui
  if (telefone.length != 11) {
    return 'Array com tamanho incorreto.';
  }

  let repeatNumber = telefone;

  for (let index = 0; index < telefone.length; index += 1) {
    let contador = 0;
    for (let index2 = 0; index2 < repeatNumber.length; index2 += 1) {
      if (telefone[index] === repeatNumber [index2]) {
        contador += 1;
      }
      if (contador >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    if (telefone[index] < 0 || telefone[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let outputNumber = '(' + repeatNumber[0] + repeatNumber[1] + ')' + ' ' + repeatNumber [2] + repeatNumber [3] + repeatNumber [4] + repeatNumber [5] + '-' +  repeatNumber [6] + repeatNumber[7] + repeatNumber[8] + repeatNumber[9] + repeatNumber[10];

  return outputNumber;
}

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
