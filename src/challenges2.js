// Desafio 10
 //https://www.devmedia.com.br/criando-uma-lista-generica-de-objetos-no-javascript/25564
function techList(tech, name) {
  tech.sort();
  let objectList = []
  if (tech === []) {
    return 'Vazio!';
  } else {
    for (let techIndex = 0; techIndex < tech.length; techIndex += 1) {
      let objectInput = {tech : tech[techIndex] , name : name}
      objectList[techIndex] = objectInput 

    }  
  }
    return objectList
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
