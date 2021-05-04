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
  // seu código aqui
  function countNumber(arrayTelefone, value) {
    let counter = 0;
    for (let index = 0; index < arrayTelefone.length; index += 1) {
      counter += arrayTelefone[index] === value ? 1 : 0;
    }
    return counter;
  }
  function checkErrorPhone(celuloiros, value) {
    let erro = '';
    if (celuloiros.length !== 11) {
      erro = 'Array com tamanho incorreto.';
    } else if (countNumber(celuloiros, value) > 2 || value < 0 || value > 9) {
      erro = 'não é possível gerar um número de telefone com esses valores';
    }
    return erro;
  }
  function generatePhoneNumber(celuloiros) {
    let zapDaPitanga = '';
    let erro = '';
    erro = checkErrorPhone(celuloiros, '');
    for (let index = 0; index < celuloiros.length; index += 1) {
      erro = checkErrorPhone(celuloiros, celuloiros[index]);
      if (erro.length > 0) {
        break;
      } else {
        zapDaPitanga += formatNumberPhone(index, celuloiros[index]);
      }
    }
    return erro.length === 0 ? zapDaPitanga : erro;
  }
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
