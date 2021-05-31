// Desafio 10
const techList = (techs, firstName) => {
  if (techs.length === 0) {
    return 'Vazio!';
  }
  const sortTechs = techs.sort();
  return sortTechs.map((item) => ({ tech: item, name: firstName }));
};
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Diogo'));

// Desafio 11
// Função retorna a maior qualidade de vezes que um numero repete
const repeated = (numbers) => {
  let result = 0;
  numbers.forEach((number) => {
    let counter = 0;
    numbers.forEach((comparator) => {
      if (comparator === number) {
        counter += 1;
      }
    });
    if (counter > result) {
      result = counter;
    }
  });
  return result;
};
// Função verifica se array de números atende as especificações
const isValid = (numbers) => {
  if (repeated(numbers) >= 3 || numbers.find((number) => number < 0 || number > 9)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  return true;
};
// Função que gera numero de telefone caso todos os requisitos sejam validos
const generatePhoneNumber = (numbers) => {
  if (isValid(numbers) !== true) {
    return isValid(numbers);
  }
  return numbers.reduce((phoneNum, number, index) => {
    phoneNum += number;
    if (index === 1) {
      phoneNum += ') ';
    } else if (index === 6) {
      phoneNum += '-';
    }
    return phoneNum;
  }, '(');
};
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lAMenorBC = (lineA < lineB + lineC);
  let lBMenorAC = (lineB < lineA + lineC);
  let lCMenorAB = (lineC < lineA + lineB);
  let lAMaiorDifBC = lineA > Math.abs(lineB - lineC);
  let lBMaiorDifAC = lineB > Math.abs(lineA - lineC);
  let lCMaiorDifAB = lineC > Math.abs(lineA - lineB);
  let menorQueSoma = (lAMenorBC === true) && (lBMenorAC === true) && (lCMenorAB === true);
  let maiorQueDif = lAMaiorDifBC && lBMaiorDifAC && lCMaiorDifAB;
  if (menorQueSoma === true) {
    switch (maiorQueDif) {
    case true:
      return true;
    default:
      return false;
    }
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(strQtdBebida) {
  let numbers = strQtdBebida.match(/\d+/g);
  let resultado = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    let parcial = parseInt(numbers[index], 0);
    resultado += parcial;
  }
  if (resultado === 1) {
    return `${resultado} copo de água`;
  }
  return `${resultado} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
