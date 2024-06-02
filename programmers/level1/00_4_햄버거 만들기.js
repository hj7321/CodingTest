// 연습문제 - 햄버거 만들기

// 1: 빵, 2: 야채: 3: 고기
// 1, 2, 3, 1 순서가 차례대로 이어지는 경우만 빼야 됨
// 정규식 이용?
// 배열 ingredient를 문자열로 만들고, 그 후에 "1231"이 있는 첫 번째 부분의 인덱스를 찾아서 그 인덱스에 해당하는 요소부터 4개를 slice로 자름
// 정규식을 이용하자
// 1"1231"2"1231"3"1231"1
// 112231

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

// 객체로 만든 다음
// 1. 1이 나오는 경우
// - 현재 진행 중인 객체의 문자열의 끝 문자가 3인지 확인함
// - 3인 경우, count 개수를 증가시키고 현재 진행 중인 객체도 1 증가시킴
// - 3이 아닌 경우, 객체에 키를 추가하여 그곳에 1을 넣음
// 2. 2가 나오는 경우
// - 현재 진행 중인 객체의 문자열의 끝 문자가 1인지 확인함
// - 1인 경우, 현재 진행 중인 객체의 문자열의 끝 부분에 2를 추가함
// - 1이 아닌 경우, 그냥 넘어감
// 3. 3이 나오는 경우
// - 현재 진행 중인 객체의 문자열의 끝 문자가 2인지 확인함
// - 2인 경우, 현재 진행 중인 객체의 문자열의 끝 부분에 3을 추가함
// - 2가 아닌 경우, 그냥 넘어감

function solution(ingredient) {
  const obj = {};
  let objNum = (curObj = 1);
  let count = 0;

  ingredient.forEach((num) => {
    if (curObj <= 0) curObj = objNum + 1;
    switch (num) {
      case 1:
        if (!obj[curObj]) {
          obj[curObj] = "1";
        } else if (obj[curObj][obj[curObj].length - 1] === "3") {
          count++;
          objNum = curObj;
          curObj--;
        } else {
          curObj = objNum + 1;
          obj[curObj] = "1";
        }
        break;
      case 2:
        if (!obj[curObj]) break;
        else if (obj[curObj][obj[curObj].length - 1] === "1")
          obj[curObj] += "2";
        else count ? curObj-- : curObj++;
        break;
      case 3:
        if (!obj[curObj]) break;
        else if (obj[curObj][obj[curObj].length - 1] === "2")
          obj[curObj] += "3";
        else count ? curObj-- : curObj++;
        break;
    }
  });
  return count;
}

// objNum | curObj | count | obj
// 0        1        0       1:
// 0        1        0       1: "1"
// 1        2        0       2: "1"
// 1        2        0       2: "12"
// 1        2        0       2: "123"
// 3        1        1       1: "1"
// 3        1        1       1: "12"
// 3        1        1       1: "123"
// 3        1        2

// function solution(ingredient) {
//   let str = ingredient.join("");

//   const find1 = new RegExp("1231", "g");
//   const find1Arr = str.match(find1) || [];

//   const regex1 = /1231|  /;
//   const regexStr = regex1.source;
//   const find2 = new RegExp(`1${regexStr}2${regexStr}3${regexStr}1`, "g");
//   const find2Arr = str.match(find2) || [];

//   const regex2 = /1(1231|)2(1231|)3(1231|)1/;
//   const regexStr2 = regex2.source;
//   const find3 = new RegExp(`1${regexStr2}2${regexStr2}3${regexStr2}1`, "g");
//   const find3Arr = str.match(find3) || [];

//   return find1Arr.length + find2Arr.length + find3Arr.length;
// }

let result = solution([2, 1, 1, 2, 3, 1, 2, 3, 1, 1, 2, 1, 2, 3, 1, 3, 1]);
console.log("결과:", result);
let result2 = solution([1, 3, 2, 1, 2, 1, 3, 1, 2]);
console.log("결과2:", result2);

// 정규식 관련 TIL 정리하기

// 11"1231"231231 -> 재귀?

// 1231 찾기 -> 없으면 결과 리턴, 있으면 결과에 찾은 개수만큼 더하고 재귀
// 1231 중간에 1231 끼어 있거나 없거나 -> 없으면 결과 리턴, 있으면 결과에 찾은 개수만큼 더하고 재귀
// 1231 중간에 위의 결과 끼어 있거나 없거나

// 12 12 12 12 1231 31 31 1 31 31

// 1: "12"
// 2: "12"
// 3: "12"
// 4: "12"
// 5: "1231"
// 4: "1231"
// 3: "1231"
// 2: "1231"
// 1: "1231"
