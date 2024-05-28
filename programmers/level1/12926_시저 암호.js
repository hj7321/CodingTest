// 연습문제 - 시저 암호

// n이 1 이상 25 이하인 자연수니까 z, Z만 고려하면 안됨
// 소문자/대문자 알파벳을 아스키 코드로 바꿔서 n을 더한 값이 z/Z의 아스키 코드 값보다 크면,
// 그 차이만큼 (a/A의 아스키 코드 - 1)에 더해줌
// 문자를 받을 때 대소문자를 구분해야 되나?

function solution(s, n) {
  let answer = "";
  let ascii = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }

    let changeAscii = s[i].charCodeAt(0) + n;
    let lowerSub = "z".charCodeAt(0) - changeAscii;
    let upperSub = "Z".charCodeAt(0) - changeAscii;

    if (
      s[i].charCodeAt(0) >= "a".charCodeAt(0) &&
      s[i].charCodeAt(0) <= "z".charCodeAt(0) &&
      lowerSub < 0
    )
      ascii = "a".charCodeAt(0) - 1 + -lowerSub;
    else if (
      s[i].charCodeAt(0) >= "A".charCodeAt(0) &&
      s[i].charCodeAt(0) <= "Z".charCodeAt(0) &&
      upperSub < 0
    )
      ascii = "A".charCodeAt(0) - 1 + -upperSub;
    else ascii = changeAscii;

    answer += String.fromCharCode(ascii);
  }
  return answer;
}

let result = solution("xyz", 3);
console.log(result);

// console.log(" ".charCodeAt(0)); // 32
// console.log("a".charCodeAt(0)); // 97
// console.log("z".charCodeAt(0)); // 122
// console.log("A".charCodeAt(0)); // 65
// console.log("Z".charCodeAt(0)); // 90
// console.log(String.fromCharCode(91)); // [
// console.log(String.fromCharCode(92)); // \
// console.log(String.fromCharCode(65, 66, 67)); // ABC

// let ascii = "a".charCodeAt(0) - 1;
// console.log(String.fromCharCode(ascii + 1));

// 다른 사람의 풀이: 아스키 코드 사용하지 않고
function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}
