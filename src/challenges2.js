// Desafio 10
function techList(name, array7) {
  let novaArray = [];

  for (let indiceDaArray7 = 0; indiceDaArray7 < array7.length; indiceDaArray7 += 1) {
    let saidaFuncao = {
      tech: array7[indiceDaArray7],
      nome: name,
    };
    novaArray.push(saidaFuncao);
    if (array7.length === 0) {
      novaArray = 'Vazio!';    
    }
  }  
  return novaArray;
}

// techList('Eder', ['React', 'Jest', 'HTML', 'CSS', 'JavaScript']) 

// console.log(novaArray);

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
