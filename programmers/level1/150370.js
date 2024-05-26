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
        // 이 부분이 관건
        if (curArr[0][1] >= 13) {
          curArr[0][0] = +curArr[0][0] + Math.ceil(curArr[0][1] / 12) - 1;
          curArr[0][1] = curArr[0][1] % 12 || 12;
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

// const result = solution(
//   "2022.05.19",
//   ["A 6", "B 12", "C 3"],
//   ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
// );
// console.log(result);

// console.log(1 == "01");
// console.log(Math.ceil(24 / 12));

// 다른 사람의 풀이 1
function solution(today, terms, privacies) {
  const answer = [];
  const [year, month, date] = today.split(".").map(Number);
  const todates = year * 12 * 28 + month * 28 + date;
  const t = {};
  terms.forEach((e) => {
    const [a, b] = e.split(" ");
    t[a] = Number(b);
  });
  privacies.forEach((e, i) => {
    let [day, term] = e.split(" ");
    day = day.split(".").map(Number);
    const dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28;
    if (dates <= todates) answer.push(i + 1);
  });
  return answer;
}
// 1. 정답을 담을 변수 answer를 빈 배열로 초기화함
// 2. 입력받은 today 문자열에 split() 메서드를 사용하여 "."를 기준으로 문자열을 나눠서 배열로 만듦
// - 배열에 연도, 월, 일에 해당하는 숫자가 문자형으로 각각 분리되어 저장되어 있음
// 3. 위에서 split() 메서드로 만든 배열에 map() 메서드를 사용하여 각 요소를 숫자형으로 변환함
// - 이때 map() 메서드의 인자(콜백 함수)로 Number() 함수 자체를 사용하여 각 요소를 숫자형으로 변환한다.
// 4. 구조 분해 할당을 사용하여 위에서 만든 배열의 첫 번째 요소(슷자형으로 변환된 연도)를 year 상수, 두 번째 요소(숫자형으로 변환된 월)를 month 상수, 세 번째 요소(숫자형으로 변환된 일)를 date 상수에 저장함
// 5. 다음을 계산한 후 상수 todates에 저장함
// - 상수 year를 일 단위로 변환하기 위해서 12(월 단위)를 곱하고, 문제에서 한 달은 28일로 고정되어 있다고 가정하므로 28(일 단위)을 곱함
// - 상수 month를 일 단위로 변환하기 위해서 28(일 단위)을 곱함
// - 각각 곱한 값들을 모두 더함
// - 결론적으로, 상수 todates는 오늘 날짜를 일 단위로 변환한 값을 나타냄
// 6. 약관 종류와 유효기간 정보를 저장할 상수 t를 빈 객체로 초기화함
// 7. terms 배열에 forEach() 메서드를 사용하여 각 요소를 순회하면서 다음을 수행함
// - 현재 요소(문자열)에 split() 메서드를 사용하여 "."를 기준으로 문자열을 나눠서 배열로 만듦
// - 구조 분해 할당을 사용하여 위에서 split() 메서드로 만든 배열의 첫 번째 요소(약관 종류)를 a 상수, 두 번째 요소(유효기간)를 b 상수에 저장함
// - 객체 t의 키 값을 a로 설정하고, 밸류 값을 b를 숫자형으로 바꾼 값으로 설정함
// 8. privacies 배열에 forEach() 메서드를 사용하여 각 요소를 순회하면서 다음을 수행함
// (8-1) 현재 요소(문자열)에 split() 메서드를 사용하여 " "(공백 문자)를 기준으로 문자열을 나눠서 배열로 만듦
// (8-2) 구조 분해 할당을 사용하여 위에서 split() 메서드로 만든 배열의 첫 번째 요소(개인정보 수집일자)를 day 변수, 두 번째 요소(약관 종류)를 term 변수에 저장함
// (8-3) day(문자열로 표현된 개인정보 수집일자)에 split() 메서드를 사용하여 "."를 기준으로 문자열을 나눠서 배열로 만들고, 그 배열의 각 요소(문자열로 표현된 연도, 월, 일)를 숫자형으로 변환한 새로운 배열을 다시 day 변수에 할당함
// (8-4) 다음을 계산한 후 상수 dates에 저장함
// - 연도가 들어 있는 요소 day[0]를 일 단위로 변환하기 위해서 12(월 단위)를 곱하고, 문제에서 한 달은 28일로 고정되어 있다고 가정하므로 28(일 단위)을 곱함
// - 월이 들어 있는 요소 day[1]을 일 단위로 변환하기 위해서 28(일 단위)을 곱함
// - term(약관 종류)를 객체 t에서 찾아서 그 밸류 값에 28(일 단위)을 곱함
// - 각각 곱한 값들을 더함
// - 결론적으로, 상수 dates는 개인정보 수집 만료 날짜를 일 단위로 변환한 값을 나타냄
// - 만약 dates보다 todates가 크거나 같은 경우, 오늘 날짜를 기준으로 개인정보를 조회하지 못하는 요소이므로 answer 배열에 해당 인덱스에 1을 더한 값을 넣어줌
// 9. 최종적으로 나온 결과 answer 배열을 반환함

// 다른 사람의 풀이 2
function solution(today, terms, privacies) {
  const map = new Map();
  for (let i = 0; i < terms.length; i++) {
    const [type, term] = terms[i].split(" ");
    map.set(type, term * 28);
  }

  return privacies.reduce((acc, curr, i) => {
    const [date, type] = curr.split(" ");
    const [cy, cm, cd] = date.split(".");
    const [ty, tm, td] = today.split(".");

    const currentDays = +cy * 12 * 28 + +cm * 28 + +cd;
    const todayDays = +ty * 12 * 28 + +tm * 28 + +td;

    if (todayDays - currentDays >= map.get(type)) acc.push(i + 1);
    return acc;
  }, []);
}
// 1. 상수 map에 새로운 빈 Map 객체를 생성함
// 2. for문으로 0부터 배열 term의 길이가 클 때까지 반복하여 다음을 수행함
// - terms 배열의 인덱스 i번째 요소(문자열)에 split() 메서드를 사용하여 " "(공백 문자)를 기준으로 문자열을 나눠서 배열로 만듦
// - 구조 분해 할당을 사용하여 위에서 split() 메서드로 만든 배열의 첫 번째 요소(약관 종류)를 type 변수, 두 번째 요소(유효기간)를 term 변수에 저장함
//- Map 자료구조의 set() 메서드를 사용하여 키 값으로는 type을, 밸류 값으로는 term에 28을 곱한 값을 집합의 쌍으로 추가함 -> 사실 약관 종류는 중복되지 않는다고 했으므로 객체를 생성할 때 Map 자료구조를 사용하지 않아도 됨
// 3. privacies 배열에 reduce() 메서드를 사용하여 누적값인 acc의 초기값으로 빈 배열을 설정한 후, 각 요소를 순회하면서 다음을 수행함
// (3-1) 현재 요소인 curr(문자열)에 split() 메서드를 사용하여 " "(공백 문자)를 기준으로 문자열을 나눠서 배열로 만듦
// (3-2) 구조 분해 할당을 사용하여 위에서 split() 메서드로 만든 배열의 첫 번째 요소(문자열로 표현된 개인정보 수집일자)를 date 상수에, 두 번째 요소(약관 종류)를 type 상수에 저장함
// (3-3) 위에서 할당한 date 상수(문자열로 표현된 개인정보 수집일자)에 split() 메서드를 사용하여 "."를 기준으로 문자열을 나눠서 배열로 만듦
// (3-4) 구조 분해 할당을 사용하여 위에서 split() 메서드로 만든 배열의 첫 번째 요소(문자열로 표현된 연도)를 cy 상수에, 두 번째 요소(문자열로 표현된 월)를 cm 상수에, 세 번째 요소(문자열로 표현된 일)를 cd 상수에 저장함
// (3-5) 입력받은 today 문자열에 split() 메서드를 사용하여 "."를 기준으로 문자열을 나눠서 배열로 만듦
// (3-6) 구조 분해 할당을 사용하여 위에서 split() 메서드로 만든 배열의 첫 번째 요소(문자열로 표현된 연도)를 ty 상수에, 두 번째 요소(문자열로 표현된 월)를 tm 상수에, 세 번째 요소(문자열로 표현된 일)를 td 상수에 저장함
// -> 사실 today는 한 번만 구조 분해 할당을 사용하면 되므로 reduce() 메서드 밖에서 해 주는 게 좋음
// (3-7) 상수 currentDays에 개인정보 수집 유효기간을 모두 일 단위로 표현한 값을 저장함(계산 방법은 "다른 사람의 풀이 1"에서와 같음)
// (3-8) 상수 todayDays에 오늘 날짜를 모두 일 단위로 표현한 값을 저장함(계산 방법은 "다른 사람의 풀이 1"에서와 같음)
// (3-9) 만약 todayDays에서 currentDays를 뺀 값이 현재 요소의 약관 종류에 해당하는 밸류 값보다 더 큰 경우, 누적값 acc에 현재 인덱스에 1을 더한 값을 넣음
// - todayDays에서 currentDays를 뺀 값이 현재 요소의 약관 종류에 해당하는 밸류 값보다 더 큰 경우는 개인정보 수집 유효기간이 지난 경우를 의미함
// 4. 최종 결과를 나타내는 reduce() 메서드의 결과를 반환함
