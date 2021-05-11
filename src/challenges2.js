// Desafio 10
function techList(tecnologias,name) {
  let aprendizados = {}
  let conhecimento = []
  let linguagens = tecnologias.sort()
    for (let index = 0; index < linguagens.length; index +=1 ){
    aprendizados = {
      tech: linguagens[index],
      name: name
    };
    conhecimento.push(aprendizados)
    }
  return conhecimento
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Marcela"));



// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
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
