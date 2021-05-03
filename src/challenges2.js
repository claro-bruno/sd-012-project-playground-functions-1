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
    switch (true) {
        case numbers.length != 11:
            return 'Array com tamanho incorreto.';
            break;
        case (maiorNumero(numbers) > 9 || menorNumero(numbers) < 0 || repeteTresVezes(numbers)):
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
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// Desafio 12
function triangleCheck() {
    // seu código aqui
}

// Desafio 13
function hydrate() {
    // seu código aqui
}

function menorNumero(numbers) {
    let menor = numbers[0];
    for (let num of numbers) {
        if (num < menor) {
            menor = num;
        }
    }
    return menor;
}

function maiorNumero(numbers) {
    let maior = numbers[0];
    for (let num of numbers) {
        if (num > maior) {
            maior = num;
        }
    }
    return maior;
}

function repeteTresVezes(numbers) {
    let repete = 0;
    let cont = 0;
    for (let number of numbers) {
        if (cont < 3) {
            cont = 0;
            for (let num of numbers) {
                if (number === num) {
                    cont += 1;
                }
            }
            repete = false;
        } else {
            repete = true;
        }
    }
    return repete;
}

module.exports = {
    generatePhoneNumber,
    techList,
    hydrate,
    triangleCheck,
};