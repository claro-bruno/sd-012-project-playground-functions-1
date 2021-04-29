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
    return 'Array com tamnho incorreto.';
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
  let condicao1 = (lineA < lineB + lineC) && (lineA > Match.abs(lineA - (lineB+lineC)));
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
