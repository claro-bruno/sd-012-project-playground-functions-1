// Desafio 10

function techList(arr, name) {
    if(arr.length === 0){
      return 'Vazio!';
    };
    
    arr = sortList(arr);

    let techList = [];
    for(let index = 0; index< arr.length; index+=1){
      let obj = {};
      obj.tech = arr[index];
      obj.name = name;
      techList.push(obj);
    };
  
    return techList;
  };

  function sortList(arr){
    for(let word = 0; word < arr.length; word += 1){
        for(let index = 0; index < arr.length; index += 1){
            if(arr[word] < arr[index]){
                let holder = arr[word];
                console.log(holder)
                arr[word] = arr[index];
                arr[index] = holder;
            };
        };
    };
    return arr;
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
        phoneNumber += (number + ') ');
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

function triangleCheck(lineA, lineB, lineC) {
  if(lineA + lineB > lineC && lineA + lineC > lineB && lineB + lineC > lineA){
    if(Math.abs(lineA - lineB) < lineC && Math.abs(lineA - lineC) < lineB && Math.abs(lineB - lineC) < lineA){
      return true;
    };
  }else{
    return false;
  };
};

// Desafio 13

function hydrate(order) {
  let numOfOrders = order.match(/\d+/g);
  let waterCups = 0;
  for(let index = 0; index < numOfOrders.length; index += 1){
    waterCups += parseInt(numOfOrders[index]);
  };
  if(waterCups === 1){
    return `${waterCups} copo de água`;
  }else{
    return `${waterCups} copos de água`;
  };
  
};

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
