import { getAvengers } from "./arrays";

describe('Arrays tests', () => {
    it('Should return at least 3 items', () => {
        const res = getAvengers();
        expect(res.length).toBeGreaterThanOrEqual(3);
    });

    it('Should exist Thor and Spider Man', () => {
        const res = getAvengers();
        expect(res).toContain('Thor');
        expect(res).toContain('Spider Man');
    });
});