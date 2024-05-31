export class FixedArray {
  #arrayLength;
  #array;
  // 필요한변수 추가 가능

  // #arrayLength와 #array를 알맞게 초기화
  // 생성자 파라미터에는 FixedArray의 고정된 길이를 받아야됨.
  // #array초기화 시 각요소의 값은 undefined
  constructor(fixedLength) {
    this.fixedLength = fixedLength;
    this.#arrayLength = 0;
    this.#array = [];
    for (let i = 0; i < this.fixedLength; i++) {
      this.#array[i] = undefined;
    }
  }

  //////////////////////////////
  //////      LEVEL 1      /////
  //////////////////////////////
  // 배열 맨 뒤에 요소 추가
  // 배열의 길이가 #arrayLength를 초과할 경우 요소를 추가되면 안됨.
  push(element) {
    this.#array[this.#arrayLength] = element;
    this.#arrayLength++;
  }

  // 배열의 맨 마지막 요소를 제거하고 그 요소를 반환
  pop() {
    this.#arrayLength -= !this.#arrayLength ? 0 : 1;
    const arrElement = this.#array[this.#arrayLength];
    this.#array[this.#arrayLength] = undefined;
    return arrElement;
  }

  // 현재 배열의 사용되고 있는 크기를 반환
  getLength() {
    return this.#arrayLength;
  }

  // 현재 배열의 상태를 string으로 반환
  stringify() {
    let str = "[";
    for (let i = 0; i < this.#arrayLength; i++) {
      str += `${JSON.stringify(this.#array[i])}`;
      str += i !== this.#arrayLength - 1 ? "," : "";
    }
    str += "]";
    return str;
  }

  //////////////////////////////
  //////      LEVEL 2      /////
  //////////////////////////////
  // 배열에서 특정 요소의 첫 번째 인덱스를 반환합니다. 요소가 없으면 -1을 반환합니다.
  indexOf(searchElement) {
    for (let i = 0; i < this.#arrayLength; i++) {
      if (searchElement === this.#array[i]) return i;
    }
    return -1;
  }

  // 배열의 각 요소에 대해 predicate 결과가 true인 요소 중 제일 첫번째 요소의 index반환
  // true 가 없으면 -1 반환
  findIndex(predicate) {
    for (let i = 0; i < this.#arrayLength; i++) {
      if (predicate(this.#array[i])) return i;
    }
    return -1;
  }

  // 배열의 각 요소에 대해 predicate 결과가 true인 요소 중 제일 첫번째 요소 1개만 반환
  // true 가 없으면 null 반환
  find(predicate) {
    // for (let i = 0; i < this.#arrayLength; i++) {
    //   if (predicate(this.#array[i])) return this.#array[i];
    // }
    // return null;
    const findIndex = this.findIndex(predicate);
    if (findIndex === -1) return null;
    return this.#array[findIndex];
  }

  // 배열에 특정 요소가 포함되어 있는지 여부를 확인합니다. (true or false)
  includes(searchElement) {
    // for (let i = 0; i < this.#arrayLength; i++) {
    //   if (searchElement === this.#array[i]) return true;
    // }
    // return false;
    return this.indexOf(searchElement) !== -1;
  }

  //////////////////////////////
  //////      LEVEL 3      /////
  //////////////////////////////
  // 배열의 각 요소에 대해 제공된 함수를 한 번씩 실행합니다.
  forEach(callback) {
    for (let i = 0; i < this.#arrayLength; i++) {
      callback(this.#array[i], i, this.#array);
    }
  }

  // 배열의 각 요소에 대해 predicate 결과가 true인 요소를 모아 새로운 배열 반환
  filter(predicate) {
    const newArr = new FixedArray(this.#arrayLength);
    for (let i = 0; i < this.#arrayLength; i++) {
      if (predicate(this.#array[i], i)) newArr.push(this.#array[i]);
    }
    return newArr;
  }

  // 배열의 각 요소에 대해 callback 함수를 호출한 결과를 모아 새로운 배열로 반환
  map(callback) {
    const newArr = new FixedArray(this.#arrayLength);
    for (let i = 0; i < this.#arrayLength; i++) {
      newArr.push(callback(this.#array[i], i));
    }
    return newArr;
  }

  // 배열의 각 요소에 대해 제공된 함수를 호출하여 누산기에 값을 축적
  reduce(callback, initValue) {
    let acc = initValue ?? this.#array[0];
    let startIndex = 0;
    initValue ?? startIndex++;
    for (let i = startIndex; i < this.#arrayLength; i++) {
      acc = callback(acc, this.#array[i], i, this.#array);
    }
    return acc;
  }
}

const array = new FixedArray(5);
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
const result = array.reduce(function (acc, cur, idx) {
  acc[idx] = cur;
  return acc;
}, {});
// const result = array.reduce((acc, cur) => {
//   acc = acc + cur;
//   return acc;
// });
console.log(result);

const res = [1, 2, 3, 4, 5].reduce(function (acc, cur, idx) {
  acc[idx] = cur;
  return acc;
}, {});
// const res = [10, 20, 30, 40, 50].reduce((acc, cur) => {
//   acc = acc + cur;
//   return acc;
// });
console.log(res);
