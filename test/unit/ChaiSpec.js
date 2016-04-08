
import chai, { assert, expect } from "chai";
const should = chai.should();

describe("karma tests with chai", () => {

    it("should expose the Chai assert method", () => {
        assert.ok("everything", "everything is ok");
    });

    it("should expose the Chai expect method", () => {
        expect("foo").to.not.equal("bar");
    });

    it("should expose the Chai should property", () => {
        var err = undefined;
        (1).should.not.equal(2);
        should.not.exist(err);
    });

});