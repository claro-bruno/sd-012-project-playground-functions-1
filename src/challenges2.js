// Desafio 10
function techList(techObj, nome) {
  if (techObj.length === 0) {
    return ('Vazio!')
  }
  else {
    let result = [];
    let tecnologias = techObj.sort();
    for (let chave in tecnologias) {
      let objeto = {};
      objeto.tech = tecnologias[chave];
      objeto.name = nome;
      result.push(objeto);
    }
    return result;
}
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));

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
