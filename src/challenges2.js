// Desafio 10
function techList(techArray, name) {
    let objectArray = [];
    for (let tech of techArray.sort()) {
        let techObject = {
            tech: tech,
            name: name
        }
        objectArray.push(techObject);
    }
    if (objectArray.length != 0) {
        return objectArray;
    } else {
        return 'Vazio!';
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