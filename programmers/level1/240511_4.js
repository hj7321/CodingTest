// 2021 Dev-Matching: 웹 백엔드 개발자(상반기) - 로또의 최고 순위와 최저 순위

// 0의 개수가 관건

// lottos 배열과 win_nums 배열 중 일치하는 숫자가 있으면 count 변수를 1 증가시킴
// (count 변수의 값)개 번호가 일치 -> 최저 등수
// (count 변수의 값 + lottos 배열에 있는 0의 개수)개 번호가 일치 -> 최고 등수

function solution(lottos, win_nums) {
  let answer = [];
  let count = 0;
  let zeroCount = 0;

  win_nums.forEach((num) => (count += lottos.includes(num) ? 1 : 0));
  lottos.forEach((num) => (zeroCount += num === 0 ? 1 : 0));

  answer.push(7 - (count + zeroCount));
  if (answer[0] >= 7) answer[0] = 6;
  answer.push(7 - count);
  if (answer[1] >= 7) answer[1] = 6;

  return answer;
}

// 다른 사람의 풀이 1
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
// 1. rank 배열에 각 등수에 해당하는 숫자를 저장함
// - 인덱스 0, 1은 6등, 인덱스 6은 1등에 해당함
// 2. filter() 메서드를 사용하여 lottos 배열에서 win_nums 배열에 포함된 숫자만 필터링한 새로운 배열을 생성하고, 그 배열의 길이를 계산하여 minCount 변수에 저장함
// 3. filter() 메서드를 사용하여 lottos 배열에서 요소가 0인 것만 필터링한 새로운 배열을 생성하고, 그 배열의 길이를 계산하여 zeroCount 변수에 저장함
// 4. minCount와 zeroCount를 더하여 최대로 맞출 수 있는 숫자의 개수를 계산하여 maxCount 상수에 저장함
// 5. 최대로 맞출 수 있는 숫자의 개수에 해당하는 등수와, 실제로 맞춘(최소로 맞춘) 숫자의 개수에 해당하는 등수를 배열로 묶어서 반환함

// 다른 사람의 풀이 2
function solution(lottos, win_nums) {
  const answer = [];
  const min = lottos.filter((n) => win_nums.includes(n)).length;
  const max = lottos.filter((n) => n === 0).length + min;

  max > 1 ? answer.push(7 - max) : answer.push(6);
  min > 1 ? answer.push(7 - min) : answer.push(6);

  return answer;
}
// 1. 최대 등수와 최소 등수를 나열하여 반환할 배열 answer을 빈 배열로 초기화함
// 2. filter() 메서드를 사용하여 lottos 배열에서 win_nums 배열에 포함된 숫자만 필터링한 새로운 배열을 생성하고, 그 배열의 길이를 계산하여 min 변수에 저장함
// 3. filter() 메서드를 사용하여 lottos 배열에서 요소가 0인 것만 필터링한 새로운 배열을 생성하고, 그 배열의 길이와 min 값을 더하여 max 변수에 저장함
// 4. max 값이 1보다 크면 answer 배열에 7에서 max 값을 뺀 숫자를 넣고, 1보다 작으면 answer 배열에 6을 넣음
// 5. min 값이 1보다 크면 answer 배열에 7에서 min 값을 뺀 숫자를 넣고, 1보다 작으면 answer 배열에 6을 넣음
// 6. 최종적으로 나온 answer 배열을 반환함

// 다른 사람의 풀이 3
function solution(lottos = [], win_nums = []) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  let [max, min] = lottos.reduce(
    ([max, min], cur) =>
      win_nums.includes(cur)
        ? [++max, ++min]
        : cur === 0
        ? [++max, min]
        : [max, min],
    [0, 0]
  );
  return [rank[max], rank[min]];
}
// 1. rank 배열에 각 등수에 해당하는 숫자를 저장함
// 2. reduce() 메서드를 사용하여 lottos 배열의 각 요소를 순회함
// (2-1) 배열 구조 분해 할당을 사용하여 max와 min 변수를 0으로 초기화함
// (2-2) 현재 요소가 win_nums 배열에 포함되어 있는 경우, max와 min 변수를 1 증가시킴
// (2-3) 현재 요소가 win_nums 배열에 포함되어 있지 않은 경우, 현재 요소가 0인지 확인함
// (2-4) 현재 요소가 0인 경우, max 변수만 1 증가시켜서 max, min 값이 들어 있는 배열을 반환함
// (2-5) 현재 요소가 0이 아닌 경우, max와 min 변수에 아무런 변화를 주지 않고 max, min 값이 들어 있는 배열을 반환함
// 3. 최종적으로 반환된 [max, min] 값을 [max, min]에 각각 대입함
// 4. 최대로 맞출 수 있는 숫자의 개수에 해당하는 등수와, 실제로 맞춘 숫자의 개수에 해당하는 등수가 적힌 배열을 반환함
