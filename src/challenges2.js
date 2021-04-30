// Desafio 10
function techList(tech, nome) {
  let sortArray = tech.sort();
  let arrayTech = [];
  let techs = {};
  let resultado = arrayTech;
  if (tech.length === 0) {
    resultado = 'Vazio!';
  } else {
    for (let index = 0; index < sortArray.length; index += 1) {
      techs = {
        tech: sortArray[index],
        name: nome,
      };
      arrayTech.push(techs);
    }
  }
  return resultado;
}

// Desafio 11
function generatePhoneNumber(arr) {
  let ddd = '';
  let phoneNumberPart1 = '';
  let phoneNumberPart2 = '';
  for (let indRep = 0; indRep < arr.length; indRep += 1) {
    let repeticoes = 0;
    for (let indRep2 = 0; indRep2 < arr.length; indRep2 += 1) {
      if (arr[indRep] === arr[indRep2]) {
        repeticoes += 1;
      }
    }
    if (repeticoes >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
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

