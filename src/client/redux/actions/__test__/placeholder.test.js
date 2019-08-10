import { placeholder } from '../placeholder'
import { PLACEHOLDER } from '../../MSGS'

describe('Placeholder action', () => {

    it(`return {type: ${PLACEHOLDER}}`, () => {
        expect(placeholder()).toEqual({ type: PLACEHOLDER })
    });
});