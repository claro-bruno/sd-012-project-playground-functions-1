function techList(nomeTech, name) {
let code = []; 
nomeTech.sort();

if (nomeTech.length > 4) {
  for (let index in nomeTech){
    code.push ({ tech: nomeTech[index], nome: name})
  }
  return code;
} else {
    return ('Vazio');
  }
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Martin'))