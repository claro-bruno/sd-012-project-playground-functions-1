// Desafio 10
function techList(arrayTech, name){
  let arraySort = arrayTech.sort();
  let saida = [];
  if (arrayTech.length === 0){
    return 'Vazio!';
  } else { 
    for(let key of arraySort){
      let objetoSaida = {
      tech: key,
      name: name,
    };
    saida.push(objetoSaida);
    }
    return saida;
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
