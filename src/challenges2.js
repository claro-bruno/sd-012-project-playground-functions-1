// Desafio 10
function techList(theTech, theName) {
  let objectList = [];
  let odTheTech = theTech.sort();
  if (theTech.length === 0) {
    return ('Vazio!');
  }
  for (let index = 0; index < odTheTech.length; index += 1) {
    let object = {
      tech: '',
      name: theName,
    };
    object.tech = odTheTech[index];
    objectList.push(object);
  }
  return (objectList);
}

// Desafio 11 (Part1)
function noNumber(pNumber) {
  if (pNumber.length > 11) {
    return (true);
  }
}

function wrongNumber(pNumber) {
  for (let index = 0; index < pNumber.length; index += 1) {
    if ((pNumber[index] > 9) || (pNumber[index] < 0)) {
      return (true);
    }
  }
}

function countTriplicate1(pNumber) {
// https://dev.to/huyddo/find-duplicate-or-repeat-elements-in-js-array-3cl3
  let countNumber = {};
  for (let index = 0; index < pNumber.length; index += 1) {
    if (countNumber[pNumber[index]]) {
      countNumber[pNumber[index]] += 1;
    } else {
      countNumber[pNumber[index]] = 1;
    } for (let xTimes in countNumber) {
      if (countNumber[xTimes] >= 3) {
        return (true);
      }
    }
  }
}

function formatNumber(pNumber) {
  // Quebrei a cabeca tentand achar um comando que desse certo no lint.
  // Olhei como o colega fez: https://github.com/tryber/sd-012-project-playground-functions/blob/eric-kreis-playground-functions/src/challenges2.js
  // Entendi a logica e apliquei no meu requisito.
  let firstPart = `${pNumber[0]}${pNumber[1]}`;
  let secondPart = `${pNumber[2]}${pNumber[3]}${pNumber[4]}${pNumber[5]}${pNumber[6]}`;
  let tirdPart = `${pNumber[7]}${pNumber[8]}${pNumber[9]}${pNumber[10]}`;
  let finalNumber = `(${firstPart}) ${secondPart}-${tirdPart}`;
  return (finalNumber);
}

// Desafio 11
function generatePhoneNumber(pNumber) {
  if (noNumber(pNumber) === true) {
    return ('Array com tamanho incorreto.');
  } if ((wrongNumber(pNumber)) || countTriplicate1(pNumber) === true) {
    return ('não é possível gerar um número de telefone com esses valores');
  }
  return (formatNumber(pNumber));
}

// Desafio 12 (Part1)
function isTriangle1(lineA, lineB, lineC) {
  let lineAB = lineA + lineB;
  let lineAC = lineA + lineC;
  let lineBC = lineB + lineC;
  let result;
  if ((lineA < lineBC) && (lineB < lineAC) && (lineC < lineAB)) {
    result = true;
  } if (result !== true) {
    result = false;
  }
  return (result);
}

// Desafio 12 (Part2)
function isTriangle2(lineA, lineB, lineC) {
  let lineAB = Math.abs(lineA - lineB);
  let lineAC = Math.abs(lineA - lineC);
  let lineBC = Math.abs(lineB - lineC);
  let result;
  if ((lineA > lineBC) && (lineB > lineAC) && (lineC > lineAB)) {
    result = true;
  } if (result !== true) {
    result = false;
  }
  return (result);
}

// Desafio 12 Final
function triangleCheck(lineA, lineB, lineC) {
  return isTriangle1(lineA, lineB, lineC) && isTriangle2(lineA, lineB, lineC);
}

// Desafio 13
function hydrate(pints) {
  // https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
  let numberOf = pints.match(/\d+/g).map(Number);
  let water = 0;
  for (let index = 0; index < numberOf.length; index += 1) {
  // https://stackoverflow.com/questions/41446833/what-is-the-difference-between-i-i-1-and-i-1-in-a-for-loop
    water += numberOf[index];
  } if (water === 1) {
    return (`${water} copo de água`);
  }
  return (`${water} copos de água`);
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
