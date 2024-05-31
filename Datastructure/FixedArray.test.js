import { expect } from "chai";
import { beforeEach, describe, it } from "mocha";
import { FixedArray } from "./FixedArray.js";

describe("FixedArray", () => {
  let numberArray;
  let testNumberArray;
  const TEST_LENGTH = 5;
  beforeEach(() => {
    numberArray = new FixedArray(TEST_LENGTH);
    testNumberArray = [];

    for (let i = 1; i <= TEST_LENGTH; i++) {
      numberArray.push(i);
      testNumberArray.push(i);
    }
  });

  it("getLength", () => {
    expect(numberArray.getLength()).to.equal(testNumberArray.length);
  });

  it("pop", () => {
    expect(numberArray.pop()).to.equal(testNumberArray.pop());
  });

  it("stringify", () => {
    expect(numberArray.stringify()).to.equal(JSON.stringify(testNumberArray));
  });

  it("reduce1", () => {
    expect(
      numberArray.reduce((_, cur) => {
        return cur;
      })
    ).to.equal(
      testNumberArray.reduce((_, cur) => {
        return cur;
      })
    );
  });

  it("reduce2", () => {
    expect(
      JSON.stringify(
        numberArray.reduce(function (acc, cur, idx) {
          acc[idx] = cur;
          return acc;
        }, {})
      )
    ).to.equal(
      JSON.stringify(
        testNumberArray.reduce(function (acc, cur, idx) {
          acc[idx] = cur;
          return acc;
        }, {})
      )
    );
  });
});
