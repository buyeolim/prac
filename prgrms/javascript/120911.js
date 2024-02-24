/*
문자열 정렬하기 (2)
https://school.programmers.co.kr/learn/courses/30/lessons/120911
 */

function solution(my_string) {
  const answer = my_string.toLowerCase().split("").sort().join("");

  return answer;
}

const input = ["Bcad"];
// const input = ["heLLo"];
// const input = ["Python"];

console.log(solution(...input));
