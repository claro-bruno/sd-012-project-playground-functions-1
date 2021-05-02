// Desafio 10
function techList(arrTech, nome1) {
  if (arrTech.length === 0) {
    return 'Vazio!'
  }else {
    let arrTechSorted = arrTech.sort(); //ordena o array inicial arrTech
    let arrObjTech = []; //array que irá conter a lista de objetos
    let objTech = {};
    
    for (let index = 0; index < arrTechSorted.length; index += 1) {  // percorre cada elemento do array
      objTech = {
      tech: arrTechSorted[index],
      nome: nome1
      }
      arrObjTech.push(objTech);  
    }
    return arrObjTech;
    }
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
