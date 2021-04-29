// Desafio 10
function techList(arrayTech, nameOf) {
  let arrayOrdenada = arrayTech.sort();
  let newArrayTech = {
    tech: '',
    name: ''
  };

  for (let index = 0; index < arrayTech.length; index += 1) { 
    newArrayTech[index] = {
      tech: arrayTech[index],
      name: nameOf
    }
  }
  return newArrayTech;
}

let x = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let xN = 'Lucas';
console.log(techList(x, xN));


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
