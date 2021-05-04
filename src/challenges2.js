// Desafio 10
function techList(arrayTech, name) {
  // seu código aqui
  
  let listAnswer = [];

  arrayTech = arrayTech.sort();

  for (let key in arrayTech){
    let objects = {
      tech: arrayTech[key],
      name: name
    };
    listAnswer.push(objects);
  };
  if (arrayTech.length === 0) {
    return 'Vazio!'
  } else {  
    return listAnswer;
  }
}

// Desafio 11
function generatePhoneNumber(arrayPhone) {
  // seu código aqui

  let ddd = '';
  let prefixo = '';
  let sufixo = '';

  for (let index = 0; index < arrayPhone.length; index += 1) {
    if (arrayPhone.length !== 11) {
      return 'Array com tamanho incorreto.';
    }
    let equal = 0;
    for (let index2 = 0; index2 < arrayPhone.length; index2 += 1) {
      if (arrayPhone[index] === arrayPhone[index2]) {
        equal += 1;
      }
    }
    if (equal > 2 || arrayPhone[index] < 0 || arrayPhone[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else {
      if (index < 2) {
        ddd = ddd + arrayPhone[index];
      } else if (index >= 2 && index <= 6) {
        prefixo = prefixo + arrayPhone[index];
      } else {
        sufixo = sufixo + arrayPhone[index];
      }
    }
  }
  let phoneNumber = `(${ddd}) ${prefixo}-${sufixo}`;
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
