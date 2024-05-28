// 탐욕법(Greedy) - 체육복

// 수업을 들을 수 있는 학생 수 = 전체 학생 수 - 체육복을 도난당한 학생 수 + 체육복을 도난당한 학생 중 체육복을 빌린 학생 수
// lost 배열을 순회하면서 현재 요소(숫자)의 -1, +1한 값(숫자)이 reserve 배열에 있는지 판단한 후, reserve 배열에서 그 요소를 제거한다.
// 주의사항: 여벌 체육복을 가져온 학생이 체육복을 도난당했을 경우!!!를 잘 고려해야 함

function solution(n, lost, reserve) {
  let resultCnt = 0;
  const lostCopy = [...lost];
  resultCnt += lost.reduce((count, curNum) => {
    if (reserve.indexOf(curNum) !== -1) {
      reserve.splice(reserve.indexOf(curNum), 1);
      lostCopy.splice(lostCopy.indexOf(curNum), 1);
      ++count;
    }
    return count;
  }, 0);
  resultCnt += lostCopy
    .sort((a, b) => a - b)
    .reduce((count, curNum) => {
      if (reserve.indexOf(curNum - 1) !== -1) {
        ++count;
        reserve.splice(reserve.indexOf(curNum - 1), 1);
      } else if (reserve.indexOf(curNum + 1) !== -1) {
        ++count;
        reserve.splice(reserve.indexOf(curNum + 1), 1);
      }
      return count;
    }, 0);
  return n - lost.length + resultCnt;
}

// 다른 사람의 풀이 1
function solution(n, lost, reserve) {
  let reserveCopy = reserve
    .filter((r) => !lost.includes(r))
    .sort((a, b) => a - b);
  const lostCopy = lost
    .filter((l) => !reserve.includes(l))
    .sort((a, b) => a - b);

  return (
    n -
    lostCopy.filter((a) => {
      const b = reserveCopy.find((r) => Math.abs(r - a) === 1);
      if (!b) return true;
      reserveCopy = reserveCopy.filter((r) => r !== b);
    }).length
  );
}
// 1. 다음을 수행한 결과를 변수 reserveCopy에 담음
// - reserve 배열에 filter() 메서드를 이용하여 lost 배열에 포함되지 않은 요소들만 새 배열에 담음
// - filter() 메서드로 인해 만들어진 새 배열에 sort() 메서드를 이용하여 배열의 요소를 오름차순으로 정렬함
// 2. 다음을 수행한 결과를 상수 lostCopy에 담음
// - lost 배열에 filter() 메서드를 이용하여 reserve 배열에 포함되지 않은 요소들만 새 배열에 담음
// - filter() 메서드로 인해 만들어진 새 배열에 sort() 메서드를 이용하여 배열의 요소를 오름차순으로 정렬함
// 위 과정은 여벌 체육복을 가져온 학생이 도난당했을 때, 자신의 남은 체육복 하나를 자신이 입는 경우를 먼저 고려해준 것임
// 두 배열을 모두 정렬하는 이유는, 자신의 앞, 뒤 번호인 학생에게 체육복을 빌릴 수 있는데 숫자가 뒤죽박죽이면 체육복을 빌릴 수 있는 학생의 최댓값이 나오지 않을 수도 있기 때문임
// 예를 들어, lostCopy = [5, 7], reserveCopy = [6, 4]이라고 하면, 학생 5는 학생 6의 체육복을 빌리고, 학생 7은 체육복을 빌리지 못함
// 그런데 이를 정렬하면, lostCopy = [5, 7], reserveCopy = [4, 6]이 되고, 학생 5는 학생 3의 체육복을 빌리고, 학생 7은 학생 6의 체육복을 빌릴 수 있음
// 3. 학생 수 n에서 lostCopy 배열에 filter() 메서드를 이용하여 만든 새 배열의 길이를 뺀 값을 반환함
// 4. lostCopy 배열에 filter() 메서드를 이용한 내부 내용은 다음과 같음
// - reserveCopy 배열에 find() 메서드를 이용하여 reserveCopy의 현재 요소와 lostCopy 배열의 현재 요소를 뺀 값의 절댓값이 1인 첫 번째 요소를 반환함
// - 위에서 반환한 결과를 상수 b에 대입함
// - b가 undefined인 경우, 즉, find() 메서드의 조건을 만족하는 요소가 없는 경우, true를 반환하여 filter() 메서드로 인해 만들어진 새 배열에 lostCopy 배열의 현재 요소를 넣음
// - b가 undefined가 아닌 경우, 즉, find() 메서드의 조건을 만족하는 요소가 있는 경우, reserveCopy 배열에 filter() 메서드를 이용하여 현재 요소와 상수 b의 값이 다른 경우에만 filter() 메서드로 인해 만들어진 새 배열에 현재 요소를 넣음
// 위에서 반환한 결과를 다시 변수 reserveCopy 배열에 대입함
// 최종적으로 lostCopy 배열에 남는 요소는 끝까지 체육복을 빌리지 못한 요소임

// 다른 사람의 풀이 2
function solution(n, lost, reserve) {
  const students = {};
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }
  lost.forEach((number) => (students[number] -= 1));
  reserve.forEach((number) => (students[number] += 1));

  for (let i = 1; i <= n; i++) {
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i - 1]++;
      students[i]--;
    } else if (students[i] === 2 && students[i + 1] === 0) {
      students[i + 1]++;
      students[i]--;
    }
  }
  for (let key in students) {
    if (students[key] >= 1) {
      answer++;
    }
  }
  return answer;
}
// 1. 상수 students에 빈 객체를 대입함
// 2. 변수 answer을 0으로 초기화함
// 3. for문을 통해 1부터 학생 수인 n까지 순회하면서 다음을 수행함
// - students 객체에 현재 순회 중인 숫자를 키 값으로 하고, 밸류 값은 모두 1로 설정함
// - 이는 모든 학생들이 초기에는 체육복을 하나씩 가지고 있는 상태를 나타냄
// 4. lost 배열에 forEach() 메서드를 이용하여 students 객체에서 현재 요소를 키 값으로 하는 요소의 밸류 값을 1 감소시킴
// - 이는 체육복을 도난당한 학생들을 표기함
// 5. reserve 배열에 forEach() 메서드를 이용하여 students 객체에서 현재 요소를 키 값으로 하는 요소의 밸류 값을 1 증가시킴
// - 이는 여분의 체육복을 가지고 있는 학생들을 표기함
// - 이때, 여벌 체육복을 가져온 학생이 도난당했을 때, 자신의 남은 체육복 하나를 자신이 입는 경우를 먼저 고려해주기 때문에 체육복 수는 감소했다가(0) 증가하므로(1) 다시 1이 됨
// 6. for문을 통해 1부터 학생 수인 n까지 순회하면서 다음을 수행함
// - 만약 현재 순회 중인 숫자를 키 값으로 하는 요소의 밸류값이 2이고, 현재 순회 중인 숫자보다 1이 작은 숫자를 키 값으로 하는 요소의 밸류값이 0인 경우, 후자의 밸류값은 1 증가시키고, 전자의 밸류값은 1 감소시킴
// - 이렇게 함으로써 체육복을 도난당한 학생은 여벌의 체육복이 있는 학생에게 체육복을 빌려서 체육복이 하나가 되고, 여벌의 체육복이 있는 학생은 체육복을 도난당한 학생에게 체육복을 빌려줘서 체육복이 하나가 됨
// - 만약 현재 순회 중인 숫자를 키 값으로 하는 요소의 밸류값이 2이고, 현재 순회 중인 숫자보다 1이 큰 숫자를 키 값으로 하는 요소의 밸류값이 0인 경우, 후자의 밸류값은 1 증가시키고, 전자의 밸류값은 1 감소시킴
// - 이렇게 함으로써 체육복을 도난당한 학생은 여벌의 체육복이 있는 학생에게 체육복을 빌려서 체육복이 하나가 되고, 여벌의 체육복이 있는 학생은 체육복을 도난당한 학생에게 체육복을 빌려줘서 체육복이 하나가 됨
// 7. students 객체의 키를 for문을 통해 순회하면서 다음을 수행함
// - 키 값에 해당하는 요소의 밸류 값이 1보다 크거나 같은 경우, answer을 1 증가시킴
// 8. 최종적으로 체육 수업을 들을 수 있는 최대 학생 수인 answer을 반환함
