// Desafio 10
function techList(array, string) {
  let list = [];
  let sortedArray = array.sort();
  for (let key in array) {
    list[key] = {
      tech: sortedArray[key],
      name: string,
    };
  }
  if (array.length === 0) {
    list = 'Vazio!';
  }
  return list;
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto';
  }
  let phoneNumber = '(';
  for (let index = 0; index < array.length; index += 1) {
    let contador = 0;
    if (array[index] < 0 || array[index]> 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
    phoneNumber += array[index];
    if (index === 1) {
      phoneNumber += ') ';
    }
    if (index === 6) {
      phoneNumber += '-';
    }
    for (let index2 = 0; index2 < array.length; index2 +=1) {
      if (array[index] === array[index2]) {
        contador += 1;
        if (contador >= 3) {
          return 'não é possível gerar um número de telefone com esses valores'
        }
      }
    }
  }
  return phoneNumber;
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
