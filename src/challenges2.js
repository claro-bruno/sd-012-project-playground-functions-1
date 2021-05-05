// Desafio 10
function techList(arrayTech, name) {
  let list = [];
  arrayTech = arrayTech.sort();

  for (let key in arrayTech) {
    let object = {
      tech: arrayTech[key],
      name: name
    };
    list.push(object);
  };

  if (arrayTech.length === 0) {
    return 'Vazio!'
  }
  else {
    return list;
  };
};

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));



// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lados = lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB;
  
  let medidas = lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB);
  
  return lados && medidas;
};
console.log(triangleCheck(10, 14, 8));
console.log(triangleCheck(5, 5, 20));




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
