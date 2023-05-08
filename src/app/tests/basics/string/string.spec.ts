import { greeting } from "./string";

describe('String tests', () => {
    it('Should return a string', () => {
        const resp = greeting('Miguel');

        expect(typeof resp).toBe('string');
    });

    it('Should return a greeting with the sent name', () => {
        const name = 'Miguel';
        const resp = greeting(name);

        expect(resp).toContain(name);
    })
});