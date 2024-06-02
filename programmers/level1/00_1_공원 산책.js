// 연습문제 - 공원 산책

// E: 오른쪽으로 이동(열 이동)
// "E 2" : [0, 0] => [0, 2]
// W: 왼쪽으로 이동(열 이동)
// "W 2" : [0, 0] => [0, -2]
// S: 아래쪽으로 이동(행 이동)
// "S 2" : [0, 0] => [2, 0]
// N: 위쪽으로 이동(행 이동)
// "N 2" : [0, 0] => [-2, 0]

// 시작 지점의 좌표를 구함
// routes 배열을 순회하면서 좌표로 이동하면 그 곳이 park에서 O인지 X인지 판단
// O면 이동, X면 그대로 있기

function solution(park, routes) {
  let answer = [];
  let start;
  park.forEach((str, x) => {
    let y = str.indexOf("S");
    if (y !== -1) start = [x, y];
  });
  routes.reduce((end, route) => {
    route[0];
    return end;
  }, start);
  return answer;
}
