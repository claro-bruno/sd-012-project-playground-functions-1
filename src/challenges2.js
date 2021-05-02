// Desafio 10
function techList(arrayOfTech, names) {
  let newArrayTech = [];
  if (arrayOfTech !== undefined) {
    for (let index = 0; index < arrayOfTech.length; index += 1) {
      newArrayTech.push({
        tech: arrayOfTech[index],
        name: names
      })
    }
    newArrayTech.sort(function (a, b) {
      if (a.tech > b.tech) {
        return 1;
      } else if (a.tech < b.tech) {
        return -1;
      } else {
        return 0;
      };
    });
    return newArrayTech
  } else if (arrayOfTech === undefined) {
    return 'Vazio!'
  }
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11 FALTA arrumar < 0 || > 9 / se repita 3 vezes ou mais / arrumar identacao do telefone
function generatePhoneNumber(arrayOfNumber) {
  let phoneNumber = [];
  for (let index = 0; index < arrayOfNumber.length; index += 1) {
    if (arrayOfNumber[index] < 0 || arrayOfNumber[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else if (arrayOfNumber.length > 11) {
      return 'Array com tamanho incorreto.';
    // } else if (arrayOfNumber.indexOf() === -1) {
    //   return 'não é possível gerar um número de telefone com esses valores';
    } else {
      phoneNumber = arrayOfNumber;
      return phoneNumber;
    }
  }
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let vaLineA = Math.abs(lineA);
  let vaLineB = Math.abs(lineB);
  let vaLineC = Math.abs(lineC);
  if (lineA < (lineB + lineC) && lineA > (vaLineB / vaLineC)) {
    return true;
  } else {
    return false;
  }
}
console.log(triangleCheck(10, 14, 8));

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
