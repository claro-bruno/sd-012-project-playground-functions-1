// Desafio 10
function techList(tecnology,name) {
  //o resultado tem que ser uma LISTA gigante com os itens do objeto
  // as tecnologias precisam ser ordenadas

  let lista = [];//criar lista vazia para colocar os itens
  let ordenada = tecnology.sort();//para ordenar a lista logo no início
  for (let index=0 ; index<ordenada.length ; index +=1){
    tecnologia = {
      tech: tecnology [index],//passar de 1 em 1 conteúdo da tecnology
      name: name,
    }    
    lista.push(tecnologia);//empurra itens dentro da lista vazia
  }  
  if(ordenada.length==0){
    return 'Vazio!'; //não pode colocar console.log porque CREIO que o output precisa ser somente o resultado das listas e não uma frase (achei meio estranho mas acredito ser isso)
   }
  return lista;
}
console.log(techList([], 'jose'));
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'jose'));


// // Desafio 11
// function generatePhoneNumber(numeros) {
//   let maximoNumeros=11;
//   for (index = 0 ; index <numeros.length ; index +=1){
//     if(numeros.length<maximoNumeros || numeros.length>maximoNumeros){
//       return ("Array com tamanho incorreto.");
//     }
//     else if(numeros[index]<0 || numeros[index]>9) {
//       return ("não é possível gerar um número de telefone com esses valores");
//     }
//   }
//   return (`(${numeros[0]}${numeros[1]})${numeros[2]}${numeros[3]}${numeros[4]}${numeros[5]}${numeros[6]}-${numeros[7]}${numeros[8]}${numeros[9]}${numeros[10]}`);
// }

// console.log(generatePhoneNumber([2,1,9,9,0,3,5,3,2,1,9]));


// Desafio 11
function generatePhoneNumber(numeros) {
  let maximoNumeros=11;
  let numeroRepetido=0;
  
  for (index = 0 ; index <numeros.length ; index +=1){
    let contadorNumeroRepetido=0;
    for (index2 =1 ; index2 < numeros.length ; index2 +=1){
      if(numeros[index]===numeros[index2]){
        contadorNumeroRepetido +=1;
      }
    }
    if(numeros.length<maximoNumeros || numeros.length>maximoNumeros){
      return ("Array com tamanho incorreto.");
    }
    else if(numeros[index]<0 || numeros[index]>9 || contadorNumeroRepetido>=3) {
      return ("não é possível gerar um número de telefone com esses valores");
    }
  }
  return (`(${numeros[0]}${numeros[1]})${numeros[2]}${numeros[3]}${numeros[4]}${numeros[5]}${numeros[6]}-${numeros[7]}${numeros[8]}${numeros[9]}${numeros[10]}`);
}

console.log(generatePhoneNumber([2,1,9,9,0,3,5,3,2,1,8]));






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
