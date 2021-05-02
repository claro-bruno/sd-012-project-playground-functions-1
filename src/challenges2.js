// Desafio 10
function techList(arrTech, functionname) {
  // seu código aqui
  if (arrTech.length === 0) {
    return 'Vazio!'
  }
  completeList = [];
  techOrdered = arrTech.sort();
  for (let index = 0; index < techOrdered.length; index += 1) {
    let objectList = {
      tech: techOrdered[index],
      name: functionname
    }
    completeList.push(objectList);
  }
  
  return completeList
  
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Gabriel'))
// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let check = false
  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB)
  || lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
  check = false;
} else{
  check = true;
}

return check;
};
//console.log (triangleCheck(-3, 14, 8))


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
