import { expect } from "chai";
import { getCompletedTodos} from '../selectors'

describe('The getCompletedTodos Selector', () => {
    it('Returns only completed todos', () => {
        const fakeTodos = [{
            text: 'sayHello',
            isCompleted: true,
        }, {
            text: 'Testing 2',
            isCompleted: false,
        }, {
            text: 'Ultimate test',
            isCompleted: true,
        }];

        const expected = [ {
            text: 'sayHello',
            isCompleted: true,
        }, {
            text: 'Ultimate test',
            isCompleted: true,
        }];

        const actual = getCompletedTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);

    });
})