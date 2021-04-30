//função auxiliar para o desafio 11:

const quantidadeDeRepeticao = (arr) => {
  arr.forEach(element => {
    const repetition = 0;
    arr.forEach(item => {
      repetition++
    })
  })
}

// Desafio 10
function techList(arr, name) {

  let result = [];
  arr = arr.sort();
  if (arr.length == 0) {
    return 'Vazio!';
  };

  arr.forEach(element => {
    function CreateObj(element, name) {
      return {
        tech: element,
        name: name
      }
    }

    const obj = new CreateObj(element, name);

    result.push(obj);
  });

  return result;
}

// Desafio 11
function generatePhoneNumber(numberArr) {

  if (numberArr.length != 11) {
    return 'Array com tamanho incorreto';
  };

  numberArr.forEach(element => {
    let repetition = 0;
    numberArr.forEach(number => {
      if (element === number) {
        repetition++;
      } if (repetition === 3 || ((element || number) < 0) || ((element || number) > 9))
        return 'não é possível gerar um número de telefone com esses valores';
    });
  });

  numberArr.unshift('(');
  numberArr.splice(3, 0, ')');
  numberArr.splice(4, 0, ' ')
  numberArr.splice(9, 0, '-');
  return numberArr.join('');

}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return (lineA < (lineB + lineC)) && lineA > (Math.abs(lineB - lineC));
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
