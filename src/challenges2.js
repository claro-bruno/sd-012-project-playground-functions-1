// Desafio 10
function techList(technologies, name) {
  // seu código aqui
  let techname = [];
  technologies.sort();

  if (technologies.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < technologies.length; index += 1) {
    techname.push({ tech: technologies[index], name: name });
  }
  return techname; 
}
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
// Desafio 11
function generatePhoneNumber(foneNumber) {
  // seu código aqui
  let counter;
  let prefix = (`${foneNumber[0]}${foneNumber[1]}`);
  let numberBegin = `${foneNumber[2]}${foneNumber[3]}${foneNumber[4]}${foneNumber[5]}${foneNumber[6]}`;
  let numberFinal = `${foneNumber[7]}${foneNumber[8]}${foneNumber[9]}${foneNumber[10]}`;

  if (foneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < foneNumber.length; index += 1) {
    if (foneNumber[index] < 0 && foneNumber[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let indexCheck = 0; indexCheck < foneNumber.length; indexCheck += 1) {
    for (let indexCompare = 0; indexCompare < foneNumber.length; indexCompare += 1) {
      if (foneNumber[indexCheck] === foneNumber[indexCompare]) {
        counter += 1;
      }
    }
    if (counter >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    counter = 0;
  }
  return `(${prefix}) ${numberBegin}-${numberFinal}`;
}
// console.log(generatePhoneNumber([1,2,3,4,5,5,6,8,9,0,2,9]));
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < (lineB + lineC) && (lineB < (lineA + lineC)) && (lineC < (lineA + lineB))) {
    if (lineA > Math.abs(lineB - lineC) && (lineB > Math.abs(lineA - lineC)) && (lineC > Math.abs(lineA - lineB))) {
      return true;
    }
  }
  return false;
}
// console.log(triangleCheck(-9, 17, 13));
// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  let numberDrinks = drinks.replace(/\D/g, '');
  let sumDrinks = 0;

  numberDrinks = numberDrinks.split('');

  for (let indice = 0; indice < numberDrinks.length; indice += 1) {
    sumDrinks += parseInt(numberDrinks[indice]);
  } if(sumNumberDrinks === 1) {
    return `${sumDrinks} copo de água`;
  } else {
    return `${sumDrinks} copos de água`;
  }
}
// console.log(hydrate(5));
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
