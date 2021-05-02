// Desafio 10
function techList(arrTech, nome1) {
  if (arrTech.length === 0) {
    return 'Vazio!'}

  let arrTechSorted = arrTech.sort();
  let arrObjTech = []; 
  for (let index = 0; index < arrTechSorted.length; index += 1) { 
    let objTech = {};
    objTech = {
      tech: arrTechSorted[index],
      nome: nome1,
      };
    arrObjTech.push(objTech);  
    }
  return arrObjTech;
}
// Desafio 11
function generatePhoneNumber(numeros) {

  let doisPrimeirosNum = '(' + `${numeros[0]}` + `${numeros[1] }`+ ')';
  let noveNum = ''

  for(let index = 2; index < numeros.length; index += 1){
      noveNum += `${numeros[index]}`;
    }
  let numTelefone = doisPrimeirosNum + ' ' + noveNum;
  return numTelefone;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
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
