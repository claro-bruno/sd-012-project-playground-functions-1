// Desafio 10
function techList(technologies, name) {
  let techsAndNameArray = []
  for (let index = 0; index < technologies.length; index += 1) {
    techsAndNameArray[index] = {
      tech: technologies[index],
      name: name
    };
  };
  for (let iteration = 1; iteration < techsAndNameArray.length; iteration += 1) {
    for (let indexObject = 0; indexObject < iteration; indexObject += 1) {
      let currentObject = techsAndNameArray[iteration]['tech'];
      let previusObject = techsAndNameArray[indexObject]['tech'];
      if (currentObject < previusObject) {
        let auxObject = currentObject;
        techsAndNameArray[iteration]['tech'] = previusObject;
        techsAndNameArray[indexObject]['tech'] = auxObject;
      };
    };
  };
  let result;
  if (technologies.length > 0) {
    result = techsAndNameArray;
  } else {
    result = 'Vazio!';
  }
  return result;
};

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
