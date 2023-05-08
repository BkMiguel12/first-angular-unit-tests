import { Player } from "./classes";

describe('Classes tests', () => {
    const player = new Player();
    
    beforeEach(() => {
        player.hp = 100;
    });

    it('Should return 80hp if receive 20 damage', () => {
        const res = player.getDamage(20);
        expect(res).toBe(80);
    });

    it('Should return 50hp if receive 50 damage', () => {
        const res = player.getDamage(50);
        expect(res).toBe(50);
    });
});