// Desafio 10
function techList(arrayTech, name) {
  let arraySort = arrayTech.sort();
  let output = [];
  if ( arrayTech.length === 0) {
    return 'Vazio!';
  } else {
    for ( let key of arraySort) {
      let techObj = {
        tech: key,
        name: name,
      };
      output.push(techObj);
    }
    return output;
  } 
}
console.log(techList([],'Elias'));
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
