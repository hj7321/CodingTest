// 연습문제 - 숫자 짝꿍

// 공통으로 들어가는 숫자가 없는 경우: "-1" 반환
// 공통으로 들어가는 숫자가 0만 있는 경우: "0" 반환
// 나머지 경우: 공통으로 들어가는 숫자로 만들 수 있는 가장 큰 정수를 문자열로 반환
// 어떤 정수를 기준으로 순회해야 할까? 자릿수가 더 적은 거 or 더 많은 거?
// 시간 초과됨..
// 다른 방법을 찾자!
// X, Y를 정렬한 후, 처음 자리의 숫자가 다르면 무조건 "-1" 반환
// 공통된 0이 있는 자리 이후의 자리의 숫자가 다르면 무조건 "0" 반환
// 나머지 경우는 공통으로 들어가는 숫자로 만들 수 있는 가장 큰 정수를 문자열로 반환
// for문을 쓰면 안되나봐ㅜ
// 객체를 만들까?
// X = "100"일 때, {"0": 2, "1": 1}
// Y = "2345"일 때, {"2": 1, "3": 1, "4": 1, "5": 1}
// 근데 이렇게 해도 for 문으로 순회해야 되는디

function solution(X, Y) {
  let commonStr = "";

  for (let i = 9; i >= 0; i--) {
    const regex = new RegExp(String(i), "g");
    const countX = (X.match(regex) || []).length;
    const countY = (Y.match(regex) || []).length;
    commonStr += String(i).repeat(Math.min(countX, countY));
  }

  if (commonStr === "") return "-1";
  if (commonStr[0] === "0") return "0";
  return commonStr.split("").join("");
}

// 다른 사람의 풀이 1
function solution(X, Y) {
  let result = "";
  const numObj = {};

  for (const char of X) {
    numObj[char] = (numObj[char] || 0) + 1;
  }

  for (const char of Y) {
    if (!numObj[char]) continue;
    result += char;
    numObj[char]--;
  }

  if (result === "") return "-1";
  if (+result === 0) return "0";
  return [...result]
    .map((num) => +num)
    .sort((a, b) => b - a)
    .join("");
}
// 1. 결과를 담을 변수 result를 빈 문자열로 초기화한다.
// 2. 문자가 몇 번 나오는지 담을 변수 numObj를 빈 객체로 초기화한다.
// 3. 문자열 X의 문자(char) 하나하나를 순회한다.
// - numObj의 키 값으로 char이 있는 경우 그 밸류 값에서 1을 더한다.
// - numObj의 키 값으로 char이 없는 경우 numObj[char]을 생성하고 밸류 값으로 0으로 설정하고 그 밸류 값에서 1을 더한다.
// 4. 문자열 Y의 문자(char) 하나하나를 순회한다.
// - numObj의 키 값으로 char이 없거나, 밸류 값이 0인 경우 다음 반복으로 바로 넘어간다.
// - numObj의 키 값으로 char이 있는 경우 result에 그 문자를 추가하고, 그 밸류 값에서 1을 뺀다.
// 5. 두 개의 for문을 반복하면 result에는 공통으로 나타나는 정수둘의 문자열을 더한 문자열 들어가 있다.
// 6. result가 빈 문자열일 경우, "-1"을 리턴한다.
// 7. result를 숫자로 변환한 값이 0일 경우, "0"을 리턴한다.
// 8. 위의 두 경우가 아닌 경우, 스프레드 연산자를 사용하여 result를 배열로 만든다.
// - map() 메서드를 이용하여 각 요소를 숫자로 변환시킨다.
// - sort() 메서드를 이용하여 배열의 요소들을 내림차순으로 정렬한다.
// - join() 메서드를 이용하여 배열을 문자열로 변환한다.
// - 최종 결과를 리턴한다.

// 다른 사람의 풀이 2
function solution(X, Y) {
  const commonNumbers = [...new Set(X.split(""))]
    .filter((number) => {
      return Y.includes(number);
    })
    .sort((a, b) => b - a);

  if (!commonNumbers.length) return "-1";
  if (!Number(commonNumbers[0])) return "0";

  return commonNumbers
    .map((number) => {
      const Xcount = X.split("").reduce((count, Xnumber) => {
        if (Xnumber === number) return (count += 1);
        return count;
      }, 0);
      const Ycount = Y.split("").reduce((count, Ynumber) => {
        if (Ynumber === number) return (count += 1);
        return count;
      }, 0);
      return Xcount <= Ycount ? number.repeat(Xcount) : number.repeat(Ycount);
    })
    .join("");
}
// 1. 다음을 수행한 결과를 상수 commonNumbers에 대입한다.
// - split() 메서드를 이용하여 문자열 X의 문자 하나하나를 요소로 하는 배열을 만든다.
// - Set 자료구조를 이용하여 배열에서 중복된 값을 제거하여 Set 객체로 변환한다.
// - 스프레드 연산자를 사용하여 Set 객체를 다시 배열로 변환한다.
// - 바로 위에서 만든 배열에 filter() 메서드를 이용하여 문자열 Y에 포함되어 있는 문자들만 들어있는 새로운 배열을 반환한다.
// - 바로 위에서 만든 배열에 sort() 메서드를 이용하여 배열의 요소를 내림차순으로 정렬한다.
// 2. commonNumbers의 길이가 0인 경우, "-1"을 리턴한다.
// 3. commonNumbers의 0번째 요소를 숫자로 바꾼 값이 0인 경우, "0"을 리턴한다.
// 4. commonNumbers 배열에 map() 메서드를 이용하여 현재 요소(number)에 대해서 다음 동작들을 반복 수행한다.
// (4-1) 문자열 X에 split() 메서드를 이용하여 문자열 X의 문자 하나하나를 요소로 하는 배열을 만든다.
// (4-2) 위에서 만든 배열에 reduce() 메서드를 이용하여 다음을 수행한 후, reduce() 함수의 최종 결과값(count)을 상수 Xcount에 대입한다.
// - 누적 변수 count의 초기값을 0으로 설정한다.
// - reduce() 메서드에서의 현재 요소(Xnumber)과 map() 메서드에서의 현재 요소(number)가 같은 경우, count에 1을 더하여 리턴한다.
// - 같지 않은 경우, count에 아무 동작도 수행하지 않고 리턴한다.
// (4-3) 문자열 Y에 split() 메서드를 이용하여 문자열 Y의 문자 하나하나를 요소로 하는 배열을 만든다.
// (4-4) 위에서 만든 배열에 reduce() 메서드를 이용하여 다음을 수행한 후, reduce() 함수의 최종 결과값(count)을 상수 Ycount에 대입한다.
// - 누적 변수 count의 초기값을 0으로 설정한다.
// - reduce() 메서드에서의 현재 요소(Ynumber)과 map() 메서드에서의 현재 요소(number)가 같은 경우, count에 1을 더하여 리턴한다.
// - 같지 않은 경우, count에 아무 동작도 수행하지 않고 리턴한다.
// (4-5) Xcount가 Ycount보다 작거나 같은 경우, 현재 요소(number)를 Xcount번 반복한 값을 반환하여 새로운 배열 요소로 넣는다.
// 5. map() 메서드로 나온 새로운 배열에 join() 메서드를 사용하여 각 요소를 구분자 없이 붙인 문자열로 만들고, 그 값을 반환한다.
