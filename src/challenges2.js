// Desafio 10

let object = {};
let resultTechList = []; 

function techList(tech, name) {
  // seu código aqui
  // Código utilizado para entender a questão: 
  // https://github.com/tryber/sd-012-project-playground-functions/pull/98/files

  if (techList.length > 0) {
    let order = [];
    order = tech.sort();
  
    for (let indexTechList = 0; indexTechList < tech.length; indexTechList += 1) {
      
        object = {
          tech: order[indexTechList],
          name: name,
        }

        resultTechList[indexTechList] = object; 
    };
  } else {
      resultTechList = "Vázio!";
  };

  return resultTechList; 
};

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  // seu código aqui
  // Código utilizado para entender a questão: 
  // https://github.com/tryber/sd-012-project-playground-functions/pull/152/files

  if (phoneNumber.length != 11) {
    return ("Array com tamanho incorreto.");
  };

  for (let indexPhoneNumber = 0; indexPhoneNumber < phoneNumber.length; indexPhoneNumber += 1) {
    let numberRepeat = 0; 

    if (phoneNumber[indexPhoneNumber] < 0 || phoneNumber[indexPhoneNumber] > 9) {
      return ("não é possível gerar um número de telefone com esses valores");

    } else {

      for (let indexNumberRepeat = 0; indexNumberRepeat < phoneNumber.length; indexNumberRepeat += 1) {
        
        if (phoneNumber[indexNumberRepeat] == phoneNumber[indexPhoneNumber]) {
          numberRepeat += 1; 
        };

        if (numberRepeat >= 3) {
          return ("não é possível gerar um número de telefone com esses valores");

        };
      };
    };
  };

  return ("(" + phoneNumber[0] + phoneNumber[1] + ") " + phoneNumber[2] + phoneNumber[3] + phoneNumber[4] + phoneNumber[5] + phoneNumber[6] + "-" + phoneNumber[7] + phoneNumber[8] + phoneNumber[9] + phoneNumber[10]);
};

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui

  if (lineA + lineB > lineC && lineA + lineC > lineB && lineB + lineC > lineA && (Math.abs(lineA - lineB) < lineC) && (Math.abs(lineA - lineC) < lineB) && (Math.abs(lineB - lineC) < lineA)) {
    return true; 
  } else {
    return false; 
  };
};

// Desafio 13
function hydrate(water) {
  // seu código aqui
  // Referência para ajudar a resolver: 
  // https://www.w3schools.com/jsref/jsref_parseint.asp

  let sum = 0;
  let number = [];

  for (let indexWater = 0; indexWater < water.length; indexWater += 1) {

    if (water[indexWater] > 0) {
      number = parseInt(water[indexWater]);
      sum = sum + number;
    };
  };

  if (sum === 1) {
    return sum + ' copo de água';

  } else {
    return sum + ' copos de água';
  };
};

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
