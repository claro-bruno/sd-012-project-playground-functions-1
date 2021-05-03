// Desafio 10
function techList(arrayTech, name) {
  let arraySort = arrayTech.sort();
  let output = [];
  if (arrayTech.length === 0) {
    return 'Vazio!';
  } else {
    for ( let key of arraySort) {
      let objOutput = {
        tech: key,
        name: name,
      };
      output.push(objOutput);
    }
    return output;
  }
  
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let format = "(xx) xxxxx-xxxx";
  
  if (numbers.length !== 11 ) {
    return 'Array com tamanho incorreto.';
  }  
  for ( let key in numbers) {
    if (numbers[key] < 0 || numbers[key] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }  
  }
  let count = 0;
  for (let key in numbers) {
    for (let key2 in numbers) {
      if (numbers[key] === numbers[key2]) {
        count += 1;
      }
    }
    if (count > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    count = 0;
  }
  for(let index = 0; index < numbers.length; index += 1) {
    format = format.replace('x', numbers[index]);
  }

  return format;
} 

// Desafio 12
function teste1(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) {
    return false;
  }
  return true;
} 

function teste2(lineA, lineB, lineC) {
  if (lineB > lineC + lineA || lineB < Math.abs(lineC - lineA)) {
    return false;
  }
  return true;
}

function teste3(lineA, lineB, lineC) {
  if (lineC > lineA + lineB || lineC < Math.abs(lineA - lineB)) {
    return false;
  }
  return true;
}

function triangleCheck(lineA, lineB, lineC) {
  let a = teste1(lineA, lineB, lineC);
  let b = teste2(lineA, lineB, lineC);
  let c = teste3(lineA, lineB, lineC);
  return a && b && c;
} 

// Desafio 13
function hydrate(bebida) {
  let cupOfWater = 0;
  let regex = /\d+/g; 
    for (let value of Object.values(bebida)) {
      if (value.match(regex)) {
        cupOfWater += parseInt(value.match(regex));
      }
    }
    if (cupOfWater === 1) {
      return '1 copo de água';
    }
    return `${cupOfWater}` + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};