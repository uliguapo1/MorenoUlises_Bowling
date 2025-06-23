import * as chai from "chai";
import { calcScore } from "../src/bowling.js";

const assert = chai.assert;

describe("Scoring Bowling", function () {
  it("All gutter balls -> 0", function () {
    const rolls = Array(20).fill(0);
    assert.equal(calcScore(rolls), 0);
  });
  it("All ones -> 20", function () {
    const rolls = Array(20).fill(1);
    assert.equal(calcScore(rolls), 20);
  });
  it("Spare bonus", function () {
    const rolls = [5,5,2,3,...Array(16).fill(0)];
    assert.equal(calcScore(rolls), 17);
  });
  it("Strike bonus", function () {
    const rolls = [10,2,3,...Array(16).fill(0)];
    assert.equal(calcScore(rolls), 20);
  });
  it("Perfect game -> 300", function () {
    const rolls = Array(12).fill(10);
    assert.equal(calcScore(rolls), 300);
  });
});

