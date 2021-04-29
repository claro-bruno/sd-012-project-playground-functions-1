// Desafio 10
function techList(array, name) {
  let object = {};
  let newList = [];
  for (let key in array) {
    object['techName'] = array[key];
    object['name'] = name;
    newList.push(object);
    
  }
  return newList;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));
// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangleLine = [lineA, lineB, lineC];
  triangleLine.sort((a,b) => a - b);
  if((triangleLine[2] < triangleLine[0] + triangleLine[1]) && (triangleLine[2] > Math.abs(triangleLine[0] - triangleLine[1]))) {
    return true;
  } else {
    return false;
  }
  
}
console.log(triangleCheck(10,14,8));
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
