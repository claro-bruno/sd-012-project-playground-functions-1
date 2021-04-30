// Desafio 10
function techList(techNames,personName) {
  let secondList = [];
  if(techNames.length === 0){
    return "Vazio!";
  } else {
    let firstList = techNames.sort();
    for (let index = 0; index < firstList.length; index += 1) {
      secondList.push(
        {
        tech: firstList[index],
        name: personName,
      },);
    }
    return secondList;
  }
}




// Desafio 11
function generatePhoneNumber(numbers) {
  for (let counter = 0; counter < numbers.length; counter +=1) {    
    if (numbers[counter] < 0) {
      let counter2 = counter2 +1;
      if (counter2 !== 0) {
      return "não é possível gerar um número de telefone com esses valores";
      }
    } else if (numbers[counter] > 9) {
      let counter3 = counter3 +1;
      if (counter3 !== 0) {
      return "não é possível gerar um número de telefone com esses valores";
      return ""
      }
    } else if (numbers.length !== 11) {
      return "Array com tamanho incorreto.";
    } else {
      return "Tudo ok";
    }  
  }
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16, 12]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let isTriangle = false;
  if((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) {
    isTriangle = true;
  } else if ((lineB < lineA + lineC ) && (lineB > Math.abs(lineB - lineA))){
    isTriangle = true;
  } else if ((lineC < lineB + lineA ) && (lineC > Math.abs(lineA - lineB))){
    isTriangle = true;
  } else {
    isTriangle = false;
  }
  return isTriangle;
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
