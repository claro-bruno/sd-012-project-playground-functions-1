// Desafio 10
let stringArray1 = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let emptyStringArray = [];
let name1 = "Lucas";

function techList(stringArray, name) {
  if (stringArray.length === 0) {
    return 'Vazio!';
  }
  let sortedArray = stringArray.sort();
  let objectsList = [];
  for (let index in sortedArray) {
    let object = {tech: sortedArray[index], name: name};
    objectsList.push(object);
  }
  return objectsList;
}
console.log(techList(stringArray1, name1));
console.log(techList(emptyStringArray, name1));

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
