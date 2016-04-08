
import { expect } from "chai";
import * as actions from "../../../src/js/actions/settings";
import * as types from "../../../src/js/actions/types";

describe("actions", () => {
    it("should create an action to change mode", () => {
        const mode = "dev";
        const expected = {
            type: types.CHANGE_MODE,
            mode
        };
        expect(actions.changeMode(mode)).to.deep.equal(expected);
    });
});