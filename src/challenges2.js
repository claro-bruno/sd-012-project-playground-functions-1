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

// Desafio 11
function generatePhoneNumber(phone) {
  let phoneResult = '';
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let number of phone) {
    let times = 0;
    for (let index in phone) {
      if (phone[index] === number) {
        times += 1;
      }
      if (times >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  for (let index2 in phone) {
    if (index2 <= 1) {
      phoneResult = `(${phone[0]}${phone[1]}) `;
    } else if (index2 <= 5) {
      phoneResult += `${phone[index2]}`;
    } else if (Number(index2) === 6) {
      phoneResult += `${phone[index2]}-`;
    } else if (index2 > 6 && index2 <= 11) {
      phoneResult += `${phone[index2]}`;
    }
  }
  return phoneResult;
}

// Desafio 12
function triangleCheck(firstSide, secondSide, thirdSide) {
  if (firstSide < secondSide + thirdSide && firstSide > Math.abs(secondSide - thirdSide)) {
    return true;
  } else if (secondSide < firstSide + thirdSide && secondSide > Math.abs(firstSide - thirdSide)) {
    return true;
  } else if (thirdSide < firstSide + secondSide && thirdSide > Math.abs(firstSide - secondSide)) {
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
