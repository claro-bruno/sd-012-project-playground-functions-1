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
function generatePhoneNumber(candidateNumbers) {
    // Length = 11 verification
    if (candidateNumbers.length !== 11) {
        return 'Array com tamanho incorreto.';
    }
    // Lower than 0 or higher than 9 verification
    for (let index = 0; index < candidateNumbers.length; index += 1) {
        if (candidateNumbers[index] < 0 || candidateNumbers[index] > 9) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
    }
    // 3 equals numbers verification
    for (let reader = 0; reader < candidateNumbers.length; reader += 1) {
        let overThanThree = 0;
        for (let spotted = 0; spotted < candidateNumbers.length; spotted += 1) {
            if (candidateNumbers[spotted] === candidateNumbers[reader]) {
                overThanThree += 1;
            }
        }
        if (overThanThree >= 3) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
    }
    let phone = `(${candidateNumbers[0]}${candidateNumbers[1]}) ${candidateNumbers[2]}${candidateNumbers[3]}${candidateNumbers[4]}${candidateNumbers[5]}${candidateNumbers[6]}-${candidateNumbers[7]}${candidateNumbers[8]}${candidateNumbers[9]}${candidateNumbers[10]}`;
    return phone
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
    let possibleA = lineA > Math.abs(lineB - lineC) && lineA < lineB + lineC;
    let possibleB = lineB > Math.abs(lineA - lineC) && lineB < lineA + lineC;
    let possibleC = lineC > Math.abs(lineA - lineB) && lineC < lineA + lineB;
    return possibleA && possibleB && possibleC
}

// Desafio 13
function hydrate(manyDrinks) {
    let regex = /\d+/g;
    let matches = manyDrinks.match(regex).map(Number);
    sum = 0;
    for (let index = 0; index < matches.length; index += 1) {
        sum = sum + matches[index];
    }
    if (sum === 1) {
        return `${sum} copo de água`;
    } else {
        return `${sum} copos de água`;
    }

    //code idea by https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
}

module.exports = {
    generatePhoneNumber,
    techList,
    hydrate,
    triangleCheck,
};