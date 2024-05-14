// 연습문제 - 명예의 전당 (1)

// 배열의 길이가 3보다 클 때, 인덱스 3부터는 자름

// function solution(k, score) {
//   let arr = [];
//   return score.map((s, idx) => {
//     arr.push(s);
//     arr.sort((a, b) => b - a);
//     if (arr.length >= k + 1) {
//       arr.splice(k);
//       return arr[k - 1];
//     } else return arr[idx];
//   });
// }

// 다른 사람의 풀이
function solution(k, score) {
  let answer = [];
  return score.reduce((acc, cur) => {
    console.log(acc);
    answer.push(cur);
    answer = answer.sort((a, b) => b - a).slice(0, k);
    return [...acc, Math.min(...answer)];
  }, []);
}
let result = solution(3, [10, 100, 20, 150, 1, 100, 200]);
console.log(result);
// 1. 빈 배열을 생성하여 추후에 정렬된 점수를 저장할 배열을 초기화함
// 2. reduce() 메서드를 사용하여 score 배열의 각 요소를 처리함. 초기값은 빈 배열임
// 3. 현재 점수(현재 요소)를 answer 배열에 추가함
// 4. answer 배열을 내림차순으로 정렬한 후, 처음부터 k개의 요소만 남기고 잘라냄
// 5. 현재까지의 결과 배열(acc)과 answer 배열의 최소값을 구한 뒤, 새로운 결과 배열을 반환함
// 6. acc 값이 반환한 새로운 결과 배열로 갱신됨
// 7. 순회가 끝나면 최종적인 결과 배열을 반환함