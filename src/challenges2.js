// Desafio 10
function techList(arrayTech, name) {
  let arrayObjects = [];
  arrayTech = arrayTech.sort();

  for (let index = 0; index < arrayTech.length; index += 1) {
    let info = {
      tech: arrayTech[index],
      name,
    };
    arrayObjects.push(info);
  }

  if (arrayTech.length === 0) {
    arrayObjects = 'Vazio!';
  }
  return arrayObjects;
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let result = '';
  let counter = 0;
  if (arrayNumbers.length === 11) {
    for (let index = 0; index < arrayNumbers.length; index += 1) {
      counter = 0;
      for (let index2 = 0; index2 < arrayNumbers.length; index2 += 1) {
        if (arrayNumbers[index] === arrayNumbers[index2]) {
          counter += 1;
        }
        if (counter === 3) {
          break;
        }
      }
      if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9 || counter === 3) {
        result = 'não é possível gerar um número de telefone com esses valores';
        break;
      } else if (index === 0) {
        result += `(${arrayNumbers[index]}`;
      } else if (index === 2) {
        result += `) ${arrayNumbers[index]}`;
      } else if (index === 7) {
        result += `-${arrayNumbers[index]}`;
      } else {
        result += arrayNumbers[index];
      }
    }
  } else {
    result = 'Array com tamanho incorreto.';
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  if ((lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) || (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) || (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB))) {
    result = true;
  }
  return result;
}

// Desafio 13
function hydrate(bebidas) {
  let regex = /\d+/g; // \d+ Significa números de 1 a 9;
  let arrayNumbers = bebidas.match(regex);
  let cups = 0;
  let result = '';
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    cups += parseInt(arrayNumbers[index]);
  }

  if (cups > 1) {
    result = `${cups} copos de água`;
  } else {
    result = `${cups} copo de água`;
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
