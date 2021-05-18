// Desafio 10

function techList(arrayTech, nome) {
    arrayTech.sort();
    let join = [];
    for(let index = 0; index < arrayTech.length; index +=1) {
      let obj = {
        tech: arrayTech[index],
        nome: nome
      };
      join.push(obj); 
    }
    if(arrayTech.length === 0) {
      return 'Vazio!'
    } else {
      return join;
    }
  }
  


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
