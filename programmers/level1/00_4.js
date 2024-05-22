// 연습문제 - 햄버거 만들기

// 1: 빵, 2: 야채: 3: 고기
// 1, 2, 3, 1 순서가 차례대로 이어지는 경우만 빼야 됨
// 정규식 이용?
// 배열 ingredient를 문자열로 만들고, 그 후에 "1231"이 있는 첫 번째 부분의 인덱스를 찾아서 그 인덱스에 해당하는 요소부터 4개를 slice로 자름

function solution(ingredient) {
  let count = 0;
  let str = ingredient.join("");
  let idx = null;
  do {
    idx = str.indexOf("1231");
    if (idx === -1) break;
    count++;
    str = str.slice(0, idx) + str.slice(idx + 4);
  } while (idx !== -1);
  return count;
}

let result = solution([2, 1, 1, 2, 3, 1, 2, 3, 1, 1, 2, 1, 2, 3, 1, 3, 1]);
console.log("결과:", result);
