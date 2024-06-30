/*
문자열이 몇 번 등장하는지 세기
https://school.programmers.co.kr/learn/courses/30/lessons/181871
 */

function solution(myString, pat) {
  const answer = [...myString].reduce(
    (acc, _, idx) =>
      myString.substring(idx, idx + pat.length) === pat ? acc + 1 : acc,
    0
  );

  return answer;
}

const input = ["banana", "ana"];
// const input = ["aaaa", "aa"];

console.log(solution(...input));
