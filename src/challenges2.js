// Desafio 10
function techList(list, name) {
  // seu código aqui
  if (list.length < 1){
    return "Vazio!"
  }
  list.sort();

  let listObjects = [];
  for (let hability of list){
    let objHability = {
      tech : hability ,
      name : name ,
    };
    listObjects.push(objHability);
  };
  return listObjects;
}

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

// let disc = {
//   obj1 : "abc", obj2 : "acb", obj3 : "aabc"
// };

// // for(let obj in disc){
// //   console.log(disc[obj]);
// // };

// let list = [];

// for (let item in disc){
//   list.push(disc[item]);
// }
// list.sort();
// console.log(list);
