// 연습문제 - 2016년

// 2016년은 윤년: 2월이 29일까지 있는 해
// 31일까지: 1, 3, 5, 7, 8, 10, 12월
// 30일까지: 4, 6, 9, 11월
// 29일까지: 2월
// switch문?

function solution(a, b) {
  let answer = "";
  let day = b;
  switch (a - 1) {
    case 0:
      break;
    case 11:
      day += 30;
    case 10:
      day += 31;
    case 9:
      day += 30;
    case 8:
      day += 31;
    case 7:
      day += 31;
    case 6:
      day += 30;
    case 5:
      day += 31;
    case 4:
      day += 30;
    case 3:
      day += 31;
    case 2:
      day += 29;
    case 1:
      day += 31;
  }
  switch (day % 7) {
    case 0:
      answer = "THU";
      break;
    case 1:
      answer = "FRI";
      break;
    case 2:
      answer = "SAT";
      break;
    case 3:
      answer = "SUN";
      break;
    case 4:
      answer = "MON";
      break;
    case 5:
      answer = "TUE";
      break;
    case 6:
      answer = "WED";
      break;
  }

  return answer;
}

// 다른 사람의 풀이 1
function getDayName(a, b) {
  let tempDate = new Date(2016, a - 1, b);
  return tempDate.toString().slice(0, 3).toUpperCase();
}
// 1. 2016년을 기준으로 주어진 월(a)과 일(b)에 해당하는 날짜를 생성함
// - 자바스크립트의 Date 객체를 사용하여 이 작업을 수행함
// - 주의할 점은 자바스크립트에서 월은 0부터 시작하므로 입력된 월에서 1을 빼주어야 함
// 2. tempDate를 문자열로 변환함
// 3. 문자열에서 첫 번째 문자부터 세 번째 문자까지 잘라냄
// - 이는 요일을 나타내는 부분임
// - 예를 들어 "Wed" 또는 "Sat"과 같은 형식암
// 4. 잘라낸 문자열을 모두 대문자로 변환함

// 다른 사람의 풀이 2
function getDayName(a, b) {
  let dayList = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let daySum;
  if (a < 2) {
    daySum = b - 1;
  } else {
    daySum = monthArr.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
  }
  return dayList[daySum % 7];
}
// 1. 요일을 나타내는 문자열 배열을 생성함
// 2. 각 월별 일 수를 나타내는 배열을 생성함
// 3. 날짜를 누적하여 계산할 변수 daySum을 선언함
// 4. 주어진 월이 2월보다 작을 경우(1월일 경우), 해당 월의 일(b)에서 1을 빼서 요일을 계산함
// 5. 주어진 월이 2월보다 크거나 같을 경우, 이전 월까지의 일 수를 누적하여 게산함
// - 이전 월(a - 1)까지의 일 수를 계산하기 위해 monthArr 배열에서 주어진 월 이전까지의 월들을 잘라내고, 그 일 수를 모두 합산함
// - 그리고 주어진 월의 일(b)을 더하고 1을 빼서 전체 일 수를 계산함
// 6. 전체 일 수를 7로 나눈 나머지를 구하여 그 값에 해당하는 요일을 반환함