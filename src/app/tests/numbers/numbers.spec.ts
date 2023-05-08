import { increment } from "./numbers"

describe('Number tests', () => {
    it('Should be 100 if the sent number is greater than 100', () => {
        const resp = increment(399);
        expect(resp).toBe(100);
    });

    it('Should number + 1 if the sent number is not greater than 100', () => {
        const resp = increment(10);
        expect(resp).toBe(11);
    });
})