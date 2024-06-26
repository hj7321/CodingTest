// 연습문제 - 콜라 문제

// 빈 병 a개를 가져다주면 콜라 b병을 주는 마트가 있을 때,
// 빈 병 n개를 가져다주면 몇 병을 받을 수 있는가?

// 빈 병 2개를 가져다주면 콜라 1병을 주는 마트가 있을 때,
// 빈 병 20개를 가져다주면 몇 병을 받을 수 있는지 계산
// 20 / 2 = 10 -> 10개 냉장고에 저장: 10
// 10(냉장고: 0) / 2 = 5 -> 5개 냉장고에 저장: 5
// 4(냉장고: 1) / 2 = 2 -> 2개 냉장고에 저장: 3
// 2(냉장고: 1) / 2 = 1 -> 1개 냉장고에 저장: 2
// 2(냉장고: 0) / 2 = 1 -> 1개 냉장고에 저장: 1 -> 끝.
// 합계: 10 + 5 + 2 + 1 + 1 = 19

// 만약에, 빈 병 3(a)개를 가져다주면 콜라 2(b)병을 주는 마트가 있을 때,
// 빈 병 20(n)개를 가져다주면 몇 병을 받을 수 있는지 계산
// 처음에 2개 냉장고에 저장: 2
// 18 / (3/2) = 12 -> 12개 냉장고에 저장: 14
// 12(냉장고: 2) / (3/2) = 8 -> 8개 냉장고에 저장: 10
// 9(냉장고: 1) / (3/2) = 6 -> 6개 냉장고에 저장: 7
// 6(냉장고: 1) / (3/2) = 4 -> 4개 냉장고에 저장: 5
// 3(냉장고: 2) / (3/2) = 2 -> 2개 냉장고에 저장: 4
// 3(냉장고: 1) / (3/2) = 2 -> 2개 냉장고에 저장: 3
// 3(냉장고: 0) / (3/2) = 2 -> 2개 냉장고에 저장: 2 -> 끝.
// 합계: 12 + 8 + 6 + 4 + 2 + 2 + 2 = 36

// 반복문 끝나는 조건: 남은 콜라병의 개수가 a보다 적을 때

function solution(a, b, n) {
  let refrigerator = 0;
  let sum = 0;
  const divide = a / b;
  if (n % a) {
    refrigerator += n % a;
    n = n - (n % a);
  }
  while (true) {
    n = Math.floor(n / divide);
    sum += n;
    refrigerator += n;
    if (refrigerator < a) break;
    if (refrigerator % a) {
      n = refrigerator - (refrigerator % a);
    } else {
      n = refrigerator;
    }
    refrigerator -= n;
  }
  return sum;
}

// 다른 사람의 풀이 1 -> 완벽하게 이해하지는 못함
solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;
// 풀이 해석 참고한 블로그: https://blog.naver.com/doctorgu/222992407249
// 1. Math.max(n - b, 0)
// - 가지고 있는 빈 콜라병의 수(n)에서 마트에서 주는 콜라병의 수(b)를 계산함
// - 최소한 b개의 병을 가져다 주어야만 콜라를 받을 수 있
// - 이 값이 음수라면 0으로 처리함
// [추가 설명] 조건에서 n은 항상 b보다 크므로 음수가 될 수 없음. 따라서 Math.max(n - b, 0) 부분을 n - b로 바꿔도 됨
// - 즉, 받을 수 있는 최소한의 콜라병의 수를 구함
// 2. Math.floor(... / (a - b))
// - 받을 수 있는 최소한의 콜라병의 수를 빈 병 a개를 가져다주면 콜라 b병을 주는 마트의 규칙을 이용하여 계산함
// - 이는 받을 수 있는 최대한의 콜라병의 수를 나타냄
// - a병을 주면 b병을 받는다면, 결국 (a - b)병을 주는 것이라고 생각할 수 있음 -> 내가 가지고 있는 콜라병의 수가 (a - b)병만큼 없어진다고 생각하면 됨
// 3. * b: 계산된 최대한의 콜라병의 수에 마트에서 주는 콜라병의 수 b를 곱하여, 상빈이가 받을 수 있는 총 콜라병의 수를 구함

// 다른 사람의 풀이 2
function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    answer += parseInt(n / a) * b;
    n = parseInt(n / a) * b + (n % a);
  }
  return answer;
}
// 1. 결과값을 저장할 변수 answer를 초기화함
// 2. 가지고 있는 빈 병의 수(n)가 마트에서 주는 콜라를 받기 위한 최소한의 빈 병의 수(a)보다 크거나 같을 때까지 반복함
// 3. 현재 가지고 있는 빈 병의 수(n)를 마트에서 주는 콜라를 받기 위한 최소한의 빈 병의 수(a)로 나눈 몫에 마트에서 주는 콜라병의 수(b)를 곱하여, 받을 수 있는 콜라병의 수를 계산함. 이 값을 기존의 answer에 더함
// 4. 받은 콜라를 마셨을 때 남은 빈 병의 수를 계산하여 n을 업데이트함
// - 현재 가지고 있는 빈 병의 수(n)를 마트에서 주는 콜라를 받기 위한 최소한의 빈 병의 수(a)로 나눈 몫에 마트에서 주는 콜라병의 수(b)를 곱하고, 남은 빈 병의 수를 더함
// 5. 반복문이 종료되면 받을 수 있는 콜라병의 수를 나타내는 answer를 반환함

// 다른 사람의 풀이 3
function solution(a, b, n) {
  var answer = 0;
  let maxGiv = 0;
  while (a <= n) {
    maxGiv = ~~(n / a);
    answer += maxGiv * b;
    n = n - maxGiv * (a - b);
  }
  return answer;
}
// 1. 받을 총 콜라병의 개수를 담는 변수 answer를 초기화함
// 2. 마트에 가져가서 받을 수 있는 콜라병의 최대 개수를 저장하는 변수 maxGiv를 초기화함
// 3. 가지고 있는 빈 병의 수(n)가 마트에서 주는 콜라를 받기 위한 최소한의 빈 병의 수(a)보다 크거나 같을 때까지 반복함
// 4. maxGiv에는 현재 가지고 있는 빈 병으로 받을 수 있는 콜라병의 최대 개수를 저장함
// 5. answer에는 현재 받을 수 있는 콜라 병의 수를 더함. 즉, maxGiv에 b를 곱한 값을 더해줌
// 6. 콜라를 받은 후 남은 빈 병의 개수를 계산함
// - 이는 현재 가지고 있는 빈 병의 개수인 n에서 콜라를 받은 후에 실제로 사용한(없어진) 빈 병의 개수를 빼준 것임
// 7. 반복이 끝나면 최종적으로 계산된 answer 값을 반환함