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
        return objetosOrdenados
       }
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
