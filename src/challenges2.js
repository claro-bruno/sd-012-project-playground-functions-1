// Desafio 10

function techList(arr, name) {
  if(arr.length === 0){
    return 'Vazio!';
  };
  let techList = [];
  for(let index = 0; index< arr.length; index+=1){
    let obj = {};
    obj.tech = arr[index];
    obj.name = name;
    techList.push(obj);
  };

  return techList;
};

// Desafio 11
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

function generatePhoneNumber(arr) {
  let phoneNumber = '';
  for(let index = 0; index < arr.length ; index += 0){
    if(arr[index]===0){
      phoneNumber += ('(' + arr[index]);
    }
  }
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
