// Desafio 10
function techList(tecnologias, name) {
  let aprendizados = {};
  let conhecimento = [];
  let linguagens = tecnologias.sort();
  if (linguagens.length === 0){
    return ("Vazio!")
  }
  for (let index = 0; index < linguagens.length; index += 1 ){
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
  let// seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let soma = lineA + lineB + lineC
  if (soma )
}

console.log(triangleCheck(10,14,8))

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
