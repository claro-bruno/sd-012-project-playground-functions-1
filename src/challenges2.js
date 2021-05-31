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
function repeated(arr) {
  let contator = 0;
  for (let indRep = 0; indRep < arr.length; indRep += 1) {
    let repetitions = 0;
    for (let indRep2 = 0; indRep2 < arr.length; indRep2 += 1) {
      if (arr[indRep] === arr[indRep2]) {
        repetitions += 1;
      }
    }
    if (repetitions > contator) {
      contator = repetitions;
    }
  }
  return contator;
}

function generatePhoneNumber(arr) {
  let repetitions = repeated(arr);
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (repetitions >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let ddd = '';
  let phoneNumberPart1 = '';
  let phoneNumberPart2 = '';
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] < 0 || arr[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (index === 0) {
      ddd += `(${arr[index]}`;
    } else if (index === 1) {
      ddd += `${arr[index]})`;
    } else if (index > 1 && index < 7) {
      phoneNumberPart1 += arr[index];
    } else {
      phoneNumberPart2 += arr[index];
    }
  }
  return `${ddd} ${phoneNumberPart1}-${phoneNumberPart2}`;
}

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
