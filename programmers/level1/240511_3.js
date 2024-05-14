// 연습문제 - 기사단원의 무기

// 약수의 개수 구할 때: 주어진 숫자의 제곱근까지 반복하여 나머지가 0이 되는 개수를 구하고 거기에 2를 곱함. 단, 제곱수는 그 값에서 1을 빼야 함

function solution(number, limit, power) {
  let divisor = Array(number).fill(1);

  for (let i = 2; i <= number; i++) {
    let sqrtNum = Math.sqrt(i);
    let divisorCnt = 0;
    for (let j = 1; j <= sqrtNum; j++) {
      if (i % j === 0) divisorCnt++;
    }
    divisor[i - 1] = String(sqrtNum).includes(".")
      ? divisorCnt * 2
      : divisorCnt * 2 - 1;
  }

  return divisor
    .map((num) => (num = num > limit ? power : num))
    .reduce((acc, cur) => acc + cur);
}

// 다른 사람의 풀이
function solution(number, limit, power) {
  let answer = 0;
  for (let n = 1; n <= number; n++) {
    let count = 0;
    for (let j = 1; j * j <= n; j++) {
      if (j * j == n) count++;
      else if (n % j == 0) count += 2;
    }
    if (count > limit) count = power;
    answer += count;
  }
  return answer;
}
// for (let j = 1; j * j <= n; j++) 은  for (let j = 1; j <= Math.sqrt(n); j++)과 같은 표현임
// 중첩된 for 문에서의 동작
// - j * j가 n인 경우, 즉 j의 제곱이 n인 경우에는 약수의 개수를 세는 count 변수를 1만 증가시킴
// - j의 제곱이 n이 아니면서 n을 j로 나눈 나머지가 0인 경우, 즉 j를 제곱한 값이 n이 아니면서 j가 n의 약수인 경우에는 약수의 개수를 세는 count 변수를 2 증가시킴