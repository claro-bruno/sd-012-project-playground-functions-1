function techList(name, array7) {
  novaArray = [];
  // Todas as vezes que usei o for nessa função o computador travou
  //for (let chave in array7){
  for (indiceDaArray7 = 0; indiceDaArray7 < array7.length; indiceDaArray7 =+ 1 ) {
    saidaFuncao = {
      tech: array7[indiceDaArray7], 
      nome: name


    };
    novaArray.push(saidaFuncao);

    //saidaFuncao = {
      //tech: array7[1], 
      //nome: name


    //};
    //novaArray.push(saidaFuncao);

    //saidaFuncao = {
      //tech: array7[2], 
      //nome: name


    //};
    //novaArray.push(saidaFuncao);

    //saidaFuncao = {
      //tech: array7[3], 
      //nome: name


    //};
    //novaArray.push(saidaFuncao);

    //novaArray.push(saidaFuncao);

    //saidaFuncao = {
      //tech: array7[4], 
      //nome: name


    //};
    //novaArray.push(saidaFuncao);
  //}
  
  //for (let chave in novaArray){
  }
  return novaArray;
}

techList("Eder", ["React", "Jest", "HTML", "CSS", "JavaScript"]) 

console.log(novaArray);