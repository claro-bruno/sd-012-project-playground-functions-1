// Desafio 10
function techList(techNames,name) {
  let secondList = [];
  if(techNames.length === 0){
    return "Vazio!";
  } else {
    let firstlist = techNames.sort();
    for (let key in firstlist) {
      secondList.push = {
        tech: firstlist[key],
        name: name
      }
    }
    return secondList;
  }
}



// Desafio 11
function generatePhoneNumber(numbers) {

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
