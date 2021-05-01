// Desafio 10
function techList(technologies, person) {
    let techname = [];
    technologies.sort();
    if (technologies.length == 0) {
        return 'Vazio!';
    } else {
        for (let index = 0; index < technologies.length; index += 1) {
            techname.push({ tech: technologies[index], name: person });
        }
        return techname;
    }
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
function hydrate() {
    // seu código aqui
}

module.exports = {
    generatePhoneNumber,
    techList,
    hydrate,
    triangleCheck,
};