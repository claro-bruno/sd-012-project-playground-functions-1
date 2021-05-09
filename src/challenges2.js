// Desafio 10
function techList(vetor,name) {
  // seu código aqui
 
  let resultado = []
  vetor.sort()
  let obj = {};
  for(let each in vetor){
    obj ={
      tech: vetor[each],
      name: name
    };
    resultado.push(obj)
  }
if(vetor.length == 0){
  return "Vazio!"
}
else{ 
  return resultado
}
}

// Desafio 11
let phoneNumbers = [3,4,1,2,5,6,7,8,9,1,0];
function generatePhoneNumber(phoneNumbers) {
  // seu código aqui
 if(verificaPhoneNumber(phoneNumbers) == 0){
  let completeNumber = ''
    completeNumber= `(${phoneNumbers[0]}${phoneNumbers[1]}) ${phoneNumbers[2]}${phoneNumbers[3]}${phoneNumbers[4]}${phoneNumbers[5]}${phoneNumbers[6]}-${phoneNumbers[7]}${phoneNumbers[8]}${phoneNumbers[9]}${phoneNumbers[10]}`
  return completeNumber
}else{
  return verificaPhoneNumber(phoneNumbers)
}
}

function verificaPhoneNumber(arrays) {
  if(arrays.length != 11){
  return 'Array com tamanho incorreto.'
  }else {
    let atual = null;
    let count = 0;
    for(let i = 0; i < arrays.length; i += 1) {
      atual = arrays[i]
        if(atual >= 0 && atual <= 9){
          for(let y = 0; y< arrays.length; y += 1) {
            if(atual == arrays[y]) {
              count += 1;
            if(count >= 3) {
              return 'não é possível gerar um número de telefone com esses valores';
            }
            }
          }
        }else{
          return 'não é possível gerar um número de telefone com esses valores';
        }
        count = 0
    }
  }
  return 0
}



console.log(generatePhoneNumber(phoneNumbers))
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
