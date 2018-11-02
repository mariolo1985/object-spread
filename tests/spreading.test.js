import spreading from '../src/spreading';

describe('spreading test', () => {
    describe('spreading()', () => {
        it('returns spreaded objects', () => {
            const combine1 = {
                a: 1,
                b: 2,
                c: 3
            };

            const combine2 = {
                c: 4,
                d: 5,
                e: 6
            };

            expect(spreading(combine1, combine2)).toEqual(Object.assign(combine1, combine2));
        });
    });
});
