// Desafio 10
function techList(technologies, name) {
  // seu código aqui
  let techname = [];
  technologies.sort();
  if (technologies.length === 0) {
      return 'Vazio!';
  } else {
      for (let index = 0; index < technologies.length; index += 1) {
          techname.push({ tech: technologies[index], name: name });
      }
      return techname;
  }
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));
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
 console.log(generatePhoneNumber([1,2,3,4,5,5,6,8,9,0,2,9]));
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
//console.log(triangleCheck(-9, 17, 13));
// Desafio 13
function hydrate(drinks) {
  // seu código aqui
    const drink = fn.splitSentence(drinks);
    let sum = 0;
  
    for (let index = 0; index < drink.length; i += 1) {
      const number = parseInt(drink[index], 10);
      if (!Number.isNaN(number)) sum += number;
    }
    return sum === 1 ? `${sum} copo de água` : `${sum} copos de água`;

/*
  let bebida = '';
  let soma = 0;

  for (let index = 0; index < bebida.length; index +=1 ) {
    stringPraInt = parseInt(bebidaQtd[index]);
    soma += stringPraInt;
  }
  if (soma === 1) {
    return "1 copo de água";
  } else {
    return `${soma} copos de água`;
  }*/
}
console.log(hydrate(5));
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
