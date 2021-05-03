// Desafio 10
function techList(arrayTech, nameTech) {
  if (arrayTech.length === 0) {
    return 'Vazio!'};
  let arrayTechSort = arrayTech.sort();
  let arrayObjeTech = [];

  for (let index = 0; index < arrayTechSort.length; index += 1){
    let objetoTech = {
      tech: arrayTechSort[index],
      name: nameTech, 
    };
  arrayObjeTech.push(objetoTech);   
  }
  return arrayObjeTech;
}

// Desafio 11
function generatePhoneNumber(lista) {
  if(lista.length != 11 ){
    return "Array com tamanho incorreto";
  } else if(lista.length < 0 || lista.length > 9) {
    return "não é possível gerar um número de telefone com esses valores";
  } 
}

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]

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
