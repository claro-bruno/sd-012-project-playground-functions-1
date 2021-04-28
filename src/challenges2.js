// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let array = [];
  if (tech == array) {
    return 'Vazio!'
  } else {
    for (let language in tech){
      array.push ({
        tech: tech[language],
        name: name
      });
    };
    return array;
  };
  
};
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'))

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
