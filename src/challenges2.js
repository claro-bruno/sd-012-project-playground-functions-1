const { concatName } = require("./challenges");






// Desafio 10
function techList(lista, nomeT) {
  let listaTech = {};
  lista = lista.sort();
    for(let i = 0; i < lista.length; i++){ 
      listaTech[+[i]] = {tech:lista[i], name:nomeT};
      return listaTech[i];
    }
}
   
// let listaVar = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// let nomeT = "Janderson";
// techList(listaVar, nomeT);











// Desafio 11
function generatePhoneNumber(n) {
  // let outputNumber = [];
  let contador = 0;
  let nnumero = [];

  for(let i = 0; i < n.length; i++);{
      if(n[i] !== number){
        contador++;
        number.push(n[i]);
        // console.log(number);
        // console.log(contador);
      }else{
        // console.log("deu ruim")
      }
    // if(n.length < 10 && n.length >10);{
    //     outputNumber = "Array com tamanho incorreto.";
    // }else{
    //   outputNumber = "("+n[0]+n[1]+")"+" "+n[2]+n[3]+n[4]+n[5]+"-"+n[6]+n[7]+n[8]+n[9];
    // }    
    //  return outputNumber; 
  }
let nu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
generatePhoneNumber(nu);
return result;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

//Desafio 13

function hydrate(botaAlcoolAk) {
  // Separada a string em array
  let arrayHy = botaAlcoolAk.split(" ");
  //  console.log(arrayHy);
  //Empurrar numeros para arrayN
  let arrayN = [];
  for(let indexH = 0; indexH < arrayHy.length; indexH++){
   arrayN.push(Number(arrayHy[indexH]));
  }
  // console.log(arrayN);
  //Soma numeros da ArrayN e joga em glassWaters, mas não funciona 8'(
  let glassWaters = 0;
 for(let iN = 0; iN < arrayN.length; iN++){
    if(arrayN[iN] > 0){
      glassWaters = glassWaters + arrayN[iN];
      } else {
      // console.log("não soma");
      }
    }
    if(glassWaters == 1){
      return glassWaters + " copo de água";
    }else{
    return glassWaters + " copos de água";
    }
}

// hydrate("1 cachaça, 5 cervejas e 1 copo de vinho");

  

module.exports = {
   generatePhoneNumber,
   techList,
   hydrate,
   triangleCheck,
}