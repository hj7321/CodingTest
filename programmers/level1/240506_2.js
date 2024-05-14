// 정렬 - K번째수

function solution(array, commands) {
  return commands.reduce((acc, cur, idx) => {
    let arr = array.slice(cur[0] - 1, cur[1]).sort((a, b) => a - b);
    acc[idx] = arr[cur[2] - 1];
    return acc;
  }, []);
}

let result = solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
console.log(result);

// 다른 사람의 풀이
function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}
// 풀이 해석하기
// 1. 주어진 commands 배열에 대해 map() 메서드를 이용하여 각 명령(command)에 대해 반복함
// 2. 각 명령은 세 개의 정수를 포함하는 배열이며, 각각 시작 위치(sPosition), 끝 위치(ePosition), 찾고자 하는 값의 위치(position)를 나타냄
// 3. 각 명령에 대해 다음을 수행함
// - array 배열에서 시작 위치(sPosition - 1)부터 끝 위치(ePosition - 1)까지의 부분 배열을 추출함
// - 추출한 부분 배열을 오름차순으로 정리함
// - 정렬된 배열에서 각 명령에 대한 결과 배열을 반환함
// 4. map() 메서드를 사용하여 각 명령에 대한 결과 배열을 반환함