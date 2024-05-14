// 연습문제 - 크기가 작은 부분 문자열

function solution(t, p) {
  let answer = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let str = t.slice(i, i + p.length);
    if (Number(str) <= Number(p)) answer++;
  }
  return answer;
}
