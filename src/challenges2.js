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

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
