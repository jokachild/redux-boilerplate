
import * as types from "./types"

function addTask(text) {
    return { type: types.ADD_TASK, text };
}

export { addTask }