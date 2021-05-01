// Desafio 10
function techList(tech, name) {
  let error = 'Vazio!';
  if (tech.length !== 0) {
    tech = tech.sort();
  } else {
    return error;
  }
  let array = [];
  for (let indice = 0; indice < tech.length; indice += 1) {
    let obj = {};
    obj.tech = tech[indice];
    obj.name = name;
    array.push(obj);
  }
  let orden = array;
  return orden;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  let repeatNumber = 0;
  if(phoneNumber.length > 11) {
    return 'Array com tamanho incorreto.';
  }
  let verifiedNumber = [];
  for (let index = 0; index < phoneNumber.length; index += 1) {
    verifiedNumber = phoneNumber[index];
    for (let index2 = 0; index2 < phoneNumber.length; index2 += 1) {
      if(phoneNumber[index2] === verifiedNumber) {
        repeatNumber += 1
      } 
      if (repeatNumber >= 3 || verifiedNumber < 0 || verifiedNumber > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    repeatNumber = 0;
  }
  let formatedNumber = phoneNumber.join('')
  formatedNumber = formatedNumber.replace(/(\d{2})?(\d{5})?(\d{4})/, "($1) $2-$3")
  return formatedNumber;
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
