// 연습문제 - 달리기 경주

function solution(players, callings) {
  // 시간 복잡도 이슈로 players 배열의 인덱스를 객체에서 찾도록 변경
  let index = {};
  for (let i = 0; i < players.length; i++) {
    index[players[i]] = i;
  }

  // callings 배열을 순회하여
  // 순회 대상인 요소(이름)를 players 배열에서 찾아서 바로 앞의 요소와 자리 바꾸기
  callings.forEach((player) => {
    let playerIdx = index[player];
    [players[playerIdx - 1], players[playerIdx]] = [
      players[playerIdx],
      players[playerIdx - 1],
    ]; // 자리 바꾸기
    index[players[playerIdx - 1]] = playerIdx - 1;
    index[players[playerIdx]] = playerIdx;
  });

  return players;
}

// 다른 사람의 풀이: 인덱스 객체 만들기
const idxList = {};
players.forEach((name, index) => (idxList[name] = index));

// 다른 사람의 풀이: 전체 풀이
function solution(players, callings) {
  const rank = {};
  players.forEach((c, i) => (rank[c] = i));
  for (const winner of callings) {
    let winnerI = rank[winner];
    let loserI = winnerI - 1;

    rank[winner]--;
    rank[players[loserI]]++;

    players[winnerI] = players[loserI];
    players[loserI] = winner;
  }
  return players;
}
