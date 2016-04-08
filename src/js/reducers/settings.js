
import { CHANGE_MODE } from "../actions/types";

const initialState = {
    mode: "dev"
};

export default function settings(state = initialState, action = null) {
    switch (action.type) {
    case CHANGE_MODE:
        return Object.assign({}, state, { mode: action.mode });
    default:
        return state;
    }
}