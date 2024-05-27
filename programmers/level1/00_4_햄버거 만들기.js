// 연습문제 - 햄버거 만들기

// 1: 빵, 2: 야채: 3: 고기
// 1, 2, 3, 1 순서가 차례대로 이어지는 경우만 빼야 됨
// 정규식 이용?
// 배열 ingredient를 문자열로 만들고, 그 후에 "1231"이 있는 첫 번째 부분의 인덱스를 찾아서 그 인덱스에 해당하는 요소부터 4개를 slice로 자름
// 정규식을 이용하자
// 1"1231"2"1231"3"1231"1

// 시간 초과로 테스트 실패하는 코드
// function solution(ingredient) {
//   let count = 0;
//   let str = ingredient.join("");
//   let idx = null;
//   do {
//     idx = str.indexOf("1231");
//     if (idx === -1) break;
//     count++;
//     str = str.slice(0, idx) + str.slice(idx + 4);
//   } while (idx !== -1);
//   return count;
// }

function solution(ingredient) {
  let str = ingredient.join("");

  const find1 = new RegExp("1231", "g");
  const find1Arr = str.match(find1) || [];

  const regex1 = /1231| /;
  const regexStr = regex1.source;
  const find2 = new RegExp(`1${regexStr}2${regexStr}3${regexStr}1`, "g");
  const find2Arr = str.match(find2) || [];

  const regex2 = /1(1231|)2(1231|)3(1231|)1/;
  const regexStr2 = regex2.source;
  const find3 = new RegExp(`1${regexStr2}2${regexStr2}3${regexStr2}1`, "g");
  const find3Arr = str.match(find3) || [];

  return find1Arr.length + find2Arr.length + find3Arr.length;
}

let result = solution([2, 1, 1, 2, 3, 1, 2, 3, 1, 1, 2, 1, 2, 3, 1, 3, 1]);
console.log("결과:", result);
let result2 = solution([1, 3, 2, 1, 2, 1, 3, 1, 2]);
console.log("결과2:", result2);

// 정규식 관련 TIL 정리하기

// 11"1231"231231 -> 재귀?

// 1231 찾기 -> 없으면 결과 리턴, 있으면 결과에 찾은 개수만큼 더하고 재귀
// 1231 중간에 1231 끼어 있거나 없거나 -> 없으면 결과 리턴, 있으면 결과에 찾은 개수만큼 더하고 재귀
// 1231 중간에 위의 결과 끼어 있거나 없거나
