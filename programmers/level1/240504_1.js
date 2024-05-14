// 2021 카카오 채용연계형 인턴십 - 숫자 문자열과 영단어

// z로 시작하면 0
// o로 시작하면 1
// t로 시작하면 2 또는 3 -> 그 뒤에가 w이면 2, h이면 3
// f로 시작하면 4 또는 5 -> 그 뒤에가 o이면 4, i이면 5
// s로 시작하면 6 또는 7 -> 그 뒤에가 i이면 6, e이면 7
// e로 시작하면 8
// n로 시작하면 9

function solution(s) {
  const numberArr = [
    ["zero", "0", 4],
    ["one", "1", 3],
    ["two", "2", 3],
    ["three", "3", 5],
    ["four", "4", 4],
    ["five", "5", 4],
    ["six", "6", 3],
    ["seven", "7", 5],
    ["eight", "8", 5],
    ["nine", "9", 4],
  ];
  let newStr = numberArr.reduce((acc, cur) => {
    let startIdx = s.indexOf(cur[0]);
    while (startIdx !== -1) {
      let sliceStr = s.slice(startIdx, startIdx + cur[2]);
      s = s.replace(sliceStr, cur[1]);
      if (s.includes(cur[0])) startIdx = s.indexOf(cur[0]);
      else break;
    }
    acc = s;
    return acc;
  }, "");
  return Number(newStr);
}

// 다른 사람의 풀이 1
function solution(s) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
// 1. numbers 배열에는 영어 단어로 표현된 숫자가 저장되어 있음
// 2. answer 변수에는 입력 문자열 s가 복사됨
// 3. for 루프를 통해 numbers 배열의 각 요소에 대해 다음을 수행함
// - split() 메서드를 사용하여 answer 문자열을 현재 숫자에 해당하는 영어 단어로 나눔
// - 이때, 나눈 결과는 해당 영어 단어를 제외한 부분들로 이루어진 배열이 됨
// - join() 메서드를 사용하여 나눈 결과를 현재 숫자에 해당하는 인덱스로 대체함
// - 즉, "one"은 1로, "two"는 2로 대체됨
// answer 변수에 이를 반영함
// 4. answer 변수를 숫자로 변환하여 반환함

// 다른 사람의 풀이 2
function solution(s) {
  s = s.replace(/zero/gi, 0)
  .replace(/one/gi, 1)
  .replace(/two/gi, 2)
  .replace(/three/gi, 3)
  .replace(/four/gi, 4)
  .replace(/five/gi, 5)
  .replace(/six/gi, 6)
  .replace(/seven/gi, 7)
  .replace(/eight/gi, 8)
  .replace(/nine/gi, 9)
  return parseInt(s);
}
// "gi"는 정규 표현식의 플래그임. 정규 표현식을 사용할 때 옵션을 지정하는 역할을 함
// - "g"는 전역 검색(global search)을 나타냄. 즉, 문자열 내에서 패턴과 일치하는 모든 부분을 찾음
// - "i"는 대소문자를 구별하지 않고(insensitive) 검색한다는 것을 나타냄
// 1. 문자열 내의 "zero"를 대소문자 구분 없이 모두 "0"으로 대체함
// 2. 문자열 내의 "one"를 대소문자 구분 없이 모두 "1"으로 대체함
// 3. 문자열 내의 "two"를 대소문자 구분 없이 모두 "2"으로 대체함
// 4. 문자열 내의 "three"를 대소문자 구분 없이 모두 "3"으로 대체함
// 5. 문자열 내의 "four"를 대소문자 구분 없이 모두 "4"으로 대체함
// 6. 문자열 내의 "five"를 대소문자 구분 없이 모두 "5"으로 대체함
// 7. 문자열 내의 "six"를 대소문자 구분 없이 모두 "6"으로 대체함
// 8. 문자열 내의 "seven"를 대소문자 구분 없이 모두 "7"으로 대체함
// 9. 문자열 내의 "eight"를 대소문자 구분 없이 모두 "8"으로 대체함
// 10. 문자열 내의 "nine"를 대소문자 구분 없이 모두 "9"으로 대체함
// 11. 문자열을 정수로 변환함

// 다른 사람의 풀이 3
function solution(s) {
  let charSet = {
    "zero" : 0,
    "one" : 1,
    "two" : 2,
    "three" : 3,
    "four" : 4,
    "five" : 5,
    "six" : 6,
    "seven" : 7,
    "eight" : 8,
    "nine" : 9,
  }

  for(let [key, value] of Object.entries(charSet)) {
    let re = new RegExp(`${key}`,"g");
    s = s.replace(re, value);
  }
  return parseInt(s);
}
// 1. charSet 객체
// - 이 객체는 영어 단어를 숫자로 매핑한 객체임
// - 각각의 영어 단어를 키(key)로, 헤당하는 숫자를 값(value)으로 가지고 있음
// 2. for 루프
// - charSet 객체를 순회하면서 각각의 영어 단어를 해당하는 숫자로 대체함
// - Object.entries() 메서드를 사용하여 객체의 키와 값 쌍을 배열로 변환하고, 구조 분해 할당을 사용하여 각각의 키와 값에 접근함
// 3. new RegExp()
// - 정규 표현식 객체를 생성함
// - 여기서는 문자열 내에서 해당 영어 단어를 모두 찾기 위해 g 플래그를 사용함
// 4. s.replace(re, value)
// - 정규 표현식 re를 사용하여 문자열 s에서 해당하는 영어 단어를 찾아서 그에 해당하는 숫자 value로 대체함
// 5. parseInt(s) : 문자열을 정수로 변환하여 반환함
// 템플릿 리터럴을 사용한 문자열 `${key}`
// - 이것은 변수 key의 값을 문자열로 대체함
// - 즉, key 변수가 문자열일 경우에는 `${key}`를 사용하여 해당 문자열 값을 사용함
// - 그러나 여기서 key는 객체의 키로 사용되기 때문에 이미 문자열임
// - 따라서 `${key}`와 그냥 key를 사용하는 것은 동일한 결과를 가져옴

// 다른 사람의 풀이 4
const digit2word = ['zero','one','two','three','four','five','six','seven', 'eight','nine'];
function solution(s) {
    return Number(digit2word.reduce((ans, word, digit) => ans.replace(new RegExp(word, 'g'), digit), s));
}
// 여기서 reduce() 메서드는 배열의 각 요소에 대해 주어진 콜백 함수를 실행하여 하나의 결과 값을 반환함
// 1. digit2word 배열은 영어 단어 형태의 숫자와 해당하는 숫자를 매핑함
// 2.  reduce() 메서드를 사용하여 배열을 순회함
// - reduce()의 콜백 함수는 누적값(ans), 현재값(word), 현재 인덱스(digit)를 매개변수로 받음
// 3. 정규 표현식 new RegExp(word, 'g')를 사용하여 현재값, 즉 현재 단어(word)를 전역(global)으로 검색하는 정규 표현식을 생성함
// 4. replace() 메서드를 사용하여 문자열(ans)에서 현재 단어(word)에 해당하는 모든 부분을 현재 인덱스, 즉 현재 단어와 대응하는 숫자(digit)로 대체함
// 5. reduce()의 초기값으로 주어진 문자열 s는 replace() 메서드를 통해 변환되어 최종적으로 변환된 숫자를 나타냄
// 6. Number() 함수를 사용하여 문자열을 숫자로 변환하여 반환함