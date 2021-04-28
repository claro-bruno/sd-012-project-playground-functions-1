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
function generatePhoneNumber(numbers) {
    let numbersArray = numbers;
    numbersArray.sort();
    let maior = numbersArray[numbersArray.length - 1];
    let menor = numbersArray[0];
    let repete = 0;
    let cont = 0;
    for (let number of numbers) {
        for (let num of numbersArray) {
            if (number === num && repete < 3) {
                repete += 1;
            } else if (repete >= 3) {
                cont = repete
            }
            repete = 0;
        }
    }
    switch (true) {
        case numbers.length != 11:
            return 'Array com tamanho incorreto.';
            break;
        case (maior > 9 || menor < 0 || cont >= 3):
            return 'não é possível gerar um número de telefone com esses valores';
            break;
        default:
            let phoneNumber = '(';
            phoneNumber += numbers[0];
            phoneNumber += numbers[1];
            phoneNumber += ') ';
            phoneNumber += numbers[2];
            phoneNumber += numbers[3];
            phoneNumber += numbers[4];
            phoneNumber += numbers[5];
            phoneNumber += numbers[6];
            phoneNumber += '-';
            phoneNumber += numbers[7];
            phoneNumber += numbers[8];
            phoneNumber += numbers[9];
            phoneNumber += numbers[10];
            return phoneNumber;
            break;
    }
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