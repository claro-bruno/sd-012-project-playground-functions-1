// Desafio 10
function techList(receiveArray, name) {
  // seu código aqui
  if (receiveArray.length === 0) {
    return 'Vazio!';
  }
  
  let objTechOrdened = receiveArray.sort();
  let objTechList = [];
  
  for (let index = 0; index < objTechOrdened.length; index += 1) {
    let obj = {
      tech: objTechOrdened[index],
      name: name
    };
    objTechList.push(obj);
  }
  return objTechList;
}

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
