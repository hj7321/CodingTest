// 완전탐색 - 최소직사각형

function solution(sizes) {
  let longArr = [];
  let shortArr = [];
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > sizes[i][1]) {
      longArr.push(sizes[i][0]);
      shortArr.push(sizes[i][1]);
    } else {
      longArr.push(sizes[i][1]);
      shortArr.push(sizes[i][0]);
    }
  }
  return Math.max(...longArr) * Math.max(...shortArr);
}

let result = solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);
console.log(result);

// 다른 사람의 풀이 1
function solution(sizes) {
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => [
      Math.max(h, Math.max(a, b)),
      Math.max(v, Math.min(a, b)),
    ],
    [0, 0]
  );
  return hor * ver;
}
// reduce() 메서드를 사용하여 sizes 배열을 순회하면서 가장 큰 가로와 세로 값을 찾음
// 1. reduce() 메서드의 초기값은 [0, 0]으로 설정되어 있음
// 2. reduce() 메서드는 각 사각형 배열 [a, b]마다 현재까지의 최대 가로 길이 h와 최대 세로 길이 v와 비교하여 더 큰 값을 선택하여 업데이트함
// 3. 가로 길이와 세로 길이 중에서 큰 값을 최대 가로 길이(h)로, 작은 값을 최대 세로 길이(v)로 선택함
// 4. hor에는 가장 큰 가로 길이가 들어가고, ver에는 가장 큰 세로 길이가 들어감
// 5. 마지막으로 hor * ver을 반환하여 가장 큰 사각형의 넓이를 계산함
// 구조 분해 할당: ([h, v], [a, b])
// 구조 분해 할당 개념
// - 배열이나 객체의 값들을 추출하여 변수에 할당하는 방법
// - 배열이나 객체의 구조를 파악하여, 그 구조에 맞게 값을 추출하여 변수에 할당하는 것
// 여기에서는 콜백 함수의 인자로 들어오는 배열의 요소를 각각 따로 변수에 할당함
// [h, v] : 누적값인 acc가 배열 형태로 들어오는데, 이를 h와 v라는 변수에 각각 할당함
// [a, b] : 현재값인 cur가 배열 형태로 들어오는데, 이를 a와 b라는 변수에 각각 할당함

// 다른 사람의 풀이 2
function solution(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
}
// 1. map() 메서드를 사용하여 모든 사각형을 가로가 더 긴 경우로 회전시킴
// 2. 따라서 rotated 배열은 각 사각형의 가로와 세로를 가로가 더 긴 형태로 회전시킨 결과가 됨
// 3. maxSize 배열은 현재까지의 가장 큰 가로와 세로를 저장함. 초기값은 [0, 0]으로 설정됨
// 4. forEach() 메서드를 사용하여 rotated 배열을 순회하면서 각 사각형의 가로와 세로를 확인함. 가로와 세로 중에서 현재까지의 최대값을 갱신해나감
// 5. 마지막으로 maxSize[0] * maxSize[1]을 반환하여 가장 큰 사각형의 넓이를 계산함
// 구조 분해 할당
// ([w, h])
// - map() 메서드의 매개변수 부분에서 배열 구조 분해 할당을 사용하여 현재 요소를 [w, h] 형태로 받음
// - 이것은 각 사각형의 가로와 세로를 각각 w와 h 변수에 할당하는 것임
// (w < h ? [h, w] : [w, h])
// - 삼항 연산자를 사용하여 가로와 세로를 비교함
// - 만약 가로(w)가 세로(h)보다 작으면, [h, w]로 배열을 생성하여 사각형을 회전시킴
// - 그렇지 않으면 원래의 가로와 세로를 그대로 유지함

// 다른 사람의 풀이 3
function solution(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach((s) => {
    const [a, b] = s.sort((a, b) => a - b);
    if (a > h) h = a;
    if (b > w) w = b;
  });

  return w * h;
}
// 1. w와 h 변수를 0으로 초기화함. w는 가장 긴 가로 길이를, h는 가장 긴 세로 길이를 나타냄
// 2. sizes.forEach()를 사용하여 sizes의 각 요소를 순회함. 각 요소는 사각형의 가로와 세로를 나타내는 배열임
// 3. 각 사각형을 회전시켜서 가로와 세로 중에서 더 작은 값을 a로, 큰 값을 b로 선택함. 이를 위해 s.sort((a, b) => a - b)를 사용하여 각 요소를 오름차순으로 정리함
// 4. 정렬된 배열을 구조 분해 할당하여 a에는 더 작은 값, b에는 더 큰 값을 할당함
// 5. 각 사각형의 가로와 세로를 비교하여 h와 w를 갱신함. 만약 새로운 값이 이전의 h나 w보다 크다면 해당 값으로 갱신함
// 6. 모든 사각형을 처리한 후에는 w * h를 반환하여 가장 큰 사각형을 만들 때의 넓이를 계산함

// 다른 사람의 풀이 4
function solution(sizes) {
  sizes.map((item) => item.sort((a, b) => b - a));
  let hMax = Math.max.apply(
    null,
    sizes.map((item) => item[0])
  );
  let vMax = Math.max.apply(
    null,
    sizes.map((item) => item[1])
  );
  return hMax * vMax;
}
// 1. map() 메서드를 사용하여 sizes 배열의 각 요소를 순회하면서, 각 사각형의 가로와 세로를 비교하여 큰 값이 앞으로 오도록 정렬함
// 2. 이때 sort() 메서드의 비교 함수 (a, b) => b - a는 내림차순으로 정렬하기 위해 사용됨
// 3. map() 메서드를 사용하여 각 사각형의 더 긴 변의 길이를 추출한 배열을 생성함
// 4. Math.max.apply()를 사용하여 이 배열에서 가장 큰 값을 구함
// 5. 위와 마찬가지로 map() 메서드를 사용하여 각 사각형의 더 짧은 변의 길이를 추출한 배열을 생성함
// 6. Math.max.apply()를 사용하여 이 배열에서 가장 큰 값을 구함
// 7. 각 사각형의 더 긴 변의 길이 중에서 가장 큰 값과, 더 짧은 변의 길이 중에서 가장 큰 값을 곱한 넓이를 반환함