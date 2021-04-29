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
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) {
    return true;
  } return false;
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
