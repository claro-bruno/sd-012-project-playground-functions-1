// Desafio 10
function techList(stack, person) {
  let stackName = [];
  stack.sort();
  for (let index = 0; index < stack.length; index += 1) {
    stackName.push({
      tech: stack[index],
      name: person
    });
  }
  if (stackName >= 0) {
    return 'Vazio!'
  } else {
    return stackName;
  }
}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));


// Desafio 11
function generatePhoneNumber(phone) {
  phoneFormat = "(xx) xxxxx-xxxx";
  if (phone.length !== 11) {
    return "Array com tamanho incorreto.";
  }

  for (let index = 0; index < phone.length; index += 1) {
    if (phone[index] < 0 || phone[index] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  count = 0;
  for (let index in phone) {
    for (let index2 in phone) {
      if (phone[index] === phone[index2]) {
        count += 1;
      }
    }
    if (count > 2) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    count = 0;
  }
  for (let index = 0; index < phone.length; index += 1) {
    phoneFormat = phoneFormat.replace('x', phone[index]);
  }


  return phoneFormat;
}

console.log(generatePhoneNumber([1, 2, 3, 2, 4, 3, 6, 7, 8, 9, 7]));


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  trianguloA = lineA > Math.abs(lineB - lineC) && lineA < lineB + lineC;
  trianguloB = lineB > Math.abs(lineA - lineC) && lineB < lineA + lineC;
  trianguloC = lineC > Math.abs(lineA - lineB) && lineC < lineA + lineB;
  return trianguloA && trianguloB && trianguloC


}

// Desafio 13
function hydrate(pubTrybe) {

  let drinks = (pubTrybe.match(/\d+/g)); // Retira os caracteres alfanuméricos
  let totalDrinks = 0;

  for (let index = 0; index < drinks.length; index += 1) {

    totalDrinks += parseInt(drinks[index]);

  }
  if (totalDrinks === 1) {
    return `${totalDrinks} copo de água`
  } else {
    return `${totalDrinks} copos de água`
  }

}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
