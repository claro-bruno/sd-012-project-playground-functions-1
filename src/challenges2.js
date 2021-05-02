// Desafio 10
function techList(name, array7) {
  novaArray = [];
 
  for (indiceDaArray7 = 0; indiceDaArray7 < array7.length; indiceDaArray7 =+ 1 ) {
    saidaFuncao = {
      tech: array7[indiceDaArray7], 
      nome: name


    };
    novaArray.push(saidaFuncao);


  }
  return novaArray;
}

//techList("Eder", ["React", "Jest", "HTML", "CSS", "JavaScript"]) 

//console.log(novaArray);

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
