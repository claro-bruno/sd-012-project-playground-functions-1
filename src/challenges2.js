// Desafio 10
function techList(arr, name) {
  if(arr.length === 0){return "Vazio!"}
  arr.sort();
  let arrRes = [];
  for (let i = 0; i < arr.length; i++){
    arrRes[i] = { tech: arr[i], name: name }
  } 
  return arrRes;
} 

// Desafio 11
function generatePhoneNumber(arr) {
  let errorMsg = "não é possível gerar um número de telefone com esses valores";
  
  //Condicao 1
  if (arr.length !== 11){
    return 'Array com tamanho incorreto.';
  }

  //Condicao 2 e 3
  for (let i = 0; i < arr.length; i++){
    if (arr[i]<0 || arr[i]>9){ return errorMsg; }
  }

  //Condicao 3
  let Repeated = 0;
  for (let i = 0; i < arr.length; i++){
    Repeated = 0;
    for (let j = 0; j < arr.length; j++){
      if (arr[i] == arr[j]){
        Repeated++;
      }
    }
    if (Repeated >= 3){ return errorMsg }
  } 

  //Codigo
  let str = '('
  + arr[0].toString() 
  + arr[1].toString()
  + ') '
  + arr[2].toString()
  + arr[3].toString()
  + arr[4].toString()
  + arr[5].toString()
  + arr[6].toString()
  + '-'
  + arr[7].toString()
  + arr[8].toString()
  + arr[9].toString()
  + arr[10].toString(); 

  return str;
}console.log(generatePhoneNumber([1, 1, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
   if(lineA >= (lineB+lineC)){ return false; }
   if(lineB >= (lineA+lineC)){ return false; }
   if(lineC >= (lineA+lineB)){ return false; }

   if(lineA <= (Math.abs(lineB-lineC))){ return false; }
   if(lineB <= (Math.abs(lineA-lineC))){ return false; }
   if(lineC <= (Math.abs(lineA-lineB))){ return false; }

   return true;
}

// Desafio 13
function hydrate(str) {
  let count = 0
  for (let i = 0; i < str.length; i++){
    if(str[i] === '1'){ count += 1}
    if(str[i] === '2'){ count += 2}
    if(str[i] === '3'){ count += 3}
    if(str[i] === '4'){ count += 4}
    if(str[i] === '5'){ count += 5}
    if(str[i] === '6'){ count += 6}
    if(str[i] === '7'){ count += 7}
    if(str[i] === '8'){ count += 8}
    if(str[i] === '9'){ count += 9}
  }
  if(count === 1){return '1 copo de água' }
  return `${ count } copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
