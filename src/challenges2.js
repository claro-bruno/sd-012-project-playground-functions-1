// Desafio 10
function techList(tecnologia, nome) {
// Sort bubble retirado do link: https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-array-e-loop-for/3d453622-6c99-46af-a884-fecc68811230/exercicios/565f9827-b39d-4f06-95ae-419cebb4f782/bonus/24730d5a-f630-4053-81b5-51f6bd110199?use_case=side_bar
  if ((tecnologia.length)==0) { 
    return "Vazio!"
  } else {
        let objetosOrdenados=[];
        for (let index = 1; (index < (tecnologia.length)); index += 1) {
          for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
            if (tecnologia[index] < tecnologia[secondIndex]) {
              let position = tecnologia[index];
              tecnologia[index] = tecnologia[secondIndex];
              tecnologia[secondIndex] = position;
            } 
          }
        }
        for (let key in tecnologia){
          objetosOrdenados[key]={tech: tecnologia[key], name: nome};
        }
        return objetosOrdenados;
       }
}

// Desafio 11
function generatePhoneNumber(arrayNum) {
  let numero="(";
  let checkNum=[0,0,0,0,0,0,0,0,0,0];
  if ((arrayNum.length)!=11) {
    return "Array com tamanho incorreto."
    } else {
    for (index=0;index<(arrayNum.length);index+=1) {
      if (arrayNum[index]>9||arrayNum[index]<0) {
        return "não é possível gerar um número de telefone com esses valores";
      }
      checkNum[arrayNum[index]]+=1;
      switch (index) {
        case 2: 
          numero+=") "+arrayNum[index];
          break;
        case 7: 
          numero+="-"+arrayNum[index];
          break;
        default:
          numero+=arrayNum[index];
      }
    }
    let check=true;
    for (index=0;index<10;index+=1){
        if (checkNum[index]>2) {check=false;index=10}
    }
    if (check==true) {
      return numero;
    } else {
      return "não é possível gerar um número de telefone com esses valores"
    }
    }
  
}
console.log(generatePhoneNumber([1, 2, 9, 4, 5, 7, 7, 8, 9 ,0 ,1]));

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
