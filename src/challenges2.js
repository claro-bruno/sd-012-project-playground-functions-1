// Desafio 10
let arrTest = [];

function techList(receiveArray, name) {
  // seu código aqui
  if (receiveArray == 0) {
    return 'Vazio!';
  }

  let objTechOrdened = receiveArray.sort();
  let objTechList = [];


  for (let index = 0; index < objTechOrdened.length; index += 1) {
    objTechList.push({tec: objTechOrdened[index], name: name});
  }
  return objTechList;
}
console.log(techList(arrTest, 'Lucas'));

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
