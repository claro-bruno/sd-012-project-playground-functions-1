// Desafio 10 FALTA Retornar a mensagem de erro 'Vazio!' quando a lista não tiver tecnologias
function techList(arrayOfTech, names) {
  var newArrayTech = [];
  for (let index = 0; index < arrayOfTech.length; index += 1) {
    newArrayTech.push({
        tech: arrayOfTech[index],
        name: names
    })
  };
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
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11 FALTA arrumar < 0 || > 9 / se repita 3 vezes ou mais / arrumar identacao do telefone
function generatePhoneNumber(arrayOfNumber) {
  var phoneNumber = [];
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
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1 ]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  var aLineA = Math.abs(lineA);
  var aLineB = Math.abs(lineB);
  var aLineC = Math.abs(lineC);

  if (lineA < (lineB + lineC) && lineA > (aLineB / aLineC)) {
    return true;
  } else {
    return false
  };
}
console.log(triangleCheck(10, 25, 8));

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
