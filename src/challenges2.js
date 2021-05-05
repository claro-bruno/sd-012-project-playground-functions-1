// Desafio 10
function techList(arrayTech, name) {
  arrayTech.sort();
  let arrayObj = [];
  for (let index = 0; index < arrayTech.length; index += 1) {
    let obj = {
      tech: arrayTech[index],
      name: name,
    };
    arrayObj.push(obj);
  }
  if (arrayTech.length === 5) {
    return arrayObj;
  } else {
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(numbersArray) {
  let menorZero = 0;
  let maiorNove = 0;
  let somaNoves = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] < 0) menorZero += 1;
    else if (numbersArray[index] > 9) maiorNove += 1;
    else if (numbersArray[index] == 9) somaNoves += 1;
  }
  if (numbersArray.length > 11) {
    return "Array com tamanho incorreto.";
  } else if (menorZero > 0 || maiorNove > 0 || somaNoves > 3) {
    return "não é possível gerar um número de telefone com esses valores";
  } else {
    return `(${numbersArray[0]}${numbersArray[1]})${numbersArray[2]}${numbersArray[3]}${numbersArray[4]}${numbersArray[5]}${numbersArray[6]}-${numbersArray[7]}${numbersArray[8]}${numbersArray[9]}${numbersArray[10]}`
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
