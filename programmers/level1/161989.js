// 연습문제 - 덧칠하기

// n은 나눈 벽 구역의 개수
// m은 한 번에 칠할 수 있는 벽 구역의 개수
// section은 칠해야 하는 벽 구역의 번호가 오름차순으로 정렬되어 있는 배열

function solution(n, m, section) {
  let answer = 1;
  let end = section[0] + (m - 1);
  for (let i = 1; i < section.length; i++) {
    if (end < section[i]) {
      end = section[i] + (m - 1);
      answer++;
    }
  }
  return answer;
}

// 다른 사람의 풀이 1
function solution(n, m, sections) {
  let answer = 0;
  let painted = 0;
  for (let section of sections) {
    if (painted < section) {
      answer++;
      painted = section + m - 1;
    }
  }
  return answer;
}
// 1. 필요한 페인트칠의 횟수를 나타낼 변수인 answer를 0으로 초기화함
// 2. 현재까지 칠해진 구간의 끝 지점을 나타낼 변수인 painted를 0으로 초기화함
// 3. sections 배열의 요소 각각을 반복문으로 순회함
// - 만약 현재까지 칠해진 구간의 끝 지점보다 해당 구간의 시작 지점이 큰 경우, 새로운 페인트가 필요한 구간이라는 의미임
// - 이 경우 answer를 1 증가시키고, 현재 구간을 칠한 후의 끝 지점을 계산함
// - 칠한 구간의 끝 지점은 해당 구간의 끝 지점에 m - 1을 더한 값임
// - 이는 한 번 칠한 구간을 포함하여 다음 구간을 칠하기 위해 필요한 위치를 나타냄
// 4. 반복이 완료되면 최소 필요한 페인트칠의 횟수를 나타내는 answer 값을 반환함

// 다른 사람의 풀이 2
function solution(n, m, section) {
  let count = 0;
  const arr = Array.from(Array(n + 1).fill(null));

  section.forEach((el) => {
    arr[el] = 1;
  });

  section.forEach((el) => {
    if (arr[el]) {
      arr.fill(null, el, el + m);
      count++;
    }
  });
  return count;
}
// 1. 필요한 페인트칠 횟수를 나타낼 변수인 count를 0으로 초기화함
// 2. 벽 구역을 나타내는 배열 arr를 생성함
// - 배열의 크기는 벽 구역의 개수 n보다 1 더 크게 설정되며, 모든 요소는 초기에는 null로 채워짐
// - Array(n + 1) : 길이가 n + 1인 배열을 생성함
// - .fill(null) : 생성된 배열의 모든 요소를 null로 채움
// - Array.from() : 앞서 생성한 null로 채워진 배열을 복사하여 새로운 배열을 생성함
// 3. section 배열을 반복하면서 각 구간을 벽 구역을 나타내는 배열 arr에 표시함
// - 페인트를 칠할 구간을 표시하기 위해 해당 인덱스에 1을 할당함
// 4. 이후, section 배열을 다시 반복하면서 각 구간에 대해 다음을 수행함
// (4-1) 만약 해당 구간을 페인트칠해야 한다면, 해당 구간과 구간의 길이 m만큼을 배열 arr에서 null로 채움. 이는 이미 칠해진 구간을 덮어쓰기 위한 조치임
// - el부터 el + m - 1까지의 구간을 null 값으로 채움
// - arr : 구간을 채울 대상 배열
// - null : 채우고자 하는 값
// - el : 시작 인덱스(구간을 채우기 시작할 위치)
// - el + m : 끝 인덱스(구간을 채울 마지막 위치의 바로 다음 위치)
// (4-2) 해당 구간을 칠한 후, 페인트칠 횟수를 세는 count 변수를 1 증가시킴
// 5. 모든 구간에 대한 반복이 끝나면 최소 필요한 페인트칠 횟수를 나타내는 count 값을 반환함

const str = "hello";
const arr = Array.from(str);
console.log(arr); //
