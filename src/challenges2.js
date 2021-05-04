// Desafio 10
function techList(techNames, personName) {
  let secondList = [];
  if (techNames.length === 0) {
    return 'Vazio!';
  } 
  let firstList = techNames.sort();
  for (let index = 0; index < firstList.length; index += 1) {
    secondList.push(
      {
        tech: firstList[index],
        name: personName,
      },
    );
  }
  return secondList;  
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let count = 0;
    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
      if (numbers[index] === numbers[index2]) {
        count += 1;
        if (count >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  let phone = numbers.map(String);
  let final = '(' + phone[0] + phone[1] + ') ' + phone[2] + phone[3] + phone[4] + phone[5] + phone[6] + '-' + phone[7] + phone[8] + phone[9] + phone[10];
  return final;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let isTriangle = false;
  if ((lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC))) {
    isTriangle = true;
  } else if ((lineB < (lineA + lineC)) && (lineB > Math.abs(lineC - lineA))) {
    isTriangle = true;
  } else if ((lineC < (lineB + lineA)) && (lineC > Math.abs(lineA - lineB))) {
    isTriangle = true;
  } else {
    isTriangle = false;
  }
  return isTriangle;
}

// Desafio 13
function hydrate(drinks) {
  let numbers = drinks.match(/\d+/g);
  let sum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    sum += Number(numbers[index]);
  }
  if (sum === 1) {
    return sum + ' copo de água';
  } else {
    return sum + ' copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
