// Desafio 10
function techList(arrayTech, name) {
  // seu código aqui
  
  let listAnswer = [];

  arrayTech = arrayTech.sort();

  for (let key in arrayTech){
    let objects = {
      tech: arrayTech[key],
      name: name
    };
    listAnswer.push(objects);
  };
  if (arrayTech.length === 0) {
    return 'Vazio!'
  } else {  
    return listAnswer;
  }
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))

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
