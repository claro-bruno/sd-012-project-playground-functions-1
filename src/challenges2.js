// Desafio 10
function techList(tecnologias, name) {
  let aprendizados = {};
  let conhecimento = [];
  let linguagens = tecnologias.sort();
  if (linguagens.length === 0){
    return ("Vazio!")
  }
  for (let index = 0; index < linguagens.length; index += 1 ){
    aprendizados = {
      tech: linguagens[index],
      name: name
    };
    conhecimento.push(aprendizados)
    }
  return conhecimento
}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Marcela"));

// Desafio 11
function generatePhoneNumber(telefone) {
let numeros = telefone

if (numeros.length < 11 || numeros.length > 11){
  return "Array com tamanho incorreto."
}

for(let index = 0; index < numeros.length; index +=1){
  if(numeros[index] < 0 || numeros[index] > 9){
    return "não é possível gerar um número de telefone com esses valores"
  }
  for(let index2 = inicio+1; index2 < numeros.length; index2 +=1){
  // if (numeros[index] == index2[index2]){
  //   cont +=1;
  }
}
}
if (cont > 3){
  return "não é possível gerar um número de telefone com esses valores"
}
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let somaAB = lineA+lineB
  let somaAC = lineA+lineC
  let somaBC = lineB+lineC

  let diferencaAB = lineA-lineB
  let diferencaAC = lineA-lineC
  let diferencaBC = lineB-lineC

  if (somaAB > lineC && Math.abs(diferencaAB) > lineC){
    return false
  }  if (somaAC > lineB && Math.abs(diferencaAC) > lineB){
    return false
  }  if (somaBC > lineA && Math.abs(diferencaBC) > lineC){
    return false
} else { return true}
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
