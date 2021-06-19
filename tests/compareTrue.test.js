const { compareTrue } = require('../src/challenges.js');

const { describe, test, expect } = require('@jest/globals');

describe('verifica o comportamento da função compareTrue',() => {
    it('verifica se pasando dois boleanos true o retorno e igual a true', () => {
        expect(compareTrue(true, true)).toBe(true);
    });
    it('passando dois boleanos destintos deve retornar false', () => {
        expect(compareTrue(true, false)).toBe(false);
    })
    it('sem parametros retorna false', () => {
        expect(compareTrue()).toBe(false);
    })
});