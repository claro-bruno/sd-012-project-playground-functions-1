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

function generatePhoneNumber(arr) {

  let validate = isValid(arr);

  if(validate.isValid === true){
    let phoneNumber = '';

    for(let index = 0; index < arr.length ; index += 1){
      let number = arr[index];

      if(index === 0){
        phoneNumber += ('(' + number);
      }else if(index === 1){
        phoneNumber += (number + ')');
      }else if(index === 6){
        phoneNumber += (number + '-');
      }else{
        phoneNumber += number;
      };
    };

    return phoneNumber;
  }else{
    return validate.reason;
  };
};

function isValid(arr){

  let validate = {
    isValid: true,
  };

  if(arr.length != 11){
    validate.isValid = false;
    validate.reason = 'Array com tamanho incorreto.';
  }else{
    for(let num = 0; num < arr.length; num += 1){
      let count = 0;

      for(let index = 0; index < arr.length; index += 1){
        if(arr[num] ===  arr[index]){
          count += 1;
        };
      };

      if(count >= 3 || arr[num] > 9 || arr[num] < 0){
        validate.isValid = false;
        validate.reason = 'não é possível gerar um número de telefone com esses valores';
      };
    };
  };

  return validate;
};

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
