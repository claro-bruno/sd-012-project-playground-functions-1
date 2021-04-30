// Desafio 10
function techList(tech, name) {
  let techSort = tech.sort()
  let list = [];
  for (index = 0; index < techSort.length; index += 1) {
    let objects = {
      name: name,
      tech: ''
    }
    objects.name = name;
    objects.tech = techSort[index];
    list.push(objects)
  }
  if (list.length === 0){
    return "Vazio!"
  } else {
  return list;
  }
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let repeatCheck = 0;
  let validNumberCheck = 0;
  for (index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9){
    validNumberCheck += 1;
  }
}  
  for (index = 0; index < arrayNumbers.length; index += 1) {
    if (repeatCheck >= 3) {
      break
    } else {
      repeatCheck = 0;
      let numbers = arrayNumbers[index];
      for (index2 = 0; index2 < arrayNumbers.length; index2 += 1) {
        if (numbers === arrayNumbers[index2]) {
          repeatCheck += 1;
        }
      }
    }
  }
  if (arrayNumbers.length !== 11) {
    return "Array com tamanho incorreto.";
  } else if (validNumberCheck > 0 || repeatCheck > 2) {
    return "não é possível gerar um número de telefone com esses valores";
  } else {
    let ddd = `(${arrayNumbers[0]}${arrayNumbers[1]}) `
    let firstPart = [];
    let lastPart = ['-']
    for (index = 2; index < 7; index += 1) {
      firstPart.push(arrayNumbers[index])
    }
    for (index = 7; index < arrayNumbers.length; index += 1) {
      lastPart.push(arrayNumbers[index])
    }
    completeNumber = ddd + firstPart.join('') + lastPart.join('')
    return completeNumber
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  } else if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
    return false;
  } else {
    return true;
  }
}

// Desafio 13
function hydrate(string) {
  let copos = 0;
  let checker = 0;
  stringSplit = string.split('')
  for (index = 0; index < stringSplit.length; index += 1) {
    checker = Math.abs(stringSplit[index]);
    if (checker > 0){ 
      copos += checker;
    } else {
      checker = 0;
    }
  }
  if (copos > 1){
    return `${copos} copos de água`
  } else {
    return `${copos} copo de água`
  }
}

console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
