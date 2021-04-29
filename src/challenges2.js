// Desafio 10
function techList(receivedTechnologies, name) {
  let listOfTechnologies = [];
  if (receivedTechnologies.length !== 0) {
    let technologie1 = {
      tech: 'NomeTech',
      name,
    };
    let technologie2 = {
      tech: 'NomeTech',
      name,
    };
    let technologie3 = {
      tech: 'NomeTech',
      name,
    };
    let technologie4 = {
      tech: 'NomeTech',
      name,
    };
    let technologie5 = {
      tech: 'NomeTech',
      name,
    };
    receivedTechnologies = receivedTechnologies.sort();
    for (let index in receivedTechnologies) {
      switch (index) {
      case '0':
        technologie1.tech = receivedTechnologies[index];
        listOfTechnologies.push(technologie1);
        break;
      case '1':
        technologie2.tech = receivedTechnologies[index];
        listOfTechnologies.push(technologie2);
        break;
      case '2':
        technologie3.tech = receivedTechnologies[index];
        listOfTechnologies.push(technologie3);
        break;
      case '3':
        technologie4.tech = receivedTechnologies[index];
        listOfTechnologies.push(technologie4);
        break;
      case '4':
        technologie5.tech = receivedTechnologies[index];
        listOfTechnologies.push(technologie5);
        break;
      default:
        break;
      }
    }
    return listOfTechnologies;
  } return 'Vazio!';
}

// Desafio 11
function verifyRepetition(receivedStringNumber) {
  let occurrence = [];
  let higherOccurrence = -1;
  for (let index in receivedStringNumber) {
    occurrence[receivedStringNumber[index]] = 1 + (occurrence[receivedStringNumber[index]] || 0);
  }
  for (let index in occurrence) {
    if (occurrence[index] > higherOccurrence) {
      higherOccurrence = occurrence[index];
    }
  }
  if (higherOccurrence >= 3) {
    return true;
  } return false;
}

function verifyIncorrectValue(receivedStringNumber) {
  let repeatThreeTimes = verifyRepetition(receivedStringNumber);
  for (let index in receivedStringNumber) {
    if ((receivedStringNumber[index] < 0) || (receivedStringNumber[index] > 9) || (repeatThreeTimes === true)) {
      return true;
    }
  }
  return false;
}

function generate(receivedStringNumber) {
  let phoneNumber = '';
  let ddd = '';
  let initial = '';
  let final = '';
  ddd += ddd.concat(`(${receivedStringNumber[0]}${receivedStringNumber[1]})`);
  initial += initial.concat(`${receivedStringNumber[2]}${receivedStringNumber[3]}${receivedStringNumber[4]}${receivedStringNumber[5]}${receivedStringNumber[6]}`);
  final += final.concat(`${receivedStringNumber[7]}${receivedStringNumber[8]}${receivedStringNumber[9]}${receivedStringNumber[10]}`);
  phoneNumber += phoneNumber.concat(`${ddd} ${initial}-${final}`);
  return phoneNumber;
}

function generatePhoneNumber(receivedStringNumber) {
  if (receivedStringNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (verifyIncorrectValue(receivedStringNumber) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  } return generate(receivedStringNumber);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) {
    return true;
  } return false;
}

// Desafio 13
function hydrate(receivedString) {
  let regularExpression;
  let drinksString = [];
  let drinksInteger = [];
  let drinks;
  let suggestion = '';
  regularExpression = /\d+/g;
  drinksString = receivedString.match(regularExpression);
  for (let index in drinksString) {
    drinksInteger.push(parseInt(drinksString[index]));
  }
  drinks = drinksInteger.reduce((a, b) => a + b, 0);
  if (drinks > 1) {
    suggestion += suggestion.concat(`${drinks} copos de água`);
  } else suggestion += suggestion.concat(`${drinks} copo de água`);
  return suggestion;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
