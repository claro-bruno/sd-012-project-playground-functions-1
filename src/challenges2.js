// Desafio 10
function techList(arrTech, nome) {

  if (arrTech === []) {
    return 'Vazio!'
  } else {
    let arrTechSorted = arrTech.sort();
    const objTech = {};

    for (let tech of arrTechSorted){
      objTech['tech'] = tech;
      objTech['nome'] = nome;
    }
    return objTech  
  }
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

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
