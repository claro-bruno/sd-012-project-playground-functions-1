// Desafio 10
function techList(techNames,personName) {
  let secondList = {};
  if(techNames.length === 0){
    return "Vazio!";
  } else {
    let firstlist = techNames.sort();
    for (let index = 0; index < firstlist.length; index +=1) {
      secondList.push = {
        tech: firstlist[index],
        name: personName
      }
    }
    return secondList;
  }
}
 .

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
