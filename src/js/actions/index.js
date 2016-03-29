
import * as types from "./ActionTypes"

export function addTask(text) {
    return { type: types.ADD_TASK, text };
}