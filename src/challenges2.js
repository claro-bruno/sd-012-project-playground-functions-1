// Desafio 10
function techList(nameTec,name) {
  let objetoTech = {
      tech: "nome",
      name: name
  }
 let listObjetoTech = [];

    if ( nameTec.length > 0 ){
    //adiciona uma tecnologia ao objeto
    objetoTech.tech = nameTec;
    //adiciona o objeto ao array listObjetoTech
    listObjetoTech.push(objetoTech);

    return listObjetoTech;
  }else{
    return 'Vazio!';
  }
  
  
}

console.log(techList(''));

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
