// 연습문제 - 푸드 파이트 대회

function solution(food) {
  let answer = [0];
  for (let i = food.length - 1; i > 0; i--) {
    let num = Math.floor(food[i] / 2);
    for (let j = 1; j <= num; j++) {
      answer.push(i);
      answer.unshift(i);
    }
  }
  return answer.join("");
}

// 다른 사람의 풀이 1
function solution(food) {
  let res = "";
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }
  return res + "0" + [...res].reverse().join("");
}
// 1. 결과 문자열을 나타내는 변수 "res"를 빈 문자열로 초기화함
// 2. 배열의 첫 번째 요소(인덱스 1)부터 시작하는 반복문을 선언함
// 3. 반복문 내에서 현재 인덱스 값을 문자열로 변환하고, 해당 인덱스의 음식 양을 절반으로 나눈 정수 부분만큼 해당 숫자를 반복하여 결과 문자열 "res"에 추가함
// 4. 반복문이 끝난 후, "res"에는 패턴이 반영된 문자열이 저장되어 있음
// 5. 이 문자열에 "0"을 추가하고, "res"를 배열로 변환한 후 순서를 뒤집고 다시 문자열로 합쳐서 반환함

// 다른 사람의 풀이 2
function solution(food) {
  let answer = "";
  let arr = [];

  food.map((f, i) => {
    f = f % 2 == 0 ? f : f - 1;
    for (let j = 0; j < f / 2; j++) {
      arr.push(i);
    }
  });

  answer = arr.join("") + 0 + arr.reverse().join("");
  return answer;
}
// 1. 결과 문자열을 담을 변수 answer과 패턴을 생성하기 위한 배열 arr을 선언함
// 2. 주어진 음식 양 배열(food)을 순회하면서 각 요소에 대해 작업을 수행함
// 3. 현재 음식의 양이 홀수인 경우, 하나를 뺀 짝수로 만들어 줌
// 4. 현재 음식의 양을 절반으로 나눈 만큼, 해당 음식의 인덱스를 패턴 배열 arr에 추가함
// 5. 패턴 배열 arr을 문자열로 변환한 후, "0"을 추가하고, 패턴 배열을 역순으로 만든 후 다시 문자열로 변환하여 그 뒤에 추가함
// 6. 최종적으로 만들어진 패턴을 반환함