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
console.log(generatePhoneNumber([1, 5, 9, 9, 1, 6, 3, 1, 4, 0, 8]));
function countNumber(arrayTelefone,value) {
    let counter = 0;
    for(let index = 0; index< arrayTelefone.length; index += 1) {
        counter += arrayTelefone[index] === value ? 1 : 0;
    }
    return counter;
}
function generatePhoneNumber (arrayTelefone) {

    let phoneFormated = '';
    let errorMessage = '';
    let counter = 0;

    if(arrayTelefone.length === 11)
    {
        for(let index = 0; index < arrayTelefone.length; index+= 1)
        {
                counter = countNumber(arrayTelefone,arrayTelefone[index]);
                errorMessage = arrayTelefone[index] < 0 || arrayTelefone[index] > 9 || counter > 2 ? errorMessage = 'não é possível gerar um número de telefone com esses valores' : '';

                if(errorMessage.length > 0) {
                    break;
                } else {
                    phoneFormated += index === 0 ? `(${arrayTelefone[index]}` : index === 1 ? `${arrayTelefone[index]}) ` : index === 6 ? `${arrayTelefone[index]}-` : `${arrayTelefone[index]}`;

                }
        }
    }
    else
    {
        errorMessage = 'Array com tamanho incorreto.';
    }


    return errorMessage.length === 0 ? phoneFormated : errorMessage ;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
    let checklineA = lineA < (lineB+lineC) && lineA > Math.abs(lineB - lineC) ?  true: false;
    let checklineB = lineB < (lineA+lineC) && lineB > Math.abs(lineA - lineC) ?  true: false;
    let checklineC = lineC < (lineA+lineB) && lineC > Math.abs(lineA - lineB) ?  true: false;

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
};
