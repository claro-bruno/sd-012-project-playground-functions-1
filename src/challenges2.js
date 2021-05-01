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
  if(phoneNumber.length > 11 || phoneNumber.length < 11) {
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
function triangleCheck(lineA, lineB, lineC) {
  let somaAB = lineA + lineB;
  let somaBC = lineB + lineC;
  let somaAC = lineA + lineC;
  let diferencaAB = Math.abs(lineB - lineC);
  let diferencaAC = Math.abs(lineA - lineC);
  let diferencaBC = Math.abs(lineB - lineC);

  if(lineA > somaBC || lineB > somaAC || lineC > somaAB) {
    return false;
  }
  if(lineA < diferencaBC || lineB < diferencaAC || lineC < diferencaAB) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(drinkBar) {
  let numberDrinks = drinkBar.replace(/\D/g, '');
  numberDrinks = numberDrinks.split('');
  let sumNumberDrinks = 0;
  for (let indice = 0; indice < numberDrinks.length; indice += 1) {
    sumNumberDrinks += parseInt(numberDrinks[indice]);
  } if(sumNumberDrinks === 1) {
      return  `${sumNumberDrinks} copo de água`
  } else {
      return `${sumNumberDrinks} copos de água`
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
