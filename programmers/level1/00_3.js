// 연습문제 - 대충 만든 자판

// 결과 배열과 targets 배열의 길이가 같으므로 targets에 map() 메서드 적용
// targets 안의 요소(문자열)에서 문자 하나하나를 순회하면서 keymap에 문자가 있는지 인덱스 확인
// 더 적은 인덱스 선택해서 그 인덱스를 더함
// keymap 배열에 문자가 없을 경우 0을 더함
// 최종적으로 계산한 결과가 0이면 -1로 설정

function solution(keymap, targets) {
  return targets.map((str) => {
    let resultEle = 0;
    for (let i = 0; i < str.length; i++) {
      const resultIdx = keymap.reduce((idx, key) => {
        if (key.indexOf(str[i]) !== -1 && key.indexOf(str[i]) + 1 < idx)
          idx = key.indexOf(str[i]) + 1;
        return idx;
      }, 101);
      resultEle += resultIdx === 101 ? 0 : resultIdx;
    }
    return !resultEle ? -1 : resultEle;
  });
}
// targets.map() -> str = "ABCD", resultEle = 0
// i = 0, str[i] = "A"
// keymap.reduce() -> idx = 101
// 1) key = "ABACD", idx = 1
// 2) key = "BCEFD", idx = 1
// resultEle = 1
// i = 1, str[i] = "B"
// keymap.reduce() -> idx = 101
// 1) key = "ABACD", idx = 2
// 2) key = "BCEFD", idx = 1
// resultEle = 2
// i = 2, str[i] = "C"
// keymap.reduce() -> idx = 101
// 1) key = "ABACD", idx = 4
// 2) key = "BCEFD", idx = 2
// resultEle = 4
// i = 3, str[i] = "D"
// keymap.reduce() -> idx = 101
// 1) key = "ABACD", idx = 5
// 2) key = "BCEFD", idx = 5
// resultEle = 9
// map()의 첫 번째 요소: 9
