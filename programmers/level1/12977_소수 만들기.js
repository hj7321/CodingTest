// Summer/Winter Coding(~2018) - 소수 만들기

function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let total = nums[i] + nums[j] + nums[k];
        let prime = 0;
        for (let i = 2; i < total; i++) {
          if (total % i === 0) break;
          else prime++;
        }
        prime === total - 2 ? answer++ : answer;
      }
    }
  }

  return answer;
}

// 다른 사람의 풀이
function primecheck(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}
function solution(nums) {
  let cnt = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let w = j + 1; w < nums.length; w++) {
        if (primecheck(nums[i] + nums[j] + nums[w])) {
          cnt++;
        }
      }
    }
  }
  return cnt;
}
// primecheck() 함수에서 반복문을 Math.sqrt(n)보다 작거나 같을 때까지만 돌리는 이유는 소수를 판별하는 효율적인 방법 중 하나인 제곱근을 이용한 방법임
// 어떤 수 n이 소수인지 아닌지 판별하기 위해서는, 그 수의 약수를 모두 찾을 필요가 있음
// n의 약수를 모두 찾는다는 것은 n까지의 모든 수에 대해 나눗셈을 해 보는 것을 의미함
// 하지만 제곱근 이후에는 더 이상 쌍으로 나타날 약수가 없다는 것을 알 수 있으므로, 제곱근까지만 나눗셈을 진행해도 충분함
// 예를 들어, 어떤 수 n의 제곱근을 Math.sqrt(n)라고 하면, n이 소수인 경우에는 그보다 큰 약수가 존재하지 않음
// 따라서 n-1까지 나눗셈을 해보아도 소수임이 보장됨
// 이렇게 하면, 시간 복잡도를 O(√n)으로 줄일 수 있어서, 대량의 수에 대한 소수 판별을 효율적으로 수행할 수 있음