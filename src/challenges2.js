// Desafio 10
function techList(skills, name) {
  if (skills.length === 0) {
    return 'Vazio!';
  }
  let saida = [];
  for (let skill of skills.sort()) {
    let indice = {
      tech: skill,
      name: name,
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
function triangleCheck(line1, line2, line3) {
  if (line1 < line2 + line3 && line1 > Math.abs(line2 - line3)) {
    return true;
  } else if (line2 < line1 + line3 && line2 > Math.abs(line1 - line3)) {
    return true;
  } else if (line3 < line1 + line2 && line3 > Math.abs(line1 - line2)) {
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
    return '1 copo de água'
  }
  return `${quantity} copos de água`
}
console.log(hydrate('1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
