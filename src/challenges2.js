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
  if(array.length!=11){
    return 'Array com tamanho incorreto.';
  }
  else{
        for (let n of array) {
        let contador = 0;
          for (let c of array) {
            if (n === c) {
              contador += 1;
            }
          }          
          if(n<0 || n>9 || contador>=3){
            return 'não é possível gerar um número de telefone com esses valores';
          }
        }
        saida='('+array[0]+array[1]+') '+array[2]+array[3]+array[4]+array[5]+array[6]+'-'+array[7]+array[8]+array[9]+array[10];
        return saida;
      }

}


// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  let saida=Boolean;
  let validaA=Boolean;
  let validaB=Boolean;
  let validaC=Boolean;
  if(lineA<lineB+lineC && lineA>Math.abs(lineB-lineC)){
    validaA=true;
  }
  else{
    validaA=false;
  }
  console.log(validaA)
  if(lineB<lineA+lineC && lineB>Math.abs(lineA-lineC)){
    validaB=true;
  }
  else{
    validaB=false;
  }
    console.log(validaB)
   if(lineC<lineB+lineA && lineC>Math.abs(lineA-lineC)){
    validaC=true;
  }
  else{
    validaC=false;
  }
    console.log(validaC)
  if(validaA==true && validaA==validaC){
    saida=true;
  }
  else{
    saida=false;
  }
  return saida;
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
