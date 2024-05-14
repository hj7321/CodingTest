// 연습문제 - 직사각형 별찍기

// 프로그래머스에 기본적으로 있던 코드
process.stdin.setEncoding("utf8");
// 표준 입력 스트림의 인코딩을 UTF-8로 설정함
// 이는 입력된 데이터를 문자열로 처리하기 위한 것임
process.stdin.on("data", (data) => {
  // 표준 입력 스트림에서 'data' 이벤트가 발생할 때마다 콜백 함수를 실행함
  // 이 콜백 함수는 입력된 데이터를 처리함
  const n = data.split(" ");
  // 입력된 데이터를 공백을 기준으로 분할하여 배열 n에 저장함
  const a = Number(n[0]),
    b = Number(n[1]);
  // 배열의 첫 번째 원소를 변수 a에, 두 번째 원소를 변수 b에 저장함
  // 이때, Number() 함수를 사용하여 문자열을 숫자로 변환함
  // console.log(a);
  // console.log(b);
  // 변수 a와 b를 출력함
  let row = "";
  let col = "";
  for (let i = 1; i <= a; i++) {
    row += "*";
  }
  for (let i = 1; i <= b; i++) {
    col += row;
    if (i != b) col += "\n";
  }
  console.log(col);
});
// 이 코드는 Node.js 환경에서 사용자로부터 입력을 받아들여 처리하는 기본적인 예제임
// 코드 실행 방법
// 1. 터미널에서 Node.js로 실행함
// 2. 프로그램이 실행되면, 터미널에 숫자 두 개를 공백으로 구분하여 입력하고 엔터 키를 누름
// 3. 프로그램은 입력된 숫자를 순서대로 출력함

// 다른 사람의 풀이: repeat() 메서드 사용하여 간단하게 풂
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});

// 다른 사람의 풀이: repeat() 메서드 두 번 사용하여 간단하게 풂
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  console.log(("*".repeat(a) + `\n`).repeat(b));
});

// function solution(n, m) {
//   let row = "";
//   let col = "";
//   for (let i = 1; i <= n; i++) {
//     row += "*";
//   }
//   for (let i = 1; i <= m; i++) {
//     col += row;
//     if (i != m) col += "\n";
//   }
//   return col;
// }

// let result = solution(5, 3);
// console.log(result);
