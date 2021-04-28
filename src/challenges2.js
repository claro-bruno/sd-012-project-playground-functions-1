// Desafio 10
function techList(array, name) {
    array.sort();
    let respArray = [];
    let technologies = {};
    for (let objeto in array) {
        respArray[objeto] = {tech: array[objeto], name: name} 
    };
    return respArray;
}
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
