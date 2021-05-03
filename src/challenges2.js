// Desafio 10
 //https://www.devmedia.com.br/criando-uma-lista-generica-de-objetos-no-javascript/25564
let tech = [];
function techList(tech, name) {
  tech.sort()
  let objectList = [];
  if (tech.length > 0) {
    for (let techIndex = 0; techIndex < tech.length; techIndex += 1) {
      let objectInput = {tech : tech[techIndex] , name : name}
      objectList[techIndex] = objectInput 
      }
    } else {  
    
    objectList = 'Vazio!'

    }
    return objectList   
  }
// Desafio 11
 //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11 ) {
    return 'Array com tamanho incorreto';
  }
  for (let phoneNumberIndex = 0; phoneNumberIndex < phoneNumber.length; phoneNumberIndex += 1){
    if (phoneNumber[phoneNumberIndex] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else {
      let repeatedValue = 0
      for (let repeatedValueIndex = 0; repeatedValueIndex < phoneNumber.length; repeatedValueIndex +=1) {
        if (s){}
      }
    }
  }

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
