
import * as types from "./types"

export function addTask(text) {
    return { type: types.ADD_TASK, text };
}

export function changeMode(mode) {
    return { type: types.CHANGE_MODE, mode }
}