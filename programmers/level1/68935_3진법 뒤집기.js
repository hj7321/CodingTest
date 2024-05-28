// 월간 코드 챌린지 시즌 1 - 3진법 뒤집기

// n을 3으로 나눈 나머지를 기록한다
// n을 계속 3으로 나눈다
// n이 1 또는 2가 되면 이 과정을 멈춘다
// 뭔가 재귀함수 쓰는 게 좋을 것 같다..
// 앞뒤 반전되지 않은 3진법을 문자열로 만들어서 문자 하나씩 3의 0제곱부터 곱해야되니까
// 0번째는 3의 0제곱, 1번째는 3의 1제곱, 2번째는 3의 2제곱 곱하는 식으로 대응되기 때문에
// 문자를 집어넣는 게 n이 1 또는 2가 되면 시작해야 함
// 아니면 배열에 넣은 다음에 reverse()하고 join("")해서 문자열로?
// 더할 때는 reduce() 메서드?

function solution(n) {
  let arr = [];
  while (true) {
    if (n === 1 || n === 2) {
      arr.unshift(n);
      break;
    }
    arr.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  return arr.reduce((acc, cur, idx) => acc + cur * 3 ** idx, 0);
}

let result = solution(125);
console.log(result);

// 다른 사람의 풀이
const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};
// 'n.toString(3)' : 입력된 숫자 n을 3진수로 변환함
// '[...n.toString(3)]' : 3진수로 변환된 숫자를 배열로 변환함
// '.reverse()' : 배열의 순서를 뒤집음
// 'join("")' : 배열의 각 요소를 빈 문자열로 구분하여 하나의 문자열로 합침
// 'parseInt(..., 3)'
// - 3진수로 표현된 문자열을 다시 숫자로 변환함
// - 3진수로 변환된 문자열과 함께 기수 3을 넘겨줌으로써, 3진수를 10진수로 변환할 수 있음