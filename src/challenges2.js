// Desafio 10
function techList(array, name) {  
  let listaTech = [];
  if (array.length > 0) {
    let ordemArray = array.sort();
      for (let index = 0; index < ordemArray.length; index += 1) {
        listaTech[index] = {tech: ordemArray[index], name: name};
      }; 
    } else {
      return "Vazio!";      
  };
  return listaTech;
};

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
