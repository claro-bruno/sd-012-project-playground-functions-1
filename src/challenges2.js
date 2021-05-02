// Desafio 10
function techList(nameTec,name) {
  
  if (nameTec.length === 0) {
    return 'Vazio!';
  }
  let objeto = [];
  for (let index = 0; index < nameTec.length; index += 1) {
    objeto.push({
      tech: nameTec[index],
      name: name
    });
    
  }
  return objeto;
}
  
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
"Lucas"));


  
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
