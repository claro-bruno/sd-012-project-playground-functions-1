// Desafio 10
function techList(nameTec,name) {
  
 let objetoTech = [];

    if ( nameTec.length > 0 ){
      

      objetoTech.push({
        tech: nameTec,
        name: name
    })
   
    return objetoTech;
  }else{
    return 'Vazio!';
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
