// Desafio 10
function techList(tecnology,name) {
  //o resultado tem que ser uma LISTA gigante com os itens do objeto
  // as tecnologias precisam ser ordenadas

  let lista = [];//criar lista vazia para colocar os itens
  let ordenada = tecnology.sort();//para ordenar a lista logo no início
  for (let index=0 ; index<ordenada.length ; index +=1){
    tecnologia = {
      tech: tecnology [index],//passar de 1 em 1 conteúdo da tecnology
      nome: name,
    }    
    lista.push(tecnologia);//empurra itens dentro da lista vazia
  }  
  if(ordenada.length==0){
    return console.log('Vazio!');
   }
  return lista;
}
console.log(techList([], 'jose'));
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'jose'));


// Desafio 11
function generatePhoneNumber(numeros) {
  let maximoNumeros=11;
  for (index = 0 ; index <numeros.length ; index +=1){
    if(numeros.length<maximoNumeros || numeros.length>maximoNumeros){
      return console.log("não é possível gerar um número de telefone com esses valores");
    }
    else if(numeros[index]<0 || numeros[index]>9){
    }
  }
  return numeros[index]
}

console.log(generatePhoneNumber([1,4,1,4,5,2,1,1,2,1,3]));


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
