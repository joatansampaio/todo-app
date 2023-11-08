import { expect } from "chai";
import { getBorderStyleForDate } from "../TodoListItem";

describe('Get Border Style for Date', () => {
    it('returns none when the date less than five days ago', () => {
        const today = Date.now();
        const recentDate = new Date(Date.now() - 86400000 * 3);

        const expected = 'none';
        const actual = getBorderStyleForDate(recentDate, today);

        expect(actual).to.equal(expected);

    });
    it('returns a border when date is more than five days from now', () => {
        const today = Date.now();
        const recentDate = new Date(Date.now() - 86400000 * 5);

        const expected = '2px solid red';
        const actual = getBorderStyleForDate(recentDate, today);

        expect(actual).to.equal(expected);
    });
})