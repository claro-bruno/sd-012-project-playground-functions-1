// Desafio 10
function techList(arrayTec, name) {
  if (arrayTec == '') return 'Vazio!';
  arrayTec.sort();
  let object;
  let newList =[];
  for (let i in arrayTec){
    object = {};
    object.tech = arrayTec[i];
    object.name = name;
    newList.push(object);
  }
  return newList;
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Thiago'));

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
