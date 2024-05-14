// 연습문제 - 삼총사

// 첫 번째, 두 번째 선택한 숫자를 더하고 그것과 더했을 때 0이 되는 세 번째 숫자를 고르는 방법?
// 밑에 코드가 맞긴 맞는데.. 더 효율적인 방법 없을까?!
// reduce() 메서드로 할 수 있으려나(누적값, 현재값, 현재 인덱스, 배열)

function solution(number) {
  let answer = 0;
  let n = number.length;
  for(let i = 0; i < n; i++) {
    for(let j = i+1; j < n; j++) {
      for(let k = j+1; k < n; k++) {
        let sum = number[i] + number[j] + number[k];
        if(sum === 0) answer++;
      }
    }
  }
  return answer;
}

let result = solution([-3, -2, -1, 0, 1, 2, 3]);
console.log(result);