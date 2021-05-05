// Desafio 10
function techList(arrayTech, name) {
  let ordenada = arrayTech.sort();
  let resposta = [];
  
  if(ordenada.length === 0){
    resposta = 'Vazio!';

  }else{
    for(let value of ordenada){
      let objeto = {};
      objeto['tech'] = value;
      objeto['nome'] = name;
      resposta.push(objeto);
    };
  }

  return resposta;
  
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],'Lucas'));



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
