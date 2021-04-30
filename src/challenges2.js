// Desafio 10
function techList(techNames,personName) {
  let secondList = [];
  if(techNames.length === 0){
    return "Vazio!";
  } else {
    let firstList = techNames.sort();
    for (let index = 0; index < firstList.length; index += 1) {
      secondList.push(
        {
        tech: firstList[index],
        name: personName,
      },);
    }
    return secondList;
  }
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));


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
