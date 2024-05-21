// 연습문제 - 둘만의 암호

function solution(s, skip, index) {
  const skipArr = skip.split("").map((ele) => ele.charCodeAt());
  const sArr = s.split("").map((ele) => ele.charCodeAt());
  const resultArr = sArr.map((ele) => {
    for (let i = 1; i <= index; i++) {
      ++ele;
      if ("z".charCodeAt() < ele) ele = "a".charCodeAt();
      while (skipArr.includes(ele)) {
        ++ele;
        if ("z".charCodeAt() < ele) ele = "a".charCodeAt();
      }
    }
    return String.fromCharCode(ele);
  });
  return resultArr.join("");
}

console.log("a".charCodeAt()); // 97

// "xyza", "bcde", 5
// 일단 그냥 5를 더해보면 "cdef"
// 1) x를 c로 바꿀 때 skip이 2번(b, c) 있었으므로 다시 2를 더해서 c -> e
// 그런데 d, e도 skip이므로 다시 2를 더해서 e -> g
// 2) y를 d로 바꿀 때 skip이 3번(b, c, d) 있었으므로 다시 3을 더해서 d -> g
// 그런데 e도 skip이므로 다시 1을 더해서 g -> h
// 3) z를 e로 바꿀 때 skip이 4번(b, c, d, e) 있었으므로 다시 4를 더해서 e -> i
// 4) a를 f로 바꿀 때 skip이 4번(b, c, d, e) 있었으므로 다시 4를 더해서 f -> j
// 최종 결과: "ghij"

let result = solution("aukks", "wbqd", 5);
console.log(result);

// 다른 사람의 풀이 1
function solution(s, skip, index) {
  // prettier-ignore
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                    "u", "v", "w", "x", "y", "z"].filter(c => !skip.includes(c));
  return s
    .split("")
    .map((c) => alphabet[(alphabet.indexOf(c) + index) % alphabet.length])
    .join("");
}
// 1. 배열에 알파벳 소문자 26개를 순서대로 넣음
// 2. 위에서 만든 배열에 filter() 메서드를 이용하여 현재 요소(알파벳)가 skip 배열에 포함되어 있지 않은 경우만 새 배열에 넣음
// 3. filter() 메서드로 만든 새 배열을 상수 alphabet에 대입함
// 4. s 배열에 split() 메서드를 이용하여 각 문자 하나하나를 요소로 하는 배열로 만듦
// 5. split() 메서드로 만든 배열에 map() 메서드를 이용하여 다음을 수행함
// - alphabet 배열에서 현재 요소(알파벳)의 인덱스를 찾아서 index만큼 더한 후, alphabet 배열의 길이를 나눈 나머지를 구함
// - 위에서 구한 숫자를 alphabet 배열의 인덱스로 넣어서 그에 해당하는 요소(알파벳)을 반환하여 새 배열에 넣음
// 6. map() 메서드로 만든 새 배열에 join() 메서드를 이용하여 구분자 없이 하나의 문자열로 합치고, 그 결과를 리턴함

// 다른 사람의 풀이 2
const solution = (s, skip, index) => {
  let ans = "";
  const matched = "abcdefghijklmnopqrstuvwxyz".match(
    new RegExp(`[^${skip}]`, "g")
  );
  for (const c of s) {
    const newIdx = matched.indexOf(c) + index;
    ans += matched[newIdx % matched.length];
  }
  return ans;
};
// 1. 변수 ans를 빈 문자열("")로 초기화함
// 2. 상수 matched에 다음을 대입함
// - 영어 소문자 알파벳을 순서대로 포함한 문자열에 match() 메서드를 이용하여 다음 정규식과 일치하는 모든 부분을 배열로 반환함
// - skip 안에 있는 문자들을 제외한 모든 문자를 배열에 포함시킴
// 3. for...of문을 이용하여 문자열 s의 모든 문자를 순회하면서 다음을 수행함
// - 상수 newIdx에 matched 배열에서 c가 위치한 인덱스에 index를 더한 값을 대입함
// - matched 배열에서 newIdx를 matched 배열의 길이로 나눈 값에 해당하는 인덱스를 찾아서 그 요소(알파벳)를 변수 ans에 더함
// 4. 최종적으로 구한 결과 변수 ans를 반환함
