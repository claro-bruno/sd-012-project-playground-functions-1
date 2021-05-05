// Desafio 10
function techList(tech, nome) {
  // seu código aqui
  let objTech = [];
  if (tech.length > 0) {
    tech.sort();
    for (let key of tech) {
      objTech.push({
        tech: key,
        name: nome,
      });
    }
  }
  return objTech.length > 0 ? objTech : 'Vazio!';
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aquifunction countNumber(arrayTelefone, value) {
  let counter = 0;
  for (let index = 0; index < arrayTelefone.length; index += 1) {
    counter += arrayTelefone[index] === value ? 1 : 0;
  }
  return counter;
}
function checkErrorPhone(arrayTelefone, value) {
  let errorMessage = '';
  if (arrayTelefone.length !== 11) {
    errorMessage = 'Array com tamanho incorreto.';
  } else if (countNumber(arrayTelefone, value) > 2 || value < 0 || value > 9) {
    errorMessage = 'não é possível gerar um número de telefone com esses valores';
  }
  return errorMessage;
}
function generatePhoneNumber(arrayTelefone) {
  let phoneFormated = '';
  let mensagemErro = '';
  mensagemErro = checkErrorPhone(arrayTelefone, '');
  for (let index = 0; index < arrayTelefone.length; index += 1) {
    mensagemErro = checkErrorPhone(arrayTelefone, arrayTelefone[index]);
    if (mensagemErro.length > 0) {
      break;
    } else {
      phoneFormated += formatNumberPhone(index, arrayTelefone[index]);
    }
  }
  return mensagemErro.length === 0 ? phoneFormated : mensagemErro;
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
