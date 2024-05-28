// 2022 KAKAO TECH INTERNSHIP - 성격 유형 검사하기

// choices 원소가
// 1일 때: survey의 첫 번째 유형에 3점
// 2일 때: survey의 첫 번째 유형에 2점
// 3일 때: survey의 첫 번째 유형에 1점
// 4일 때: 아무런 변화 없음
// 5일 때: survey의 두 번째 유형에 1점
// 6일 때: survey의 두 번째 유형에 2점
// 7일 때: survey의 두 번째 유형에 3점

// choices 배열을 기준으로 순회 => reduce() 메서드
// 점수를 넣기 위해서 객체를 만들자

function solution(survey, choices) {
  let answer = "";
  const obj = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  choices.forEach((cur, idx) => {
    obj[cur < 4 ? survey[idx][0] : survey[idx][1]] += Math.abs(cur - 4);
  });

  answer += obj.R >= obj.T ? "R" : "T";
  answer += obj.C >= obj.F ? "C" : "F";
  answer += obj.J >= obj.M ? "J" : "M";
  answer += obj.A >= obj.N ? "A" : "N";

  return answer;
}

let result = solution(["TR", "RT", "TR"], [7, 1, 3]);
console.log(result);

// 다른 사람의 풀이 1
function solution(survey, choices) {
  const MBTI = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => type.split("").forEach((char) => (MBTI[char] = 0)));

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];

    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
}
// 1. 상수 MBTI를 빈 객체로 초기화함
// 2. 상수 types를 문자열 4개를 요소로 가진 배열로 초기화함
// 3. types 배열에 forEach() 메서드를 사용하여 각 요소를 순회하면서 다음을 수행함
// - 각 요소(문자열)에 split() 메서드를 사용하여 문자 하나하나를 요소로 가진 배열로 변환함
// - 위에서 만든 배열에 forEach() 메서드를 사용하여 각 요소를 MBTI 객체의 키로 만들고 밸류를 0으로 설정함
// 4. choices 배열에 forEach() 메서드를 사용하여 각 요소를 순회하면서 다음을 수행함
// - survey 배열의 index번째 인덱스 요소(길이가 2인 문자열)를 구조 분해 할당함
// - 즉, 첫 번째 문자는 disagree에, 두 번째 문자는 agree에 할당됨
// - 현재 요소가 4보다 더 큰 경우 agree 변수를 선택하고, 아닌 경우 disagree를 선택하여 MBTI의 키 값을 지정함
// - 위에서 지정한 키 값에 Math.abs() 메서드를 사용하여 현재 요소에서 4를 뺀 절댓값을 밸류 값에 더함
// 5. types 배열에 map() 메서드를 사용하여 다음을 수행함
// - 현재 요소(문자열)를 구조 분해 할당을 이용하여 a에는 첫 번째 문자가, b에는 두 번째 문자가 할당되도록 함
// - MBTI 객체에서 b의 값이 a의 값보다 큰 경우 b를 반환하고, 아닌 경우 a를 반환하여 새 배열에 넣음
// 6. map() 메서드로 만들어진 새 배열에 join() 메서드를 사용하여 배열의 요소를 구분자 없이 문자열로 변환함
// 7. 위에서 만든 문자열을 최종적으로 반환함

// 다른 사람의 풀이 2
function solution(survey, choices) {
  let answer = "";
  let indi = new Map();
  ["R", "T", "C", "F", "J", "M", "A", "N"].forEach((item) => indi.set(item, 0));

  choices.forEach((item, index) => {
    let [A, B] = survey[index].split("");
    if (item > 4) indi.set(B, indi.get(B) + item - 4);
    else if (item < 4) indi.set(A, indi.get(A) + 4 - item);
  });
  answer += indi.get("R") >= indi.get("T") ? "R" : "T";
  answer += indi.get("C") >= indi.get("F") ? "C" : "F";
  answer += indi.get("J") >= indi.get("M") ? "J" : "M";
  answer += indi.get("A") >= indi.get("N") ? "A" : "N";
  return answer;
}
// 1. 변수 answer를 빈 문자열로 초기화함
// 2. 새로운 Map 자료구조를 생성하여 변수 indi에 할당함
// 3. 문자열 8개를 요소로 가진 배열에 forEach() 메서드를 사용하여 Map 객체인 indi에 각 요소를 키 값으로 하고, 0을 밸류 값으로 하는 쌍을 저장함
// - Map 객체의 set() 메서드는 새로운 키-값 쌍을 Map에 추가하는 메서드임
// - 이 메서드를 사용하면 새로운 키와 해당 값을 Map에 추가할 수 있음
// - set() 메서드는 기존에 동일한 키가 있는 경우에도 새로운 값을 할당하므로 유용하게 사용됨
// 4. choices 배열에 forEach() 메서드를 사용하여 각 요소를 순회하면서 다음을 수행함
// - survey 배열의 index번 인덱스 요소(길이가 2인 문자열)에 split() 메서드를 사용하여 문자 하나하나를 요소로 하는 배열로 변환함
// - 구조 분해 할당을 이용하여 배열의 첫 번째 요소는 변수 A에, 두 번째 요소는 변수 B에 할당함
// - 현재 요소가 4보다 큰 경우 변수 B를 키 값으로 하고, Map 객체의 get() 메서드를 사용하여 B의 밸류 값을 가져와서 그 밸류 값에 현재 요소를 더하고 4를 뺀 값을 밸류 값으로 하는 쌍을 Map 객체 indi에 저장함
// - Map 객체의 get() 메서드는 지정된 키에 해당하는 값을 반환함
// - 이 메서드를 사용하여 Map 객체에서 특정 키에 연결된 값을 가져올 수 있음
// - 이렇게 함으로써, B의 밸류 값이 갱신됨
// - 현재 요소가 4보다 작은 경우 변수 A를 키 값으로 하고, Map 객체의 get() 메서드를 사용하여 A의 밸류 값을 가져와서 그 밸류 값에 4를 더하고 현재 요소를 밴 값을 밸류 값으로 하는 쌍을 Map 객체 indi에 저장함
// - 이렇게 함으로써, A의 밸류 값이 갱신됨
// 5. Map 객체의 get() 메서드를 사용하여 키 "R"과 "T"의 밸류 값을 각각 가져와서 "R"의 밸류 값이 더 크거나 같은 경우 변수 answer에 문자열 "R"을 더하고, 아닌 경우 문자열 "T"를 더함
// 6. Map 객체의 get() 메서드를 사용하여 키 "C"와 "F"의 밸류 값을 각각 가져와서 "C"의 밸류 값이 더 크거나 같은 경우 변수 answer에 문자열 "C"를 더하고, 아닌 경우 문자열 "F"를 더함
// 7. Map 객체의 get() 메서드를 사용하여 키 "J"와 "M"의 밸류 값을 각각 가져와서 "J"의 밸류 값이 더 크거나 같은 경우 변수 answer에 문자열 "J"를 더하고, 아닌 경우 문자열 "M"을 더함
// 8. Map 객체의 get() 메서드를 사용하여 키 "A"와 "N"의 밸류 값을 각각 가져와서 "A"의 밸류 값이 더 크거나 같은 경우 변수 answer에 문자열 "A"를 더하고, 아닌 경우 문자열 "N"을 더함
// 9. 최종적으로 나온 결과 answer를 반환함
