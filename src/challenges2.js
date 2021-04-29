// Desafio 10
function techList(arr, name) {
  arr.sort();
  let finalList = [];

  for (let index = 0; index < arr.length; index += 1) {
    let objeto = {
      tech: arr[index],
      name: name
    }
    finalList.push(objeto);
  }
  if (arr.length == 0) {
    return 'Vazio!'
  } else {
    return finalList;
  };
};

// Desafio 11
function generatePhoneNumber(arr) {

  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.'
  }

  for (let index = 0; index <= arr.length; index += 1) {
    if (arr[index] < 0 || arr[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (let index = 0; index <= arr.length; index += 1) {
    let count = 0;
    for (let index2 = 0; index2 < arr.length; index2 += 1) {
      if (arr[index] == arr[index2]) {
        count += 1;
          if (count >= 3) {
            return 'não é possível gerar um número de telefone com esses valores';
          }
      }
    }
  }
  return `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sideA = lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
  let sideB = lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);
  let sideC = lineC < lineB + lineA && lineC > Math.abs(lineA - lineB);

  if (sideA == true && sideB == true && sideC == true) {
    return true;
  } else {
    return false;
  }
}
console.log(triangleCheck(10, 14, 8))

// Desafio 13
function hydrate(str) {
  let glassesOfWater = 0;
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let index = 0; index < str.length; index += 1) {
    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
      if (parseInt(str[index]) == numbers[index2]) {
        glassesOfWater += numbers[index];
      }
    }
  }
  if (glassesOfWater > 1) {
    return `${glassesOfWater} copos de água`;
  } else {
    return `${glassesOfWater} copo de água`;
  }
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
//   let glassesOfWater = 0;
//   let reg = /\d+/g;
//   let result = str.match(reg);
//   for (let index = 0; index < result.length; index += 1){
//     glassesOfWater += parseInt(result[index]);
//   }
//   if (glassesOfWater > 1) {
//     return `${glassesOfWater} copos de água`;
//   } else {
//     return `${glassesOfWater} copo de água`;
//   }
// }

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
