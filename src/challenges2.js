// Desafio 10
function techList(tech, nome) {
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
console.log(generatePhoneNumber([]));
function formatNumberPhone(indexArray, value) {
  let retornoFormato = '';
  switch (indexArray) {
  case 0:
    retornoFormato = `(${value}`;
    break;
  case 1:
    retornoFormato = `${value})`;
    break;
  case 6:
    retornoFormato = `${value}-`;
    break;
  default:
    retornoFormato = `${value}`;
    break;
  }
  return retornoFormato;
}

function countNumber(arrayTelefone, value) {
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
function triangleCheck(lineA, lineB, lineC) {

  let checklineA = lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC) ?  true : false;
    let checklineB = lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC) ?  true : false;
    let checklineC = lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB) ?  true : false;

    return checklineA === true || checklineB === true || checklineC === true ? true: false;

}

// Desafio 13
function hydrate(stringRecebida) {
  let ct = 0;
  let patt1 = /[1-9]/g;
  let result = stringRecebida.match(patt1);
  for (let indexSecond = 0; indexSecond < result.length; indexSecond += 1) {
    ct += Number(result[indexSecond]);
  }

  return ct === 1 ? `${ct} copo de água` : ct > 0 && ct > 1 && `${ct} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
  checkErrorPhone,
  countNumber,
  formatNumberPhone,
};
