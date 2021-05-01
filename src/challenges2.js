// Desafio 10
function techList(tech, name) {
  // seu código aqui
  techs = tech.sort();
  let objLista = [];
  let empty = "Vazio!";
  if (tech.length === 0) {
    return empty;
  } else {
    for (let indexTech = 0; indexTech < techs.length; indexTech += 1) {
    let obj = {
    tech: techs[indexTech],
    name,
    };
    objLista.push(obj);
    };
  return objLista;
  };
};
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Artur"));

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  // seu código aqui
  let result = 0;
  let stringFinal = '';
  if (phoneNumber.length === 0) {
    return 'Array com tamanho incorreto.'
  }
  for (key1 in phoneNumber) {
      result = 0;
      stringFinal = stringFinal.concat(phoneNumber[key1]);
      if (phoneNumber.length !== 11) return 'Array com tamanho incorreto.';
      if (phoneNumber[key1] < 0 || phoneNumber[key1] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
      }
      for (key2 in phoneNumber) {
      if (phoneNumber[key1] === phoneNumber[key2]) {
          result += 1;
      }
      if (result >= 3) return 'não é possível gerar um número de telefone com esses valores';
      };
    };
    return stringFinal.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
};
// console.log(generatePhoneNumber([]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA > (lineB + lineC) || lineA < Math.abs(lineB - lineC)) {
    return false;
  } else if (lineB > (lineA + lineC) || lineB < Math.abs(lineA - lineC)) {
    return false;
  } else if (lineC > (lineB + lineA) || lineC < Math.abs(lineB - lineA)) {
    return false;
  } else {
    return true;
  };
};
// console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(beer, water) {
  // seu código aqui
  drink = beer.replace(/[^0-9]/g, "");
  drinkNumber = parseInt(drink);
  drinkArray = Array.from(String(drinkNumber), Number);
  totalDrinks = 0;
  water = 0;

  for (let indexDrink = 0; indexDrink < drinkArray.length; indexDrink += 1) {
    totalDrinks += drinkArray[indexDrink];
  }
  if (totalDrinks === 0 || totalDrinks === 1) {
    water = totalDrinks;
    return `${water} copo de água`;
  } else {
    water = totalDrinks;
    return `${water} copos de água`;
  }
};
// console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
