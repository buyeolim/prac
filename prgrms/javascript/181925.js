/*
수 조작하기 2
https://school.programmers.co.kr/learn/courses/30/lessons/181925
 */

function solution(numLog) {
  let answer = "";
  for (let i = 1; i < numLog.length; i++) {
    let d = numLog[i] - numLog[i - 1];
    answer += d > 0 ? (d > 1 ? "d" : "w") : d > -10 ? "s" : "a";
  }

  return answer;
}

const input = [[0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]];

console.log(solution(...input));
