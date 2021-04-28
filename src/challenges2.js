// Desafio 10
function bubbleSort(array){
  for(let bubble = 0; bubble < array.length - 1; bubble += 1){
    for(let index = 0; index < array.length - bubble - 1; index += 1){
        if(array[index] > array[index + 1]){
            [array[index], array[index + 1]] = [array[index + 1], array[index]];
        }
    }
  }
  return array;
}
// let array = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// console.log(bubbleSort(array));

function techList(technologies, name) {
  let sortedTechnologies = [];
  let objectList = [];
  if(array.length === 0){
    return 'Vazio!';
  }
  else{
    sortedTechnologies = bubbleSort(technologies);
    for(item of sortedTechnologies){
      let objectInsertion = {"tech": item, "name": name};
      objectList.push(objectInsertion);
    }
  }
  return objectList;
}
// let array = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// let name = 'Lucas';
// console.log(techList(array,name));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
