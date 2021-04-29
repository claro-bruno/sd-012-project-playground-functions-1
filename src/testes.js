// Desafio 10
function techList(tecnologia, nome) {
    // seu código aqui
    
    let objLista = []

    for(let i = 0; i < tecnologia.length; i += 1){
      let obj = {
        tech: "eita",
        name: nome,
    }
        obj.tech = tecnologia[i]
        objLista.push(obj)
    }
    return objLista
  }





  console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Roberto"))

/*// Desafio 13
function hydrate(pedido) {
  // seu código aqui
  let numbers = []
  let n = pedido.match(/\d/g);
  let aguas = 0

  for (let i = 0; i<n.length; i += 1){
    numbers.push(parseInt(n[i]))
  }
  for (let i = 0; i< numbers.length; i += 1){
    aguas += numbers[i]
  }
  if ( aguas > 1){
  return aguas + " copos de água"
  } return aguas + " copo de água"
}

console.log(hydrate("1 cachaça"))*/