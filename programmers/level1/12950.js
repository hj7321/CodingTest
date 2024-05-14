// 연습문제 - 행렬의 덧셈

function solution(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i].map((_, idx) => arr1[i][idx] + arr2[i][idx]));
  }
  return newArr;
}

let result = solution([[1,2],[2,3]], [[3,4],[5,6]]);
console.log(result);