// PCCP 기출문제 - [PCCP 기출문제] 1번 / 붕대 감기

function solution(bandage, health, attacks) {
  // bandage: [시전 시간, 초당 회복량, 추가 회복량]
  // health: 최대 체력
  // attacks: [공격 시간, 피해량] 형태
  // t초(시전 시간) 동안 붕대 감으면서 체력 +tx
  // t초(시전 시간) 연속으로 붕대 감으면 체력 +y and 연속 시간 초기화 -> 조건 분기
  // 공격 받을 시 -> 붕대 감기 기술 취소 and 정해진 피해량만큼 현재 체력 감소
  // 공격 중 -> 체력 회복 X
  // 기술 취소 or 기술 종료 -> 붕대 감기 and 연속 성공 시간 0
  // 현재 체력이 0 이하 -> 캐릭터 die -> 남은 체력: -1
  // 시작할 때 체력: health

  let answer = 0; // 모든 공격이 끝난 직후 남은 체력
  let beforeAttackTime = 0; // 이전 공격 시간(초)
  let currentHealth = health; // 현재 체력

  // [1] attacks 배열 반복문 돌리기
  // (1) 공격 시간일 때: 체력 감소시키기
  // (2) 공격 시간 아닐 때: 체력 회복시키기(회복 기간 * 초당 회복량)
  // (2-1) 시전 시간 이상으로 붕대 감았을 때: 추가 회복량

  for (let i = 0; i < attacks.length; i++) {
    let [attackTime, damage] = [attacks[i][0], attacks[i][1]];
    if (beforeAttackTime !== 0) {
      let duration = attackTime - beforeAttackTime - 1; // 회복 기간
      currentHealth += duration * bandage[1]; // 초당 회복량
      currentHealth += Math.floor(duration / bandage[0]) * bandage[2]; // 추가 회복량
      if (currentHealth > health) currentHealth = health;
    }
    currentHealth -= damage;
    if (currentHealth <= 0) return -1;
    beforeAttackTime = attackTime;
  }
  answer = currentHealth;

  return answer;
}


// 다른 사람 풀이
function solution(bandage, health, attacks) {
  let currHealth = health;
  let currTime = 0;

  for (let [attackTime, damage] of attacks) {
    let diffTime = attackTime - currTime - 1;
    currHealth += diffTime * bandage[1] + Math.floor(diffTime / bandage[0]) * bandage[2];

    if (currHealth > health) currHealth = health;
    currHealth -= damage;
    if (currHealth <= 0) return -1;
    currTime = attackTime;
  }

  return currHealth;
}