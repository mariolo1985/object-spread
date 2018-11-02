import getKey from '../src/getKey';

describe('getKey test', () => {
    describe('getKey()', () => {
        it('returns key value', () => {
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

            expect(getKey('c', combine1, combine2)).toEqual(combine2.c);
        });
    });
});
