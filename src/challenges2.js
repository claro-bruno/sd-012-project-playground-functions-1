// Desafio 10
function techList(arrayTech, name) {
  let arrayObjects = [];
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < arrayTech.length; index += 1) {
    arrayObjects[index] = {
      tech: `${arrayTech[index]}`,
      name: `${name}`,
    };
  }
  return arrayObjects.sort((a, b) => (a.tech > b.tech ? 1 : -1));
}

// Desafio 11
function isValidNegative(arrayPhoneNumber) {
  for (let index = 0; index < arrayPhoneNumber.length; index += 1) {
    if (arrayPhoneNumber[index] < 0 || arrayPhoneNumber[index] > 9) {
      return true;
    }
  }
  return false;
}

function isValidRep(arrayPhoneNumber) {
  let sorted = arrayPhoneNumber.concat();
  // :thinking_emoji:
  sorted.sort();
  for (let index = 0; index < sorted.length; index += 1) {
    if (sorted[index] === sorted[index + 1] && sorted[index] === sorted[index + 2]) {
      return true;
    }
  }
  return false;
}

// for (let index = 0; index < arrayPhoneNumber.length; index += 1) {
//   let count = 0;
//   for (
//     let indexComp = 0;
//     indexComp < arrayPhoneNumber.length;
//     indexComp += 1
//   ) {
//     if (arrayPhoneNumber[indexComp] === arrayPhoneNumber[index]) {
//       count += 1;
//     }
//     if (count > 2) {
//       return true;
//     }
//   }
// }
// return false;

function generatePhoneNumber(arrayPhoneNumber) {
  let validNegative = isValidNegative(arrayPhoneNumber);
  let validRep = isValidRep(arrayPhoneNumber);
  if (arrayPhoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (validNegative === true || validRep === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let ddd = arrayPhoneNumber.slice(0, 2).join('');
  let firstHalf = arrayPhoneNumber.slice(2, 7).join('');
  let secondHalf = arrayPhoneNumber.slice(7, 11).join('');
  ddd = ddd.padStart(3, '(');
  ddd = ddd.padEnd(4, ')');
  let number = [];
  number[0] = firstHalf;
  number[1] = secondHalf;
  number = number.join('-');
  return `${ddd} ${number}`;
}

// Desafio 12
function checkA(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) {
    return false;
  }
  return true;
}

function checkB(lineA, lineB, lineC) {
  if (lineB > lineC + lineA || lineB < Math.abs(lineC - lineA)) {
    return false;
  }
  return true;
}

function checkC(lineA, lineB, lineC) {
  if (lineC > lineA + lineB || lineC < Math.abs(lineA - lineB)) {
    return false;
  }
  return true;
}

function triangleCheck(lineA, lineB, lineC) {
  let a = checkA(lineA, lineB, lineC);
  let b = checkB(lineA, lineB, lineC);
  let c = checkC(lineA, lineB, lineC);
  return a && b && c;
}

// Desafio 13
function hydrate(bebidas) {
  let reg = /\d+/g;
  let numerosString = bebidas.match(reg);
  let coposAgua = 0;
  for (let index = 0; index < numerosString.length; index += 1) {
    coposAgua += Number(numerosString[index]);
  }
  if (coposAgua === 1) {
    return `${coposAgua} copo de água`;
  }
  return `${coposAgua} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
