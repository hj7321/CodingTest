// 연습문제 - 바탕화면 정리

// [드래그 시작점의 x좌표, 드래그 시작점의 y좌표, 드래그 끝점의 x좌표, 드래그 끝점의 y좌표]

// 예시 분석
// #2
// 2행 6열, 3행 7열, 3행 8열, 4행 4열, 4행 5열, 5행 5열 -> 결과: (1, 3)에서 (5, 8)
// (1, 3)은 각 행, 열 중에서 가장 작은 행, 열에 1을 뺀 값
// (5, 8)은 각 행, 열 중에서 가장 큰 행, 열의 값

// #4
// (2행 1열) -> 결과: (1, 0)에서 (2, 1)
// (1, 0)은 각 행, 열 중에서 가장 작은 행, 열에 1을 뺀 값
// (2, 1)은 각 행, 열 중에서 가장 큰 행, 열의 값

// #3
// 1행 2열, 3열, 7열, 8열
// 2행 1열, 4열, 6열, 9열
// 3행 1열, 5열, 9열
// 4행 2열, 8열
// 5행 3열, 7열
// 6행 4열, 6열
// 7행 5열
// -> 결과: (0, 0)에서 (7, 9)
// (0, 0)은 각 행, 열 중에서 가장 작은 행, 열에 1을 뺀 값
// (7, 9)는 각 행, 열 중에서 가장 큰 행, 열의 값

// 가장 작은 행, 가장 큰 행을 찾는 방법은 쉬움
// 가장 작은 행: 배열을 돌면서 #이 하나라도 포함되는 최초 인덱스+1 -> 여기에 다시 -1을 해야하니까 애초에 1을 더하지 말자
// 가장 큰 행: 배열을 거꾸로 돌면서 #이 하나라도 포함되는 최초 인덱스+1

// 가장 작은 열, 가장 큰 열을 찾는 방법
// 두 개의 변수(min, max)를 선언해놓고 요소(문자열)를 순회할 때마다 min, max를 비교 및 갱신

function solution(wallpaper) {
  const [minRow, maxRow, minCol, maxCol] = wallpaper.reduce(
    ([minRow, maxRow, minCol, maxCol], curStr, idx) => {
      [...curStr].forEach((curChar, index) => {
        if (curChar === "#") {
          if (minRow > idx + 1) minRow = idx + 1;
          if (maxRow < idx + 1) maxRow = idx + 1;
          if (minCol > index + 1) minCol = index + 1;
          if (maxCol < index + 1) maxCol = index + 1;
        }
      });
      return [minRow, maxRow, minCol, maxCol];
    },
    [51, 0, 51, 0]
  );
  return [minRow - 1, minCol - 1, maxRow, maxCol];
}

// 다른 사람의 풀이 1
function solution(wallpaper) {
  let left = [];
  let top = [];
  let right = [];
  let bottom = [];
  wallpaper.forEach((v, i) => {
    [...v].forEach((val, ind) => {
      if (val === "#") {
        left.push(i);
        top.push(ind);
        right.push(i + 1);
        bottom.push(ind + 1);
      }
    });
  });
  return [
    Math.min(...left),
    Math.min(...top),
    Math.max(...right),
    Math.max(...bottom),
  ];
}
// 1. 변수 left, top, right, bottom을 모두 빈 배열로 초기화함
// - left 배열은 드래그 시작점의 x좌표를 찾기 위함임
// - top 배열은 드래그 시작점의 y좌표를 찾기 위함임
// - right 배열은 드래그 끝점의 x좌표를 찾기 위함임
// - bottom 배열은 드래그 끝점의 y좌표를 찾기 위함임
// 2. wallpaper 배열에 forEach() 메서드를 사용하여 각 요소(문자열)를 순회하면서 다음을 수행함
// (2-1) 각 요소(문자열)를 스프레드 연산자를 사용하여 배열로 만들고, 그 배열에 forEach() 메서드를 사용하여 각 요소(문자)를 순회하면서 다음을 수행함
// - 현재 요소(문자)가 "#"인 경우, left 배열에 wallpaper 배열의 현재 인덱스(i) 값을 넣음
// - 현재 요소(문자)가 "#"인 경우, top 배열에 문자열을 변환한 배열([...v])의 현재 인덱스(ind) 값을 넣음
// - 현재 요소(문자)가 "#"인 경우, right 배열에 wallpaper 배열의 현재 인덱스에 1을 더한 값(i+1)을 넣음
// - 현재 요소(문자)가 "#"인 경우, bottom 배열에 wallpaper 문자열을 변환한 배열([...v])의 현재 인덱스에 1을 더한 값(ind + 1)을 넣음
// 3. 최종적으로 다음 결과를 포함한 배열을 반환함
// - left 배열의 요소 중에 가장 작은 값
// - top 배열의 요소 중에 가장 작은 값
// - right 배열의 요소 중에 가장 큰 값
// - bottom 배열의 요소 중에 가장 큰 값

// 다른 사람의 풀이 2
function solution(wallpaper) {
  let [x1, y1, x2, y2] = [wallpaper.length, wallpaper[0].length, 0, 0];
  wallpaper.forEach((paper, i) => {
    if (paper.includes("#")) {
      x1 = Math.min(x1, i);
      y1 = Math.min(y1, paper.indexOf("#"));
      x2 = Math.max(x2, i);
      y2 = Math.max(y2, paper.lastIndexOf("#"));
    }
  });
  return [x1, y1, x2 + 1, y2 + 1];
}
// 1. 드래그 시작점의 x좌표를 나타내는 변수 x1를 wallpaper 배열의 길이로 초기화함
// 2. 드래그 시작점의 y좌표를 나타내는 변수 y1를 wallpaper[0] 문자열의 길이로 초기화함
// 3. 드래그 끝점의 x좌표를 나타내는 변수 x2를 0으로 초기화함
// 4. 드래그 끝점의 y좌표를 나타내는 변수 y2를 0으로 초기화함
// 5. wallpaper 배열에 forEach() 메서드를 사용하여 각 요소(문자열)을 순회하면서 다음을 수행함
// (5-1) 현재 요소(문자열)에 "#"이 포함되어 있는 경우 다음을 수행함
// - x1의 값과 현재 인덱스(i) 값 중 더 작은 값을 x1에 넣음
// - y1의 값과 현재 요소에 "#"가 처음 등장하는 인덱스 값 중 더 작은 값을 y1에 넣음
// - x2의 값과 현재 인덱스(i) 값 중 더 큰 값을 x2에 넣음
// - y2의 값과 현재 요소에 "#"가 마지막으로 등장하는 인덱스 값 중 더 큰 값을 y2에 넣음
// 6. 최종적으로 x1, y1, x2 + 1, y2 + 1를 요소로 하는 배열을 리턴함
