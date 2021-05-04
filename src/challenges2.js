// Desafio 10
function techList(arrayTech, name) {
  if (arrayTech.length === 0){
    return'Vazio!'};

    let arrayTechSorted = arrayTech.sort();
    let newArray = [];
    for (let index = 0; index < arrayTechSorted.length; index += 1){
      let obj = {
        tech = arrayTechSorted[index],
        name = name,
    };
   
    newArray.push(obj);
  }
  return newArray;
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
