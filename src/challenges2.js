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
  if (phoneNumber.length <= 10 || phoneNumber.length >= 12) {
    return 'Array com tamanho incorreto.';
  }
     for (let phoneNumberIndex = 0; phoneNumberIndex < phoneNumber.length; phoneNumberIndex += 1){
      let repeatedValueCount = 0
      if (phoneNumber[phoneNumberIndex] < 0 || phoneNumber[phoneNumberIndex] >= 10) {
        return 'não é possível gerar um número de telefone com esses valores';
      }else {
      for (let repeatedValueIndex = 0; repeatedValueIndex < phoneNumber.length; repeatedValueIndex +=1){
        if (phoneNumber[repeatedValueIndex] == phoneNumber[phoneNumberIndex]) {
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
function triangleCheck(lineA,lineB,lineC) {
  let subAB = Math.abs(lineA - lineB );
  let subAC = Math.abs(lineA - lineC);
  let subBC = Math.abs(lineB - lineC);
  if (lineA < (lineB + lineC) && lineA > subBC && lineB < (lineA + lineC)
   && lineB > subAC && lineC < (lineA + lineB) && lineC > subAB) {
     return true
   } else {
     return false
   }
}
// Desafio 13
 //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof
   //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
function hydrate(alcoholString) {
  let waterCount = 0
  let alcoholNumber = 0
  let alcoholArrayNumbers = alcoholString.match(/[1-9]/g)
  for (let alcoholIndex = 0; alcoholIndex < alcoholArrayNumbers.length; alcoholIndex += 1) {
    alcoholNumber = parseInt(alcoholArrayNumbers[alcoholIndex], 10)
      waterCount += alcoholNumber
      console.log(waterCount)
  }
  
  console.log(waterCount)
  if (waterCount === 1) {
    return `${waterCount} copo de água`
  } else {
    return `${waterCount} copos de água`
  }
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
