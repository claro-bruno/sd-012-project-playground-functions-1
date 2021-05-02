// Desafio 10
function techList(arrTech, nome1) {
  if (arrTech.length === 0) {
    return 'Vazio!'};
  let arrTechSorted = arrTech.sort();
  let arrObTech = []; 
  for (let index = 0; index < arrTechSorted.length; index += 1) { 
    let objTech = {
      tech: arrTechSorted[index],
      name: nome1,
      };
    arrObTech.push(objTech);  
  }
  return arrObTech;
}
// Desafio 11
function generatePhoneNumber(numeros) {
  if ( numeros.length !== 11){
    return "Array com tamanho incorreto."
  }else{
    for (let index = 0; index < numeros.length; index += 1){
      if (numeros[index] < 0 || numeros[index] > 9 ){
        return "não é possível gerar um número de telefone com esses valores"
      }
    }
    for (let index = 0; index < numeros.length; index += 1){
      let contador = 0;
      for (let index2 = 1; index2 <numeros.length; index2 += 1) {
        if (numeros[index] === numeros[index2]){
          contador += 1;
          if (contador >= 3) {
            return "não é possível gerar um número de telefone com esses valores" };
        }
      }
    }
    let doisPrimeirosNum = '(' + `${numeros[0]}` + `${numeros[1] }`+ ')' + ' ';
    let noveNum = '';
    for(let index = 2; index < numeros.length; index += 1){
      noveNum += `${numeros[index]}`;
    }
    let numTelefone = doisPrimeirosNum + noveNum.slice(0, 5) + '-' + noveNum.slice(5, 9);
    return numTelefone;
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
