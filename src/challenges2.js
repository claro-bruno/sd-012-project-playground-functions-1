// Desafio 10
function techList(arrayTec, name) {
  if (arrayTec.length === 0) return 'Vazio!';
  arrayTec.sort();
  let object;
  let newList = [];
  for (let i = 0; i < arrayTec.length; i += 1) {
    object = {};
    object.tech = arrayTec[i];
    object.name = name;
    newList.push(object);
  }
  return newList;
}
// Desafio 11.1
function validatePhone(phoneNum){
  if (phoneNum.length !== 11) return 'Array com tamanho incorreto.';
  for (let i in phoneNum){
    if (phoneNum[i] < 0 || phoneNum[i] > 9) return 'não é possível gerar um número de telefone com esses valores';
    let contRep = 0;
    let numCurrent = phoneNum[i];
    for (let i2 in phoneNum){
      if (numCurrent === phoneNum[i2]) contRep += 1;
    }
    if (contRep > 2) return 'não é possível gerar um número de telefone com esses valores';
  }
  return phoneNum;
}
// Desafio 11
function generatePhoneNumber(phoneNum) {
  
  if(validatePhone(phoneNum)){
    let string = validatePhone(phoneNum);
    let newString = ['('];
    for (let i = 0; i < string.length; i += 1) {
      if (i === 2) newString.push(')');
      if (i === 6) newString.push('-');
      newString.push(string[i]);
    }
    newString = newString.toString();
    newString = newString.replace(/,/g, '');
    return newString
  }
  console.log('Foi eu 2');
  return validatePhone(phoneNum);
  
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
