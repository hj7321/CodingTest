import { expect } from "chai";
import { FixedArray } from "./FixedArray.js";

describe("FixedArray", () => {
  let numberArray;
  let objectArray;
  let testNumberArray;
  let testObjectArray;
  const TEST_LENGTH = 5;

  beforeEach(() => {
    numberArray = new FixedArray(TEST_LENGTH);
    objectArray = new FixedArray(TEST_LENGTH);
    testNumberArray = [];
    testObjectArray = [];

    for (let i = 1; i <= TEST_LENGTH; i++) {
      numberArray.push(i);
      testNumberArray.push(i);
      const testObj = {
        id: i,
        text: `${i}번 입니다`,
      };
      objectArray.push(testObj);
      testObjectArray.push(testObj);
    }
  });

  it("getLength", () => {
    expect(numberArray.getLength()).to.equal(testNumberArray.length);
    expect(objectArray.getLength()).to.equal(testObjectArray.length);
  });

  it("toString", () => {
    expect(numberArray.stringify()).to.equal(JSON.stringify(testNumberArray));
    expect(objectArray.stringify()).to.equal(JSON.stringify(testObjectArray));
  });

  it("pop", () => {
    expect(numberArray.pop()).to.equal(testNumberArray.pop());
    expect(objectArray.pop()).to.equal(testObjectArray.pop());

    // pop 이후 길이 체크
    expect(numberArray.getLength()).to.equal(testNumberArray.length);
    expect(objectArray.getLength()).to.equal(testObjectArray.length);

    // pop 이후 배열 상태 체크
    expect(numberArray.stringify()).to.equal(JSON.stringify(testNumberArray));
    expect(objectArray.stringify()).to.equal(JSON.stringify(testObjectArray));
  });

  it("indexOf", () => {
    expect(numberArray.indexOf(2)).to.equal(testNumberArray.indexOf(2));
  });

  it("find", () => {
    expect(numberArray.find((f) => f === 3)).to.equal(
      testNumberArray.find((f) => f === 3)
    );
    expect(objectArray.find((f) => f.id === 3)).to.equal(
      testObjectArray.find((f) => f.id === 3)
    );
  });

  it("findIndex", () => {
    expect(numberArray.findIndex((f) => f === 3)).to.equal(
      testNumberArray.findIndex((f) => f === 3)
    );
    expect(objectArray.findIndex((f) => f.id === 3)).to.equal(
      testObjectArray.findIndex((f) => f.id === 3)
    );
  });

  it("includes", () => {
    expect(numberArray.includes((f) => f === 3)).to.equal(
      testNumberArray.includes((f) => f === 3)
    );
    expect(objectArray.includes((f) => f.id === 3)).to.equal(
      testObjectArray.includes((f) => f.id === 3)
    );
  });

  it("forEach", () => {
    let temp = [];
    let testTemp = [];
    numberArray.forEach((item) => temp.push(item));
    testNumberArray.forEach((item) => testTemp.push(item));
    expect(JSON.stringify(temp)).to.equal(JSON.stringify(testTemp));

    temp = [];
    testTemp = [];
    objectArray.forEach((item) => temp.push(item));
    testObjectArray.forEach((item) => testTemp.push(item));
    expect(JSON.stringify(temp)).to.equal(JSON.stringify(testTemp));
  });

  it("filter", () => {
    expect(numberArray.filter((f) => f !== 3).stringify()).to.equal(
      JSON.stringify(testNumberArray.filter((f) => f !== 3))
    );
    expect(objectArray.filter((f) => f.id !== 3).stringify()).to.equal(
      JSON.stringify(testObjectArray.filter((f) => f.id !== 3))
    );
  });

  it("map", () => {
    expect(numberArray.map((f) => f * 10).stringify()).to.equal(
      JSON.stringify(testNumberArray.map((f) => f * 10))
    );
    expect(objectArray.map((f) => f.id).stringify()).to.equal(
      JSON.stringify(testObjectArray.map((f) => f.id))
    );
  });

  it("reduce", () => {
    expect(numberArray.reduce((acc, cur) => acc + cur, 0)).to.equal(
      testNumberArray.reduce((acc, cur) => acc + cur, 0)
    );
    expect(objectArray.reduce((acc, cur) => acc + cur.id, 0)).to.equal(
      testObjectArray.reduce((acc, cur) => acc + cur.id, 0)
    );
  });
});
