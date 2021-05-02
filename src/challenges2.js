// Desafio 10
function techList(arrTech, nome1) {
  if (arrTech.length === 0) {
    return 'Vazio!'}
  let arrTechSorted = arrTech.sort();
  let arrObTech = []; 
  for (let index = 0; index < arrTechSorted.length; index += 1) { 
    let objTech = {
      tech: arrTechSorted[index],
      nome: nome1,
      };
    arrObTech.push(objTech);  
  }
  return arrObTech;
}
// Desafio 11
function generatePhoneNumber(numeros) {
  let doisPrimeirosNum = '(' + `${numeros[0]}` + `${numeros[1] }`+ ')' + ' ';
  let noveNum = '';

  for(let index = 2; index < numeros.length; index += 1){
    noveNum += `${numeros[index]}`;
  }
  
  let numTelefone = doisPrimeirosNum + noveNum.slice(0, 5) + '-' + noveNum.slice(5, 9);
  return numTelefone
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
