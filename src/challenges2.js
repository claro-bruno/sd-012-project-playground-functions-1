// Desafio 10
 //https://www.devmedia.com.br/criando-uma-lista-generica-de-objetos-no-javascript/25564
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
 //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
   //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11 ) {
    return 'Array com tamanho incorreto';
  }
     for (let phoneNumberIndex = 0; phoneNumberIndex < phoneNumber.length; phoneNumberIndex += 1){
      if (phoneNumber[phoneNumberIndex] < 0 || phoneNumber[phoneNumberIndex] >= 10) {
        return 'não é possível gerar um número de telefone com esses valores';
      }else {
      for (let repeatedValueIndex = 0; repeatedValueIndex < phoneNumber.length; repeatedValueIndex +=1){
        let repeatedValueCount = 0
        if (phoneNumber[repeatedValueIndex] === phoneNumber[phoneNumberIndex]) {
          repeatedValueCount += 1
        } if(repeatedValueCount >= 3) {
          return 'não é possível gerar um número de telefone com esses valores'
        }
      }
    }
  }
      let phoneNumber1 = phoneNumber.slice(0,2)
      let phoneNumber1J = phoneNumber1.join('');
      let phoneNumber2 = phoneNumber.slice(2,7)
      let phoneNumber2J = phoneNumber2.join('');
      let phoneNumber3 = phoneNumber.slice(7,11);
      let phoneNumber3J = phoneNumber3.join('');

          return `(${phoneNumber1J}) ${phoneNumber2J}-${phoneNumber3J}`
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
