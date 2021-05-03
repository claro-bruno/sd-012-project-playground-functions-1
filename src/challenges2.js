// Desafio 10
function techList(array, name) {
  
  let res = []
  array.sort()

  if(!array){
    return 'Vazio!'
  }
  else{
    for (let techs of array){
      res.push({
        tech: techs,
        name: name
      })
    }
  
    return res
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
