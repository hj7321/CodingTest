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
});
