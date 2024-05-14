// 연습문제 - 문자열 다루기 기본

function solution(s) {
  if (s.length === 4 || s.length === 6) {
    for(let i = 0; i < s.length; i++) {
      if(Number(s[i]) >= 0 && Number(s[i]) <= 9) continue;
      return false;
    }
    return true;
  } 
  return false;
}
// for문으로 반복하여 문자열의 문자 하나하나씩 검사하는 게 가장 좋음

// console.log(Number("0001e0")); // 1
// console.log(Number("0001E0")); // 1
// console.log(Number("10e1")); // 100
// console.log(Number("10E1")); // 100
// console.log(Number("0x16")); // 22
// console.log(Number("12  ")); // 12
// console.log(Number("  12")); // 12
let result = solution("0x16");
console.log(result);

// 다른 사람의 풀이
function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;

  return regex.test(s);
}
// 위 정규식은 두 개의 패턴을 OR 연산자(|)로 결합한 것임
// 1. ^\d{6}$ : 정확히 6자리의 숫자로 이루어진 문자열을 나타냄
// - ^ : 문자열의 시작
// - \d{6} : \d는 숫자를 나타내고, {6}은 바로 앞의 패턴이 6번 반복되는 것을 의미함
// - $ : 문자열의 끝
// 2. ^\d{4}$ : 정확히 4자리의 숫자로 이루어진 문자열을 나타냄
// - ^ : 문자열의 시작
// - \d{4} : \d는 숫자를 나타내고, {4}는 바로 앞의 패턴이 4번 반복되는 것을 의미함
// - $ : 문자열의 끝
// 정의한 정규식을 사용하여 문자열 s가 패턴과 일치하는지 테스트함
// test() 메서드는 주어진 문자열이 정규식과 일치하면 true, 일치하지 않으면 false를 반환함
