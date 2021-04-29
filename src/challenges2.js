// Desafio 10
function techList(tecnologia, nome) {
  // seu código aqui
  let objLista = [];
  tecnologia = tecnologia.sort();

  for (let i = 0; i < tecnologia.length; i += 1) {
    let obj = {
      tech: 'eita',
      name: nome,
    }
    obj.tech = tecnologia[i];
    objLista.push(obj);
  }
  if (tecnologia.length > 0) {
    return objLista;
  } 
  return 'Vazio!';

}

// Desafio 11
function generatePhoneNumber(n) {
  // seu código aqui
  if (n.length === 11){
    for (let i = 0; i < 11; i += 1){
      let count = 0;
      for ( let j = 0; j < 11; j += 1){
        if(n[i] === n[j]){
          count +=1;
          if (n[j] < 0 || n[j] > 9 || count > 2){
            return 'não é possível gerar um número de telefone com esses valores'
          }
        }
    }
    } return `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`
  }
    return 'Array com tamanho incorreto. '
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  return lineA < lineB + lineC && lineC < lineA + lineB && lineB < lineA + lineC
  && lineA > Math.abs(lineC - lineB) && lineB > Math.abs(lineC - lineA) && 
  lineC > Math.abs(lineB - lineA);
}

// Desafio 13
function hydrate(pedido) {
  // seu código aqui
  let numbers = [];
  let n = pedido.match(/\d/g);
  let aguas = 0;

  for (let i = 0; i < n.length; i += 1) {
    numbers.push(parseInt(n[i]));
  }
  for (let i = 0; i < numbers.length; i += 1) {
    aguas += numbers[i];
  }
  if (aguas > 1) {
    return aguas + ' copos de água';
  } return aguas + ' copo de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
