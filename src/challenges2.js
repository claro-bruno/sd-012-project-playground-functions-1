// Desafio 10
function techList(tecnology, name) {
  // o resultado tem que ser uma LISTA gigante com os itens do objeto
  // as tecnologias precisam ser ordenadas

  let lista = [];// criar lista vazia para colocar os itens
  let ordenada = tecnology.sort();// para ordenar a lista logo no início
  for (let index = 0; index < ordenada.length; index += 1) {
    let tecnologia = {
      tech: tecnology[index], // passar de 1 em 1 conteúdo da tecnology
      name: name,
    };
    lista.push(tecnologia); // empurra itens dentro da lista vazia
  }
  if (ordenada.length == 0) {
    return 'Vazio!';
  }
  return lista;
}
// console.log(techList([], 'jose'));
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'jose'));


// Desafio 11
function generatePhoneNumber(numeros) {
  let maximoNumeros = 11;
  let numeroRepetido = 0;
  
  for (index = 0 ; index <numeros.length ; index +=1) {
    let contadorNumeroRepetido = 0;
    for (index2 =1 ; index2 < numeros.length ; index2 +=1){
      if(numeros[index]===numeros[index2]){
        contadorNumeroRepetido +=1;
      }
    }
    if(numeros.length!=11){ //refatorar porque a gisele pediu
      return "Array com tamanho incorreto.";
    }
    else if(numeros[index]<0 || numeros[index]>9 || contadorNumeroRepetido>=3) {
      return "não é possível gerar um número de telefone com esses valores.";
    }
  }
  return `(${numeros[0]}${numeros[1]})${numeros[2]}${numeros[3]}${numeros[4]}${numeros[5]}${numeros[6]}-${numeros[7]}${numeros[8]}${numeros[9]}${numeros[10]}`;
}

// console.log(generatePhoneNumber([1,2,3,4,5,6,7,8,9,1]));


// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  let ladoA = Math.abs(lineA);
  let ladoB = Math.abs(lineB);
  let ladoC = Math.abs(lineC);
  // if ((ladoC-ladoB)<ladoA< (ladoB+ladoC) && (ladoA-ladoC)<ladoB< (ladoA+ladoC) && ( ladoA-ladoB)<ladoC<(ladoA+ladoB))
  if ((ladoC-ladoB)<ladoA && ladoA < (ladoB+ladoC) && (ladoA-ladoC)<ladoB && ladoB < (ladoA+ladoC) && ( ladoA-ladoB)<ladoC && ladoC<(ladoA+ladoB)){  
    return true;
  }else{
    return false;
  }
}

// console.log(triangleCheck(10, 14, 18));

// Desafio 13
function hydrate(string) {
  let stringSeparada = string.split('');
  let somaNumeros = 0;
  for (index = 0 ; index<stringSeparada.length ; index+=1){
    if(stringSeparada[index]==='1' || stringSeparada[index]==='2' || stringSeparada[index]==='3' ||stringSeparada[index]==='4' ||stringSeparada[index]==='5' || stringSeparada[index]==='6' || stringSeparada[index]==='7' || stringSeparada[index]==='8' || stringSeparada[index]==='9')
    {
      // numeros.push(parseInt(stringSeparada[index]));  
      somaNumeros += parseInt(stringSeparada[index]);
    }  
  }
  if(somaNumeros>1){
    return `${somaNumeros} copos de água`;
  }
  else if(somaNumeros==1){
    return `${somaNumeros} copo de água`;
  }
}

// console.log(hydrate("1 cachaça, 5 cervejas e 2 copo de vinho"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
