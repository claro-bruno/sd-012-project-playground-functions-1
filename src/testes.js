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

  // Desafio 11
function generatePhoneNumber(n) {
    // seu código aqui
    if ( n.length == 11) {
      return '('+n[0]+n[1]+') '+n[2]+n[3]+n[4]+n[5]+n[6]+'-'+n[7]+n[8]+n[9]+n[10];
    } {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))