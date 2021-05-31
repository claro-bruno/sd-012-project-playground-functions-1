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
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
// Função verifica requisito para formar triangulo: se a medida de qualquer uma das linhas é menor que a soma das medidas das outras duas
const menorQueSoma = (lineA, lineB, lineC) => {
  const lAMenorBC = (lineA < lineB + lineC);
  const lBMenorAC = (lineB < lineA + lineC);
  const lCMenorAB = (lineC < lineA + lineB);
  return (lAMenorBC === true) && (lBMenorAC === true) && (lCMenorAB === true);
};
// Função verifica requisito para formar triangulo: se a medida de qualquer uma das linhas é maior que o valor absoluto da diferença entre as medidas das outras duas
const maiorQueDif = (lineA, lineB, lineC) => {
  const lAMaiorDifBC = lineA > Math.abs(lineB - lineC);
  const lBMaiorDifAC = lineB > Math.abs(lineA - lineC);
  const lCMaiorDifAB = lineC > Math.abs(lineA - lineB);
  return lAMaiorDifBC && lBMaiorDifAC && lCMaiorDifAB;
};
// Função retorna true se for triangulo ou false se não for triangulo
const triangleCheck = (lineA, lineB, lineC) => {
  if (menorQueSoma(lineA, lineB, lineC) && maiorQueDif(lineA, lineB, lineC)) {
    return true;
  }
  return false;
};
console.log(triangleCheck(10, 14, 8));

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
