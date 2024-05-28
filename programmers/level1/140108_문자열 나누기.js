// 연습문제 - 문자열 나누기

// 첫 번째 문자와 두 번째 문자가 다르면 첫 번째 문자의 개수와 첫 번째 문자와 다른 문자의 개수가 1로 같으므로 바로 자름
// 첫 번째 문자와 두 번째 문자가 같으면 계속 가다가 첫 번째 문자의 개수와 첫 번째 문자와 다른 문자의 개수가 같아지면 자름
// 예외 상황: 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료

function solution(s) {
  let splitCnt = 0;
  let cnt1 = (cnt2 = 0);
  let str = s[0];

  let i = 0;
  while (i < s.length) {
    if (str === s[i + 1]) cnt1 += cnt1 ? 1 : 2;
    else {
      cnt1 += cnt1 ? 0 : 1;
      cnt2++;
    }
    if (cnt1 === cnt2 || i + 1 >= s.length) {
      cnt1 = cnt2 = 0;
      splitCnt++;
      str = s[i + 2];
      i += 2;
    } else i++;
  }

  return splitCnt ? splitCnt : 1;
}
// i = 0, str = 'a', (1번째 인덱스 'a'와 비교) cnt1 = 2, cnt2 = 0
// i = 1, str = 'a', (2번째 인덱스 'a'와 비교) cnt1 = 3, cnt2 = 0
// i = 2, str = 'a', (3번째 인덱스 'b'와 비교) cnt1 = 3, cnt2 = 1
// i = 3, str = 'a', (4번째 인덱스 'b'와 비교) cnt1 = 3, cnt2 = 2
// i = 4, str = 'a', (5번째 인덱스 'a'와 비교) cnt1 = 4, cnt2 = 2
// i = 5, str = 'a', (6번째 인덱스 'c'와 비교) cnt1 = 4, cnt2 = 3
// i = 6, str = 'a', (7번째 인덱스 'c'와 비교) cnt1 = 4, cnt2 = 4, splitCnt = 1, 그 다음부터 str = 'c'
// i = 8, str = 'c', (9번째 인덱스 'c'와 비교) cnt1 = 2, cnt2 = 0
// i = 9, str = 'c', (10번째 인덱스 'a'와 비교) cnt1 = 2, cnt2 = 1
// i = 10, str = 'c', (11번째 인덱스 'b'와 비교) cnt1 = 2, cnt2 = 2, splitCnt = 2, 그 다음부터 str = 'b'
// i = 12, str = 'b', (13번째 인덱스 'a'와 비교) cnt1 = 1, cnt2 = 1, splitCnt = 3, 그 다음부터(없긴 하지만) str = undefined

// 다른 사람의 풀이 1
function solution(s) {
  let answer = 0;
  let current;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (count === 0) {
      answer++;
      current = s[i];
      count = 1;
    } else {
      if (current !== s[i]) count--;
      else count++;
    }
  }

  return answer;
}
// 1. 변수 answer과 count를 0으로 초기화하고, current를 선언함
// - answer: 분해한 문자열의 개수를 나타내는 변수
// - current: 현재 비교 대상이 되는 문자를 나타내는 변수
// - count: 문자열을 분해할 시점을 나타내는 변수(0이 될 때 분해함)
// 2. for문을 통해 0부터 s의 길이보다 작을 때까지 순회하면서 다음을 수행함
// (2-1) count가 0인 경우, answer을 1 증가시키고, current에 s의 i번째 문자를 대입하고, count를 1로 변경함
// (2-2) count가 0이 아닌 경우, current와 s의 i번째 문자를 비교함
// - 두 문자가 같지 않은 경우, count를 1 감소시킴
// - 두 문자가 같은 경우, count를 1 증가시킴
// 3. 최종적으로 나온 결과 변수 answer를 반환함

// s = "bananaa"
// i = 0, count = 0, answer = 1, current = "b", count = 1
// i = 1, count = 1, count = 0
// i = 2, count = 0, answer = 2, current = "n", count = 1
// i = 3, count = 1, count = 0
// i = 4, count = 0, answer = 3, current = "n", count = 1
// i = 5, count = 1, count = 0
// i = 6, count = 0, answer = 4, current = "a", count = 1

// 다른 사람의 풀이 2
function solution(s, count = 0) {
  if (!s) return count;
  let [first, ...rest] = s.split("");
  let countSame = 1;
  let countInSame = 0;
  let i = 0;
  for (; i < rest.length; i++) {
    if (rest[i] === first) countSame++;
    else countInSame++;
    if (countSame === countInSame) break;
  }
  return solution(rest.slice(i + 1).join(""), count + 1);
}
// 1. 문자열 s에 아무것도 없는 경우, count를 반환함
// 2. 문자열 s에 split() 메서드를 이용하여 문자 하나 하나를 배열의 요소로 만들고, 변수 first에는 배열의 첫 번째 요소(인덱스 0 요소), 변수 rest에는 배열의 첫 번째 요소를 제외한 나머지 배열을 대입함
// 3. 비교한 두 문자가 서로 같을 때의 횟수를 세는 변수 countSame을 1로 초기화함
// 4. 비교한 두 문자가 서로 다를 때의 횟수를 세는 변수 countInSame을 0으로 초기화함
// 5. for문과 return문에 사용할 변수 i를 0으로 초기화함
// 6. for문을 통해 rest 배열의 길이보다 작을 때까지 순회하면서 다음을 수행함
// - rest 배열의 i번째 요소(문자)와 first 변수(문자)가 같은 경우, countSame을 1 증가시킴
// - rest 배열의 i번째 요소와 first 변수가 다른 경우, countInSame을 1 증가시킴
// - countSame의 값과 countInSame의 값이 같은 경우, break를 통해 for문을 빠져나옴
// 7. solution() 함수를 반환함으로써 재귀를 수행함
// - 첫 번째 인자로는 rest 배열의 (i + 1)번 인덱스부터 끝까지 추출한 새로운 배열을 문자열화 한 값을 넣음
// - 두 번째 인자로는 count 변수에 1을 더한 값을 넣음

// solution("bananaa", count=0)
// first = "b", rest = ["a", "n", "a", "n", "a", "a"], countSame = 1, countInSame = 0
// i = 0, countSame = 1, countInSame = 1, solution("nanna", 1)
// first = "n", rest = ["a", "n", "a", "a"], countSame = 1, countInSame = 0
// i = 0, countSame = 1, countInSame = 1, solution("naa", 2)
// first = "n", rest = ["a", "a"], countSame = 1, countInSame = 0
// i = 0, countSame = 1, countInSame = 1, solution("a", 3)
// first = "a", rest = [], countSame = 1, countInSame = 0
// solution("", 4)
// count = 4
