class FixedArray {
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
    let str = "[ ";
    for (let i = 0; i < this.fixedLength; i++) {
      str += `${this.#array[i]}`;
      str += i !== this.fixedLength - 1 ? ", " : " ]";
    }
    return str;
  }
}

// const arr1 = new FixedArray(5);
// console.log(arr1.getLength());
// arr1.push(10);
// arr1.push(20);
// arr1.push(30);
// arr1.push(40);
// arr1.push(50);
// console.log(arr1.stringify());
// console.log(arr1.getLength());
// console.log(arr1.pop());
// console.log(arr1.getLength());

const array = [];
console.log(array.pop());
