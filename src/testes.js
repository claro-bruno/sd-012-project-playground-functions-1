// Desafio 10
/*function techList(tecnologia, nome) {
    // seu código aqui

    let obj = {
        tech: "eita",
        name: nome,
    }

    let objLista = []
    for(let i = 0; i < tecnologia.length; i += 1){
        obj.tech = tecnologia[i]
        objLista.push(obj)
    }
    return objLista
  }

  console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Rachift"))*/

// Desafio 13
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
  return aguas + " copos de água"
}

console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"))