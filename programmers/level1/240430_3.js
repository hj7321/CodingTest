// 연습문제 - 최대공약수와 최소공배수

function solution(n, m) {
  let arr = [1, 1];
  let i = 2;
  while (i <= Math.min(n, m)) {
    if (n % i === 0 && m % i === 0) {
      arr[0] *= i;
      n /= i;
      m /= i;
    } else i++;
  }

  arr[1] = n * m * arr[0];
  return arr;
}

// let result = solution(6, 14);
// console.log(result);

// 다른 사람이 작성한 코드
function gcdlcm(a, b) {
  let r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
let result1 = gcdlcm(6, 14);
console.log(result1);
// for 루프에서 유클리드 호제법을 사용하여 최대공약수를 계산함
// 1. 'var ab = a * b' : 변수 ab에 a와 b를 곱한 값을 할당함 -> 초기화 구문이고, 다른 부분에서 ab를 건드리지 않으므로 for 루프 내에서 ab의 값은 고정됨
// 2. 'r = a % b' : 변수 r에 a를 b로 나눈 나머지를 저장함
// 3. 'a = b' : 변수 a에는 기존의 b 값을 대입함
// 4. 'b = r' : 변수 b에는 기존의 r 값을 대입함
// 5. 이 과정을 r이 0이 될 때까지(즉, 조건식이 거짓이 될 때까지) 반복함
// 6. 최종적으로 b에는 a와 b의 최대공약수가 저장됨

// for문의 조건식
// 'r = a % b'는 나머지를 계산하고 그 값을 변수 r에 할당함
// 이 할당 구문은 동시에 r의 값으로 평가됨
// 이 값이 0이 아니면 조건식은 참으로 평가됨
// 즉, r이 0이 아닌 동안 루프가 계속됨
// r이 0이 되면 조건식은 거짓이 되어 루프가 종료됨
