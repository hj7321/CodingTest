// 연습문제 - 과일 장수

function solution(k, m, score) {
  let answer = 0;
  let mCount = 0;
  let n = score.length;
  let boxNum = Math.floor(n / m);
  score.sort((a, b) => a - b);
  while (score.length !== n - boxNum * m) {
    if (score.lastIndexOf(k) !== -1) {
      score.pop();
      mCount++;
    } else k--;
    if (mCount === m) {
      answer += k * m;
      mCount = 0;
    }
  }
  return answer;
}

// 다른 사람의 풀이 1
function solution(k, m, score) {
  let answer = 0;
  const sortedScore = score
    .slice()
    .sort((a, b) => a - b)
    .slice(score.length % m);
  for (let i = 0; i < sortedScore.length; i += m) {
    answer += sortedScore[i] * m;
  }
  return answer;
}
// 1. 주어진 score 배열을 복사하고, 복사된 배열을 오름차순으로 정렬한 후, 배열의 길이를 m으로 나눈 나머지만큼의 요소를 제외한 새로운 배열을 생성하여 sortedScore 변수에 할당함
// 2. for 루프에서 변수 i를 0으로 초기화하고, sortedScore 배열의 길이보다 작은 동안 반복하며, 매 반복마다 i를 m씩 증가시켜서 m 간격으로 점수를 선택하게 만듦
// 3. answer에는 현재 인덱스에 해당하는 sortedScore 배열의 요소와 m을 곱한 값을 더함
// 4. 최종 결과값인 answer를 반환함

// 다른 사람의 풀이 2
solution = (_, m, s) =>
  s
    .sort()
    .filter((_, i) => !((s.length - i) % m))
    .reduce((a, v) => a + v, 0) * m;
// 1. 첫 번째 매개변수로는 '_'(사용하지 않는 값)을 받음
// 2. sort() 메서드를 사용하여 주어진 점수 배열 s를 오름차순으로 정렬함
// 3. filter() 메서드를 사용하여 배열을 필터링함
// - 이때 배열의 길이에서 현재 인덱스 i를 빼고, 이를 m으로 나눈 나머지를 취한 값이 0이 되는 경우만을 필터링함
// - 즉, m 간격으로 선택된 항목들만을 선택하게 됨
// 4. reduce() 메서드를 사용하여 필터링된 배열을 순회하면서 요소를 합산함
// - 초기값으로 0을 전달하여 합산을 시작함
// 5. 마지막으로 계산된 총 합에 m을 곱한 값을 반환함
// - 이렇게 함으로써 m 간격으로 선택된 항목들의 점수를 합산한 후, 해당 값을 다시 m으로 곱하여 최종 결과를 구함