// 연습문제 - 추억 점수

function solution(name, yearning, photo) {
  // 키(key)를 이름(name), 값(value)을 그리움 점수(yearning)로 하는 객체 정의
  let score = {};
  for (let i = 0; i < name.length; i++) {
    score[name[i]] = yearning[i];
  }

  let yearningScore = new Array(photo.length).fill(0); // 그리움 점수 합산 배열

  // photo 배열을 순회하여 각 배열 요소의 그리움 점수 합치기
  // score 객체에서 이름을 찾지 못할 경우: 그리움 점수 0점
  for (let i = 0; i < photo.length; i++) {
    photo[i].forEach((friendName) => {
      if (score[friendName]) yearningScore[i] += score[friendName];
    });
  }

  return yearningScore;
}

// 다른 사람의 풀이
function solution(name, yearning, photo) {
  return photo.map((v) =>
    v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0)
  );
}
// '??'는 nullish 병합 연산자임
// 이 연산자는 왼쪽 피연산자가 null 또는 undefined인 경우에만 오른쪽 피연산자를 반환함
// <코드 풀이>
// photo 배열을 map() 메서드를 사용하여 순회함
// map() 메서드 안의 요소(v)들도 배열이므로, v 배열을 reduce() 메서드를 사용하여 순회함
// a(축적값)은 0으로 초기화됨
// a에 그리움 점수를 더하는데, name 배열에 indexOf() 메서드를 사용해서 c(현재값)의 인덱스를 찾음
// 찾은 인덱스를 yearning 배열에 적용해서 그리움 점수를 찾은 후 a에 더함
// reduce() 메서드 순회가 끝나면 하나의 축적값 a가 나옴
// 그 a를 map() 메서드를 사용하여 생성된 새로운 배열의 요소로 넣음
// map() 메서드 순회가 끝나면 요소가 그리움 점수 합산값인 새로운 배열이 나옴
// 그 새로운 배열을 반환함