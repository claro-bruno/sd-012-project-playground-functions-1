// Desafio 10
function techList(tec, nome) {
  // seu código aqui
  let obj = [];

  if (tec.length === 0) {
      return 'Vazio!';
  } else {
      for (let index = 0; index < tec.length; index += 1) {
          let tch = {
              tech: tec[index],
              name: nome
          }

          obj.push(tch);                    
      }
  }

  return obj;
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
function hydrate(text) {
  // seu código aqui
  let numbers = text.replace(/[^0-9]/g,'');
            let valor = 0 ;

            for (let index = 0; index < numbers.length; index += 1) {
                 valor = valor + parseInt(numbers[index]);                        
            }

            if (valor !== 0) {
                if (valor === 1) {
                    return "1 copo de água";
                } else {
                    return valor + ' copos de água';
                }
            } 
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
