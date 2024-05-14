// 연습문제 - 옹알이 (2)

// 옹알이 배열의 각 문자열을 순회해야 함
// 각 문자열에 arr의 요소 중 하나를 포함하고 있다면(indexOf)
// arr 요소의 문자열 길이에 따라 자름
// 순회할 배열을 arr로 할까, babbling으로 할까?
// 1) arr로 reduce() 메서드 -> 현재 요소가 옹알이 배열의 각 문자열들 중에서 포함하고 있으면

// babbling 배열의 각 문자열을 순회할 때, 각 문자열이 arr의 요소 중 하나를 포함하고 있는지를 indexOf() 메서드로 볼 때, 값이 0이 아니면 무조건 out!
// 값이 0이라면, 포함된 arr의 요소(문자열)의 길이만큼 자르고, 다시 위에처럼 확인함 -> 그런데, 포함된 arr의 요소가 이전 요소랑 같으면 out시켜야 함..

// 코드의 문제점: "ayawooaya" 같은 것들(건너뛰어서 같은 단어가 다시 나오는 경우들)을 포함시키지 못함

function solution(babbling) {
  const arr = ["aya", "ye", "woo", "ma"];
  let babblingCopy = [...babbling];
  let index = -1;

  babbling.forEach((str, idx) => {
    arr.reduce((count, curStr) => {
      babblingCopy[idx] = str;
      console.log("----------------------");
      console.log("curStr: ", curStr);
      console.log("babblingCopy[idx]: ", babblingCopy[idx]);
      count = 0;
      while (babblingCopy[idx].indexOf(curStr) !== -1) {
        if (count && babblingCopy[idx].indexOf(curStr) === index) break;
        index = babblingCopy[idx].indexOf(curStr);
        console.log("index: ", index);

        let newArr = babblingCopy[idx].split("");
        newArr.splice(babblingCopy[idx].indexOf(curStr), curStr.length);
        babblingCopy[idx] = newArr.join("");
        console.log("babblingCopy[idx]: ", babblingCopy[idx]);
        ++count;
      }
      return count;
    }, 0);
  });

  console.log(babblingCopy);
  return babblingCopy.filter((str) => str === "").length;
}

let result = solution(["mawooyeayayewooma"]);
console.log(result);
