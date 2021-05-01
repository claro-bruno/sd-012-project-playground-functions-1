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
//  verifica se o tamanho do array é valido para formar um número de telefone de 11 dígitos;
function isPhoneLength(phone) {
  if (phone.length !== 11) {
    return true;
  }
  return false;
}

//  verifica se o numero se repete mais de três vezes.
function repetition(phone, number) {
  let times = 0;
  for (let index of phone) {
    if (index === number) {
      times += 1;
    } if (times >= 3) {
      return true;
    }
  }
  return false;
}

//  verifica se o numero repete mais que as vezes necessárias.
function repeatNumber(phone) {
  for (let number of phone) {
    if (repetition(phone, number)) {
      return true;
    }
  }
  return false;
}

//  verifica se o número é valido, sendo menor que 9 e mair que 0;
function isValidNumber(phone) {
  for (let number of phone) {
    if (number < 0 || number > 9) {
      return true;
    }
  }
  return false;
}

//  imprime um numero de telefone a partir de um array os números:: (DDD) 00000-0000;
function printNumber(phone) {
  let areaNumber = `${phone[0]}${phone[1]}`;
  let firstHalf = `${phone[2]}${phone[3]}${phone[4]}${phone[5]}${phone[6]}`;
  let secondHalf = `${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
  let phoneResult = `(${areaNumber}) ${firstHalf}-${secondHalf}`;
  return phoneResult;
}

//  verifica a partir das funções acima se é possível gerar o numero, se imprime no formato correto;
function generatePhoneNumber(phone) {
  if (isPhoneLength(phone)) {
    return 'Array com tamanho incorreto.';
  } if (repeatNumber(phone)) {
    return 'não é possível gerar um número de telefone com esses valores';
  } if (isValidNumber(phone)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return printNumber(phone);
}

// Desafio 12
//  compara se um lado é menor que a soma dos outros dois;
function compareSides(side1, side2, side3) {
  if (side1 < side2 + side3) {
    return true;
  }
  return false;
}

//  compara se um lado é maior que a diferença absoluta entre outros dois;
function isHigherAsolut(side1, side2, side3) {
  if (side1 > Math.abs(side2 - side3)) {
    return true;
  }
  return false;
}

//  verifica se é possivel formar um triangulo;
function isTrianglePossible(side1, side2, side3) {
  if (compareSides(side1, side2, side3) && isHigherAsolut(side1, side2, side3)) {
    return true;
  }
  return false;
}

function triangleCheck(first, second, third) {
  if (isTrianglePossible(first, second, third)) {
    return true;
  } if (isTrianglePossible(second, first, third)) {
    return true;
  } if (isTrianglePossible(third, first, second)) {
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
