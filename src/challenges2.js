// Desafio 10
function techList(techs, name) {
  // let techs = new Object();
  let outputArray = [];

  for (let index = 0; index < techs.length; index += 1){
    outputArray.push(new Object());
    outputArray[index].tech = techs[index];
    outputArray[index].name = name;
  }
  return outputArray;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));





// let techs = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// let name = "Lucas";


































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
