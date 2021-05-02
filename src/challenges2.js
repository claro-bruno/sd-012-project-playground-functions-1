// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) {
    return 'Vazio!';
  };
  let outputArray = [];
  for (let index = 0; index < techs.length; index += 1) {
    outputArray.push(new Object());
    outputArray[index].tech = techs[index];
    outputArray[index].name = name;
  }

  //  essa parte de ordenar foi feita lendo os seguintes artigos:
  //  https://reactgo.com/javascript-sort-objects-alphabetically/
  //  https://www.w3docs.com/snippets/javascript/how-to-sort-array-alphabetically-in-javascript.html

  let sortedOutputArray = outputArray.sort(function (a, b) {
    if (a.tech < b.tech) {
      return -1;
    }
    if (a.tech > b.tech) {
      return 1;
    }
    return 0;
  });

  return sortedOutputArray;
}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  // verificar se é diferente de 11:
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  // verificar se tem numero menor q 0:
  for (let index in phoneNumber) {
    if (phoneNumber[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  // verificar numero de repeticoes:
  let repeats = 0;
  let mostRepeat = 0;
  for (let index in phoneNumber) {
    for (let indexNumber = 0; indexNumber < phoneNumber.length; indexNumber += 1) {
      if (phoneNumber[index] === phoneNumber[indexNumber]) {
        repeats += 1;
      }
    }
    if (repeats > mostRepeat) {
      mostRepeat = repeats;
    }
    repeats = 0;
  }
  if (mostRepeat >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  // verificar maior numero:
  let maxNumber = phoneNumber.reduce(function (a, b) {
    return Math.max(a, b);
  });

  if (maxNumber > 9) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  // em fim, vamos gerar o numero de telefone:
  let outputPhoneNumber = '';
  for (let index = 0; index < phoneNumber.length; index += 1) {
    if (index === 0) {
      outputPhoneNumber += '(';
    } else if (index === 2) {
      outputPhoneNumber += ') ';
    } else if (index === 7) {
      outputPhoneNumber += '-';
    }
    outputPhoneNumber += phoneNumber[index];
  }
  return outputPhoneNumber;
}
// let phoneNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// console.log(generatePhoneNumber(phoneNumbersArray));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let checkLineA = (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC));
  let checkLineB = (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC));
  let checkLineC = (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB));
  return (checkLineA && checkLineB && checkLineC);
}
// console.log(triangleCheck(10, 14, 8))

// Desafio 13
function hydrate(string) {
  let numbersInString = (string.match(/\d/g));
  let sum = 0;
  for (let index = 0; index < numbersInString.length; index += 1) {
    let num = parseInt(numbersInString[index]);
    sum += num;
  }
  if (sum === 1) {
    return (sum + ' copo de água');
  }
  return (sum + ' copos de água');
}
// console.log(hydrate('1 cachaça'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
