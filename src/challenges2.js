// Desafio 10
function techList(techArray, name) {
  let objectArray = [];
  for (let tech of techArray.sort()) {
    let techObject = {
      tech: tech,
      name: name,
    };
    objectArray.push(techObject);
  }
  if (objectArray.length != 0) {
    return objectArray;
  } else {
    return "Vazio!";
  }
}

// Desafio 11
function generatePhoneNumber(numbers) {
  switch (true) {
    case numbers.length != 11:
      return "Array com tamanho incorreto.";
      break;
    case maiorNumero(numbers) > 9 ||
      menorNumero(numbers) < 0 ||
      repeteTresVezes(numbers):
      return "não é possível gerar um número de telefone com esses valores";
      break;
    default:
      let phoneNumber = "(";
      phoneNumber += numbers[0];
      phoneNumber += numbers[1];
      phoneNumber += ") ";
      phoneNumber += numbers[2];
      phoneNumber += numbers[3];
      phoneNumber += numbers[4];
      phoneNumber += numbers[5];
      phoneNumber += numbers[6];
      phoneNumber += "-";
      phoneNumber += numbers[7];
      phoneNumber += numbers[8];
      phoneNumber += numbers[9];
      phoneNumber += numbers[10];
      return phoneNumber;
      break;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let validaA;
  let validaB;
  let validaC;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    validaA = true;
  } else {
    validaA = false;
  }
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    validaB = true;
  } else {
    validaB = false;
  }
  if (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    validaC = true;
  } else {
    validaC = false;
  }
  if (validaA && validaB && validaC) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(texto) {
  let qtde = 0;
  var numerosDoTexto = texto.match(/\d+/g).map(Number);
  for (let num of numerosDoTexto) {
    qtde += num;
  }
  if (qtde <= 1) {
    return qtde + " copo de água";
  } else {
    return qtde + " copos de água";
  }
}

function menorNumero(numbers) {
  let menor = numbers[0];
  for (let num of numbers) {
    if (num < menor) {
      menor = num;
    }
  }
  return menor;
}

function maiorNumero(numbers) {
  let maior = numbers[0];
  for (let num of numbers) {
    if (num > maior) {
      maior = num;
    }
  }
  return maior;
}

function repeteTresVezes(numbers) {
  let repete = 0;
  let cont = 0;
  for (let number of numbers) {
    if (cont < 3) {
      cont = 0;
      for (let num of numbers) {
        if (number === num) {
          cont += 1;
        }
      }
      repete = false;
    } else {
      repete = true;
    }
  }
  return repete;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
