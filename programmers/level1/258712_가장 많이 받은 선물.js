// 2024 KAKAO WINTER INTERNSHIP - 가장 많이 받은 선물

function solution(friends, gifts) {
  // 준 선물 개수: gifts에서 공백 앞에 이름이 있는 개수
  // 받은 선물 개수: gifts에서 공백 뒤에 이름이 있는 개수
  // 선물 지수: 준 선물 개수 - 받은 선물 개수
  // 선물을 하나 받는 경우
  // - 주고받은 수가 다름: 더 많은 선물을 준 사람
  // - 주고받은 수가 없음 || 주고받은 수가 같음: 선물 지수가 큰 사람
  // 선물을 주고받지 않는 경우 - 주고받은 수 같음 && 선물 지수 같음
  let answer = 0;
  
  // [1] 선물 주고받은 수 구하기 -> 2차원 배열 만들고 안의 값 다 0으로 채우기
  // A, B 사이의 개수: "A B" 개수와 "B A" 개수 구하기
  
  // 주고받은 선물 개수에 대한 2차원 배열 만들기
  let giveAndTake = new Array(friends.length);
  for (let i = 0; i < friends.length; i++) {
    giveAndTake[i] = new Array(friends.length).fill(0);
  }

  // 준 선물, 받은 선물, 선물 지수에 대한 2차원 배열 만들기
  let giftInfo = new Array(friends.length);
  for (let i = 0; i < friends.length; i++) {
    giftInfo[i] = new Array(3).fill(0);
  }

  // gifts 배열에서 준 사람, 받은 사람 인덱스 구해서
  // giveAndTake 배열과 giftInfo 배열에 개수 증가시키기
  gifts.forEach((info) => {
    let [give, take] = info.split(" ");
    let giveIdx = friends.indexOf(give);
    let takeIdx = friends.indexOf(take);
    giveAndTake[giveIdx][takeIdx]++;
    giftInfo[giveIdx][0]++;
    giftInfo[takeIdx][1]++;
  });

  // giftInfo 배열의 선물 지수 구하기
  for (let i = 0; i < friends.length; i++) {
    giftInfo[i][2] = giftInfo[i][0] - giftInfo[i][1];
  }

  // 다음 달에 받을 선물 개수 입력하는 배열 만들기
  let howManyTake = new Array(friends.length).fill(0);

  // [2] 선물 주고받은 수 비교하기
  // (2-1) 다른 경우: 공백 앞에 이름이 있는 개수가 많은 사람이 선물 +1
  // (2-2) 없거나 같은 경우: 선물 지수가 큰 사람이 선물 +1, 선물 지수가 같으면 주고받지 않음 -> 2차원 배열 만들기
  // 선물 지수: 준 선물 개수 - 받은 선물 개수
  // 준 선물 개수: gifts에서 공백 앞에 이름이 있는 개수
  // 받은 선물 개수: gifts에서 공백 뒤에 이름이 있는 개수

  for(let i = 0; i < friends.length - 1; i++) {
    for(let j = i+1; j < friends.length; j++) {
      if(giveAndTake[i][j] > giveAndTake[j][i]) howManyTake[i]++;
      else if(giveAndTake[i][j] < giveAndTake[j][i]) howManyTake[j]++;
      else {
        if(giftInfo[i][2] > giftInfo[j][2]) howManyTake[i]++;
        else if(giftInfo[i][2] < giftInfo[j][2]) howManyTake[j]++;
      }
    }
  }

  answer = Math.max(...howManyTake);

  return answer;
}
