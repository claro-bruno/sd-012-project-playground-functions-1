// Desafio 10
function techList(skills, name) {
  let nome = name;
  if (skills.length === 0) {
    return 'Vazio!';
  }
  let saida = [];
  for (let skill of skills.sort()) {
    let indice = {
      tech: skill,
      name: nome,
    };
    saida.push(indice);
  }
  return saida;
}

function isPhoneLength(phone) {
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  return false;
}

function repeatNumber(phone) {
  for (let number of phone) {
    let times = 0;
    for (let index of phone) {
      if (index === number) {
        times += 1;
      } if (times >= 3) {
        return true;
      }
    }
  }
  return false;
}

function isValidNumber(phone) {
  for (let number of phone) {
    if (number < 0 || number > 9) {
      return true;
    }
  }
  return false;
}

// Desafio 11
function generatePhoneNumber(phone) {
  let phoneResult = ''; let areaNumber = ''; let firstHalf = ''; let secondHalf = '';
  if (isPhoneLength(phone)) {
    return 'Array com tamanho incorreto.';
  } if (repeatNumber(phone)) {
    return 'não é possível gerar um número de telefone com esses valores';
  } if (isValidNumber(phone)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let index in phone) {
    if (index <= 1) {
      areaNumber += phone[index];
    } else if (index <= 6) {
      firstHalf += phone[index];
    } else if (index > 6 && index <= 11) {
      secondHalf += phone[index];
    }
  }
  phoneResult = `(${areaNumber}) ${firstHalf}-${secondHalf}`;
  return phoneResult;
}

// Desafio 12
function triangleCheck(firstSide, secondSide, thirdSide) {
  if (firstSide < secondSide + thirdSide && firstSide > Math.abs(secondSide - thirdSide)) {
    return true;
  } if (secondSide < firstSide + thirdSide && secondSide > Math.abs(firstSide - thirdSide)) {
    return true;
  } if (thirdSide < firstSide + secondSide && thirdSide > Math.abs(firstSide - secondSide)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(frase) {
  let numbers = frase.replace(/\D/g, '');
  let quantity = 0;
  for (let str of numbers) {
    quantity += Number(str);
  }
  if (quantity === 1) {
    return '1 copo de água';
  }
  return `${quantity} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
