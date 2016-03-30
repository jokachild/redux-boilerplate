
import { ADD_TASK } from "../actions/types"

const initialState = [{
    text: "First item"
}];

export default function tasks(state = initialState, action = null) {
    switch (action.type) {
        case ADD_TASK:
            return [...state, { text: action.text }];
        default:
            return state;
    }
}