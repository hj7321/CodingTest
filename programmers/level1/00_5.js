// 2023 KAKAO BLIND RECRUITMENT - 개인정보 수집 유효기간

// today를 "."을 기준으로 나눠서 배열로 만듦
// terms의 각 요소를 " "을 기준으로 나눠서 배열로 만듦
// privacies의 각 요소를 " "을 기준으로 나눠서 배열로 만들고, 그 배열의 0번쨰 인덱스 요소를 "."을 기준으로 나눠서 배열로 만듦
// privacies 배열을 순회
// 각 요소(문자열)를 공백을 기준으로 나눠서 배열의 요소로 만듦
// 배열의 1번 인덱스 요소에 해당하는 유형을 terms에서 찾아서 그 값만큼 월에 더함
// 월이 13 이상이면, 월- 12를 하고, 연도에 1을 더함
// 계산이 끝난 후 today와 privacies의 각 요소의 0번째 인덱스 요소를 비교함
// - 연도가 today보다 더 작으면 result에 넣음
// - 연도가 today랑 같고, 월이 today보다 더 작으면 result에 넣음
// - 연도와 월이 today랑 같고, 일이 today보다 더 작으면 result에 넣음

function solution(today, terms, privacies) {
  const result = [];
  const todayArr = today.split(".");
  const newTerms = terms.map((cur) => cur.split(" "));

  privacies.forEach((cur, idx) => {
    const curArr = cur.split(" ");
    curArr[0] = curArr[0].split(".");
    newTerms.forEach((ele) => {
      if (ele[0] === curArr[1]) {
        curArr[0][1] = +curArr[0][1] + +ele[1];
        if (curArr[0][1] >= 13) {
          curArr[0][0] = +curArr[0][0] + Math.floor(curArr[0][1] / 12);
          curArr[0][1] = curArr[0][1] % 12;
        }
        if (
          curArr[0][0] < todayArr[0] ||
          (curArr[0][0] == todayArr[0] && curArr[0][1] < todayArr[1]) ||
          (curArr[0][0] == todayArr[0] &&
            curArr[0][1] == todayArr[1] &&
            curArr[0][2] <= todayArr[2])
        )
          result.push(idx + 1);
      }
    });
  });
  return result;
}

const result = solution(
  "2022.05.19",
  ["A 6", "B 12", "C 3"],
  ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
);
console.log(result);

console.log(1 == "01");
