// Desafio 10
function techList(tecnology,name) {
  //o resultado tem que ser uma LISTA gigante com os itens do objeto
  // as tecnologias precisam ser ordenadas
  lista = [];

  for (let index=0 ; index<tecnology ; index +=1){
    let tecnologia{
      tech: tecnology,
      name: name,
    }
  }lista.push(tecnologia);

  return lista;

  // for (let chave in tecnology){
  //   let tecnologias{
  //     tech: tecnology,
  //     nome: name,
  //   }    
  // }

  // lista.push()

 }

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'jose'));


// Desafio 11
function generatePhoneNumber(telefone) {
  let numeros=11;
  for (index = 0 ; index <numeros ; index +=1){
    if(telefone.length<numeros || telefone.length>numeros){
      return console.log("não é possível gerar um número de telefone com esses valores");
    }
    else if(telefone[index]<0 || telefone[index]>9){

    }
  }
}
let lista = [1,4,1,45,5,2,1,1];
let algo = lista[3];
console.log(lista);


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
