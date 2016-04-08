
import * as types from "./types";

function changeMode(mode) {
    return { type: types.CHANGE_MODE, mode };
}

export { changeMode };