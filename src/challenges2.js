// Desafio 10
function techList(arrayOfTech, names) {
  let newArrayTech = [];
  if (arrayOfTech !== undefined) {
    for (let index = 0; index < arrayOfTech.length; index += 1) {
      newArrayTech.push({
        tech: arrayOfTech[index],
        name: names,
      });
    }
    newArrayTech.sort(function (a, b) {
      if (a.tech > b.tech) {
        return 1;
      } else if (a.tech < b.tech) {
        return -1;
      } else {
        return 0;
      }
    });
    return newArrayTech;
  } else if (arrayOfTech === undefined) {
    return 'Vazio!';
  }
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber(arrayOfNumber) {
  let phoneNumber;
  let isPossible = true;
  for (let index = 0; index < arrayOfNumber.length; index += 1) {
    if (arrayOfNumber[index] < 0 || arrayOfNumber[index] > 9) {
      isPossible = false;
    }
  }
  for (let number = 0; number < 10; number += 1) {
    let contador = 0;
    for (let index = 0; index < arrayOfNumber.length; index += 1) {
      if (number === arrayOfNumber[index]) {
        contador += 1;
      }
    }
    if (contador > 2) {
      isPossible = false;
    }
  }
  if (arrayOfNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (isPossible === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
    let stringPhone = arrayOfNumber.join('');
    let part1 = stringPhone.slice(0, 2);
    let part2 = stringPhone.slice(2, 7);
    let part3 = stringPhone.slice(7);
    phoneNumber = `(${part1}) ${part2}-${part3}`;
    return phoneNumber;
  }
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let firstCheck = false;
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)) {
    firstCheck = true;
  }
  let secondCheck = false;
  if (lineA > (Math.abs(lineB) / Math.abs(lineC)) && lineB > (Math.abs(lineA) / Math.abs(lineC)) && lineC > (Math.abs(lineA) / Math.abs(lineB))) {
    secondCheck = true;
  }
  if (firstCheck === true && secondCheck === true) {
    return true;
  } else {
    return false;
  }
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(drinks) {
  let receivedDrink = drinks.split('').filter(n => (Number(n) || n === 0)).join('');
  let stringToReplace = receivedDrink.replace(/[^0-9]/g, '');
  let newArray = stringToReplace.split('');
  let sunString = 0;
  for (let index = 0; index < newArray.length; index += 1) {
    sunString += parseInt(newArray[index]);
  }

  if (sunString === 1) {
    return `${sunString} copo de água`;
  } else {
    return `${sunString} copos de água`;
  }
}
console.log(hydrate('1 cerveja'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
