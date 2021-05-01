// Desafio 10
function techList(array, nome) {
  let obj =[];
let arrayOrdenado=array.sort()
  if (arrayOrdenado.length > 0) {
    for (let i = 0; i < arrayOrdenado.length; i += 1) {
      obj[i] = { tech: arrayOrdenado[i], name: nome };
    }
    return obj;
  } else {
    return 'Vazio!';
  }
}




// Desafio 11
function generatePhoneNumber(array) {
  let saida='';
      for (let n of array) {
        let contador = 0;
          for (let c of array) {
            if (n === c) {
              contador += 1;
            }
          }
          if(array.length!=11){
            saida='Array com tamanho incorreto.';
          }
          else if(array[n]>9 || array[n]<0 || contador>=3){
            saida='não é possível gerar um número de telefone com esses valores';
          }
          else{
            saida='('+array[0]+array[1]+') '+array[2]+array[3]+array[4]+array[5]+array[6]+'-'+array[7]+array[8]+array[9]+array[10];
          }
      }
      
      

  return saida; 
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))


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
