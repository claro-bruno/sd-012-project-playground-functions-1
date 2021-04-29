// Desafio 10
function techList(tecnologia, nome) {
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

  console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Rachift"))