// Desafio 10
function techList(arrayTech, name) {
  let arrayObjects = [];
  arrayTech = arrayTech.sort();

  for (let index in arrayTech) {
     let info = {
      tech: arrayTech[index],
      name: name
    }
    arrayObjects.push(info);
  }
  
  if (arrayTech.length === 0) {
    arrayObjects = "Vazio!";
  }

  return arrayObjects;
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let result = "";
  let counter = 0;
  if (arrayNumbers.length === 11) {
    for (let index in arrayNumbers) {
      counter = 0;
      for (let index2 in arrayNumbers) {
        if (arrayNumbers[index] === arrayNumbers[index2]) {
          counter += 1;
        }
        if (counter === 3) {
          break;
        }
      }
      if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9 || counter === 3) {
        result = "não é possível gerar um número de telefone com esses valores";
        break;
      } else {
        if (index === "0") {
          result += `(${arrayNumbers[index]}`;
        } else if (index === "2") {
          result += `)${arrayNumbers[index]}`;
        } else if (index === "7") {
          result += `-${arrayNumbers[index]}`;
        } else {
          result += arrayNumbers[index];
        }
      }
    }
  } else {
    result = "Array com tamanho incorreto.";
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    result = true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)){
    result = true;
  } else if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    result = true;
  }
  return result;
}

// Desafio 13
function hydrate(bebidas) {
  let regex = /\d+/g; // \d+ Significa números de 1 a 9;
  let arrayNumbers = bebidas.match(regex);
  let cups = 0;
  let result = "";
  for (let index in arrayNumbers) {
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
