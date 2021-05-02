// Desafio 10
let obj = {};
let resultado = [];
function techList(tech, name) {
  if(tech.length > 0) {
  let ordtech = [];
  ordtech = tech.sort();
  for(index = 0; index < tech.length; index += 1) {
    obj = {
      tech: ordtech[index],
      name: name
    }
  resultado[index] = obj;
}
} else {
  resultado = "Vazio!";
}
return resultado;
}

//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));


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
