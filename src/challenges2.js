// Desafio 10
function techList(arrayTech, nameTech) {
  if (arrayTech.length === 0) {
    return 'Vazio!'};
  let arrayTechSort = arrayTech.sort();
  let arrayObjeTech = [];

  for (let index = 0; index < arrayTechSort.length; index += 1){
    let objetoTech = {
      tech: arrayTechSort[index],
      name: nameTech, 
    };
  arrayObjeTech.push(objetoTech);   
  }
  return arrayObjeTech;
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
