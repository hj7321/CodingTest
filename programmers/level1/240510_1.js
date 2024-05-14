// 완전탐색 - 모의고사

// 1번 수포자: 1, 2, 3, 4, 5 (5패턴)
// 2번 수포자: 2, 1, 2, 3, 2, 4, 2, 5 (8패턴)
// 3번 수포자: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 (10패턴)
// 만약 answer의 개수가 10개라면,
// 1번은 패턴을 10/5 = 2번 반복
// 2번은 패턴을 10/8 = 2번 반복
// 3번은 패턴을 10/10 = 1번 반복
// Math.ceil(n/패턴 개수)

function solution(answers) {
  let answer = [];

  let stu1 = "12345";
  const pattern1 = 5;
  let stu2 = "21232425";
  const pattern2 = 8;
  let stu3 = "3311224455";
  const pattern3 = 10;
  let n = answers.length;

  let stu1Arr = stu1.repeat(Math.ceil(n / pattern1)).split("");
  let total1 = 0;
  let stu2Arr = stu2.repeat(Math.ceil(n / pattern2)).split("");
  let total2 = 0;
  let stu3Arr = stu3.repeat(Math.ceil(n / pattern3)).split("");
  let total3 = 0;

  for (let i = 0; i < n; i++) {
    if (stu1Arr[i] === String(answers[i])) total1++;
    if (stu2Arr[i] === String(answers[i])) total2++;
    if (stu3Arr[i] === String(answers[i])) total3++;
  }

  let maxTotal = Math.max(total1, total2, total3);
  if (maxTotal === total1) answer.push(1);
  if (maxTotal === total2) answer.push(2);
  if (maxTotal === total3) answer.push(3);

  return answer;
}

let answers = [1, 2, 3, 4, 5];
console.log(typeof answers[1]);
let answers2 = "12345".split("");
console.log(answers2);
console.log(typeof answers2[1]);

// 다른 사람의 풀이 1
function solution(answers) {
  let answer = [];
  let a1 = [1, 2, 3, 4, 5];
  let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  let a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  let a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  let max = Math.max(a1c, a2c, a3c);

  if (a1c === max) answer.push(1);
  if (a2c === max) answer.push(2);
  if (a3c === max) answer.push(3);

  return answer;
}
// 1. 정답을 반환할 빈 배열 answer을 생성함
// 2. 변수 a1, a2, a3 각각에 답안 패턴을 배열 형식으로 저장함
// 3. filter() 메서드를 사용하여 answers 배열을 순회함
// - answers 배열의 현재 요소와 a1 배열의 i % a1.length 인덱스의 요소가 같은 경우에만 새로운 배열에 넣고, answers 배열을 모두 순회한 후 나온 결과 배열의 길이를 구해서 변수 a1c에 저장함
// - answers 배열의 현재 요소와 a2 배열의 i % a2.length 인덱스의 요소가 같은 경우에만 새로운 배열에 넣고, answers 배열을 모두 순회한 후 나온 결과 배열의 길이를 구해서 변수 a2c에 저장함
// - answers 배열의 현재 요소와 a3 배열의 i % a3.length 인덱스의 요소가 같은 경우에만 새로운 배열에 넣고, answers 배열을 모두 순회한 후 나온 결과 배열의 길이를 구해서 변수 a3c에 저장함
// 4. a1c, a2c, a3c의 최댓값을 구해서 변수 max에 저장함
// 5. a1c의 값과 max의 값이 같은 경우, answer 배열에 1을 넣음
// 6. a2c의 값과 max의 값이 같은 경우, answer 배열에 2를 넣음
// 7. a3c의 값과 max의 값이 같은 경우, answer 배열에 3을 넣음
// 8. answer 배열을 반환함

// 다른 사람의 풀이 2
function solution(answers) {
  let answer = [];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == man1[i % man1.length]) count[0]++;
    if (answers[i] == man2[i % man2.length]) count[1]++;
    if (answers[i] == man3[i % man3.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) answer.push(i + 1);
  }

  return answer;
}
// 1. 정답을 반환할 빈 배열 answer을 생성함
// 2. 상수 man1, man2, man3 각각에 답안 패턴을 배열 형식으로 저장함
// 3. 길이가 3인 count 배열의 모든 요소를 0으로 초기화함
// 4. answers 배열의 길이만큼 for문을 반복함
// - answers 배열의 i번째 인덱스와 man1 배열의 i % man1.length번째 인덱스가 같은 경우에만 count 배열의 0번째 인덱스의 숫자를 1 증가시킴
// - answers 배열의 i번째 인덱스와 man2 배열의 i % man2.length번째 인덱스가 같은 경우에만 count 배열의 1번째 인덱스의 숫자를 1 증가시킴
// - answers 배열의 i번째 인덱스와 man3 배열의 i % man3.length번째 인덱스가 같은 경우에만 count 배열의 2번째 인덱스의 숫자를 1 증가시킴
// 5. count 배열 요소의 최댓값을 구해서 상수 max에 저장함
// 6. count 배열의 길이만큼 for문을 반복함
// - max의 값과 count 배열의 i번째 인덱스의 요소의 값이 같은 경우, answer 배열에 i+1을 넣음
// 7. answer 배열을 반환함