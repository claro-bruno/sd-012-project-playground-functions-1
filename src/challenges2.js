// Desafio 10
function techList(techNames, name) {
  let listObject = [];
  if(techNames.length === 0){
    return 'Vazio!';
  }
  for(let index = 0; index < techNames.length; index += 1) {
    listObject.push({ tech: techNames[index], name: name });
  }
  return listObject;
}

// Desafio 11
function generatePhoneNumber(foneNumbers) {
  if (foneNumbers.length != 11){
    return "Array com tamanho incorreto.";
  };
  let getErro = false;
  for (let index = 0; index < foneNumbers.length; index += 1) {
    let countNumber;
    if(foneNumbers[index] > 9 || foneNumbers[index] < 0) {
      countErro = true;
    };
    for (let number of foneNumbers){
      if(foneNumbers[index] === number){
        countNumber += 1;
      };
    };
    if (countNumber > 2) {
      countErro = true;
    };
  };
  if (countErro === true){
    return "não é possível gerar um número de telefone com esses valores";
  } else {
    return `(${foneNumbers[0]}${foneNumbers[1]})${foneNumbers[2]}${foneNumbers[3]}${foneNumbers[4]}${foneNumbers[5]}${foneNumbers[6]}-${foneNumbers[7]}${foneNumbers[8]}${foneNumbers[9]}${foneNumbers[10]}`
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineB + lineA)){
    return false;
  } else if (lineA > Math.abs(lineB- lineC) || lineB > Math.abs(lineA - LineC) || lineC > Math.abs(lineA - lineB)){
    return false;
  } else {
    return true;
  };
};

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
