// Desafio 10 - POR FINALIZAR
function techList(arrayNomeTech, name) {
  if (arrayNomeTech === '') {
    return "Vazio!";
  }

  let lista = [];
   for (let key in arrayNomeTech) {
      lista.push(
      {
        tech: arrayNomeTech[key],
        name: name
      } 
      )
   }
   
  lista.sort(function(a,b) {
    return a.tech < b.tech ? -1 : a.tech > b.tech ? 1 : 0;
});

  return lista;


// Desafio 11
function generatePhoneNumber(numbers){
  let format = "(xx) xxxxx-xxxx";
  
  for(let index = 0; index < numbers.length; index += 1)
  {
    format = format.replace('x', numbers[index]);
  }
  
  return format;
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
