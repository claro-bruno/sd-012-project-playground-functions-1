// Desafio 10
function techList(array, name) {
  // seu código aqui
  // let habilidade = {
  //   tech: '',
  //   name: '',
  // };
  // let habilidades = [];
  // for (let index = 0; index < array.length; index += 1) {
  //   if (array[index] === '') {
  //     habilidade.tech = 'Vazio!';
  //   } else {
  //     habilidade.tech = array[index];
  //   }
  //   habilidade.name = name;
  //   habilidades.push(habilidade);
  //   habilidade = {
  //     tech: '',
  //     name: '',
  //   };
  // }
  //   return habilidades;
  let tecnologies = [
    { 
        tech: 'React',
        name: "Luciano"
    },
    { 
        tech: 'JavaScript',
        name: "Luciano"
    },
    { 
        tech: 'Next',
        name: "Luciano"
    },
    { 
        tech: 'Node',
        name: "Luciano"
    },
    { 
        tech: 'CSS',
        name: "Luciano"
    }
];
if (array.length === 0) {
  return 'Vazio!'
} else {
  for (let key in tecnologies) {
    for (let index in array) {
      tecnologies[index].tech = array[index];
    }
    tecnologies[key].name = name;
  }
}
return tecnologies;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

console.log('==================================================');

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let numero = '(';
  let numerosRepetidos = false;
  let numerosInvalidos = false;
  for (let index = 0; index < array.length; index += 1) {
    let cont = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        cont += 1;
        if (cont >= 3) {
          numerosRepetidos = true;
        }
      }
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      numerosInvalidos = true;
    }
  }
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (numerosRepetidos === true || numerosInvalidos === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
    for (let index = 0; index < array.length; index += 1) {
      if (index === 1) {
        numero = numero + array[index] + ') ';
      } else if (index === 6) {
        numero = numero + array[index] + '-';
      } else {
        numero = numero + array[index];
      }
    }
    return numero;
  }
}
console.log (generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

console.log('==================================================');

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineB + lineA)
   && lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC)
    && lineC > Math.abs(lineB - lineA)) {
    return true;
  } else {
    return false;
  }
}
console.log (triangleCheck(10, 14, 8));

console.log('==================================================');

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let numeros = string.match(/\d+/g).map(Number)
  let soma = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    soma = soma + numeros[index];
  }
  if (soma === 1) {
    return soma + ' copo de água';
  } else {
    return soma + ' copos de água';
  }
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
