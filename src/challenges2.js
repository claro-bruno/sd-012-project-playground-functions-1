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
    return 'Array com tamanho incorreto';
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
    } else if (index2 == 6) {
      phoneResult += `${phone[index2]}-`;
    } else if (index2 > 6 && index2 <= 11) {
      phoneResult += `${phone[index2]}`;
    }
  }
  return phoneResult;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 10, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

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
