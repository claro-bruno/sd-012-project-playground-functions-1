// Desafio 10
function techList(arrayNomeTech, name) {
  if (arrayNomeTech !== '[]') {
    return 'Vazio!';
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
function generatePhoneNumber(numbers) {
  let format = "(xx) xxxxx-xxxx";
  
  if (numbers.length !== 11 ) {
    return "Array com tamanho incorreto.";
  }  
  for ( let key in numbers) {
    if (numbers[key] < 0 || numbers[key] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }  
  }
  let count = 0;
  for (let key in numbers) {
    for (let key2 in numbers) {
      if (numbers[key] === numbers[key2]) {
        count += 1;
      }
    }
    if (count > 2) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    count = 0;
  }
  for(let index = 0; index < numbers.length; index += 1) {
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