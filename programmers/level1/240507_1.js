// 월간 코드 챌린지 시즌 1 - 두 개 뽑아서 더하기

// 일단 배열에 더한 값을 모두 넣은 다음에 겹치는 수를 빼는 방법?
// 배열에 더한 값을 넣기 전에 겹치는 수가 있으면 넣지 않는 방법?

function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sum = numbers[i] + numbers[j];
      if (answer.includes(sum)) continue;
      answer.push(sum);
    }
  }
  return answer.sort((a, b) => a - b);
}

// 다른 사람의 풀이 1
function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(temp)];
  return answer.sort((a, b) => a - b);
}

// 1. temp 배열을 생성함. 이 배열은 모든 가능한 숫자의 합을 저장할 임시 배열임
// 2. 첫 번째 for문에서는 첫 번째 숫자(numbers[i])를 선택함
// 3. 두 번째 for문에서는 두 번째 숫자(numbers[j])를 선택함
// 4. 선택한 두 숫자의 합을 계산하여 temp 배열에 추가함
// 5. 중복된 합을 제거하기 위해 new Set(temp)을 사용하여 중복을 제거한 새로운 Set을 생성함
// 6. Set 객체를 배열로 변환하기 위해 전개 연산자(...)를 사용하여 Set을 배열로 변환함
// - 중복된 값을 제거하기 위해 Set 객체를 활용함
// - Set 객체는 중복된 값을 허용하지 않는 자료구조로, 한 번만 등장하는 값들을 모아둠
// - Set 객체는 배열이 아니므로 배열과 관련된 메서드를 사용할 수 없음
// - 이를 해결하기 위해 전개 연산자(...)를 사용하여 배열 temp의 요소들을 넣어서 Set 객체를 생성함과 동시에 배열로 변환함
// - 이 과정에서 Set은 중복된 값들을 제거하고 유일한 값들만을 남겨둠
// - 이렇게 하면 Set 객체의 모든 요소들이 배열 answer에 복사되고, 중복된 값은 제거된 채로 배열에 저장됨
// 7. 마지막으로, 정렬된 배열을 반환하기 위해 sort() 메서드를 사용하여 오름차순으로 정렬함

// 다른 사람의 풀이 2
function solution(numbers) {
  var answer = [];

  numbers.forEach((v) => {
    const num1 = numbers.slice();

    let a = num1.indexOf(v);
    num1.splice(a, 1);

    num1.forEach((z) => {
      let num2 = v + z;

      if (!answer.includes(num2)) {
        answer.push(num2);
      }
    });
  });

  return answer.sort((a, b) => a - b);
}
// 1. 먼저 빈 배열 answer을 초기화함. 이 배열은 중복된 합을 제거하고 정렬된 결과를 담을 곳임
// 2. numbers 배열을 forEach() 메서드를 사용하여 반복함. 각 숫자 v에 대해 다음을 수행함
// (2-1) num1이라는 새로운 배열을 생성하여 numbers 배열을 복제함
// 이렇게 하면 원본 배열이 변경되는 것을 방지할 수 있음
// - 'const num1 = numbers;'로 배열을 복사하는 것은 원본 배열과 동일한 배열을 가리키게 됨
// - 이 경우에는 원본 배열이 변경되면 복사본 역시 변경됨
// - 따라서 원본 배열을 변경하지 않고 복사본을 유지하려면 slice() 메서드를 사용하는 것이 좋음
// (2-2) v의 인덱스를 찾아내고, 그 값을 a에 저장함
// (2-3) num1 배열에서 v의 인덱스에 해당하는 요소를 제거함
// 3. 내부 forEach() 반복문을 사용하여 num1 배열의 각 요소 z와 v를 더하여 num2 변수에 저장함
// - 이때, 중복된 합을 제거하기 위해 answer 배열에 이미 num2가 포함되어 있는지를 확인하고, 포함되어 있지 않다면 answer 배열에 추가함
// 4. 모든 반복이 끝나면 answer 배열을 오름차순으로 정렬함
// 5. 정렬된 answer 배열을 반환함