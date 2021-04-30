// Desafio 10
function techList(array, name) {
  if(array[0] === undefined) {
    return 'Vazio!';
  }
  array.sort();
  let newList = [];
  for (let key in array) {
    let object = {};
    object['tech'] = array[key];
    object['name'] = name;
    newList.push(object); 
  }
  return newList;
}

// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length !== 11){
    return 'Array com tamanho incorreto.'
  }
  
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
