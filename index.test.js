const combineUsers = require('./index');
require('datejs');

describe('combineUsers', () => {
    it('merges multiple user arrays correctly', () => {
        const group1 = ['a', 'b'];
        const group2 = ['c', 'd'];
        const group3 = ['e'];

        const result = combineUsers(group1, group2, group3);

        expect(result.users).toEqual(['a', 'b', 'c', 'd', 'e']);
    });

    it('returns today\'s date in M/d/yyyy format', () => {
        const today = new Date().toString("M/d/yyyy");
        const result = combineUsers(['user']);

        expect(result.merge_date).toBe(today);
    });

    it('returns an empty user list if no input arrays are provided', () => {
        const result = combineUsers();

        expect(result.users).toEqual([]);
    });
});