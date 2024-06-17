// 연습문제 - JadenCase 문자열 만들기

function solution(s) {
  const arr = s.split(" ");
  const newArr = arr.map((cur) => {
    let newStr = ""; // 이게 있어서 통과했구만
    for (let i = 0; i < cur.length; i++) {
      // 배열의 현재 요소가 빈 문자열("")이면 cur.length가 0이므로 for 문이 실행되지 않음
      if (typeof cur[i] === "number" || cur[i] === " ") newStr += cur[i];
      // cur[i] === " " 이 부분 어떻게 통과된거야?
      // 저 부분을 cur[i] === "" 이렇게 바꿔도 통과고...
      // 아 애초에 빈 문자열("")이면 for 문을 못 들어오는구나
      // 따라서 if 문의 || cur[i] === " " 이 부분은 없어도 됨
      else newStr += i === 0 ? cur[i].toUpperCase() : cur[i].toLowerCase();
    }
    return newStr;
  });
  return newArr.join(" ");
}

// console.log(" " === ""); // 이거 false인데..
// const result = solution("3people   unFollowed  me");
// console.log(result);
console.log("".length); // 0
console.log(" ".length); // 1
console.log("".split("")); // []

// 다른 사람의 풀이 1
function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}
// 1. 입력받은 문자열 s에 split() 메서드를 사용하여 공백 문자(" ")를 기준으로 문자열을 구분하여 배열의 요소로 넣고 배열을 반환한다.
// 2. 1에서 split() 메서드가 반환한 배열에 map() 메서드를 사용하여 각 요소를 순회하며 다음을 수행한 후, 완성된 새로운 배열을 반환한다.
// (2-1) 현재 요소의 첫 번째 문자(인덱스 0번째 요소)는 대문자로 변환하고, 나머지 문자들은 소문자로 변환하여 문자열을 더한 요소를 새로운 배열에 넣는다.
// 3. 2에서 map() 메서드가 반환한 배열에 join() 메서드를 사용하여 배열의 요소들을 공백 문자(" ")로 연결한 문자열을 최종적으로 반환한다.

// 다른 사람의 풀이 2
function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === " ") {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}
// 1. 정답을 넣을 변수 answer를 빈 문자열로 초기화한다.
// 2. 문자열 s의 길이만큼 for 문을 순회하며 다음을 수행한다.
// (2-1) 현재 문자의 인덱스가 0이거나 현재 문자의 바로 전의 문자가 공백 문자(" ")인 경우, 현재 문자를 대문자로 변환하여 answer 변수에 더한다.
// (2-2) 위의 경우에 해당하지 않는 경우, 현재 문자를 소문자로 변환하여 answer 변수에 더한다.
// 3. 최종적으로 답이 저장되어 있는 answer 변수를 반환한다.
