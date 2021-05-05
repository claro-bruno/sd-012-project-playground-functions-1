/* eslint-disable max-len */
/* eslint-disable sonarjs/no-collapsible-if */
/* eslint-disable eqeqeq */
/* eslint-disable radix */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */
/* eslint-disable complexity */
/* eslint-disable no-undef */
/* eslint-disable guard-for-in */
/* eslint-disable sonarjs/prefer-object-literal */
// Desafio 10
function techList(techName, personalName) {
  // seu código aqui
  let techNameArray = [];

  if (techNameArray[0] === undefined) {
    return 'Vazio!';
  }
  for (let key in techName.sort()) {
    let list = {};
    list.tech = techName[key];
    list.name = personalName;
    techNameArray.push(list);
  }
  return techNameArray;
}

// Desafio 11
function generatePhoneNumber(telephone) {
  // seu código aqui
  let repeatedValue = 0;
  let count = 0;

  for (let key of telephone) {
    let compareNumber = key;
    for (let key1 of telephone) {
      if (compareNumber === key1) {
        count += 1;
      }
    }
    if (count >= repeatedValue) {
      repeatedValue = count;
    }
    count = 0;
  }

  if (telephone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let key in telephone) {
    if (key < 0 || key > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  if (repeatedValue >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  telephone.splice(0, 0, '(');
  telephone.splice(3, 0, ')');
  telephone.splice(4, 0, ' ');
  telephone.splice(10, 0, '-');
  return telephone.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let compareLineA = (lineB - lineC);
  let compareLineB = (lineA - lineC);
  let compareLineC = (lineA - lineC);
  if (Math.abs(lineA) > Math.abs(compareLineA)) {
    if (lineA < (lineB + lineC)) {
      return true;
    }
  } else if (Math.abs(lineB) > Math.abs(compareLineB)) {
    if (lineB < (lineA + lineC)) {
      return true;
    }
  } else if (Math.abs(lineC) > Math.abs(compareLineC)) {
    if (lineC < (lineB + lineA)) {
      return true;
    }
  }
  return false;
}

// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  let numbers = [];
  for (let index = 0; index < drinks.length; index += 1) {
    if (drinks[index] == 1 || drinks[index] == 2 || drinks[index] == 3 || drinks[index] == 4 || drinks[index] == 5 || drinks[index] == 6 || drinks[index] == 7 || drinks[index] == 8 || drinks[index] == 9) {
      numbers.push(parseInt(drinks[index]));
    }
  }
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  if (total === 1) {
    return `${total} copo de água`;
  }
  return `${total} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
