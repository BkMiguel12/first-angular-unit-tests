import { isTrue } from "./booleans"

describe('Boolean tests', () => {
    it('Should return true', () => {
        const res = isTrue();
        expect(res).toBeTruthy();
    })
})