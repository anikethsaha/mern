import { PLACEHOLDER } from '../MSGS';

const initialState = [ ];
export default function (state = initialState, action) {
    const { type } = action;
    switch (type) {
        case PLACEHOLDER:
        default:
            return state;
    }
}
