/*
외계행성의 나이
https://school.programmers.co.kr/learn/courses/30/lessons/120834
 */

const input = [23];
// const input = [51];

function solution(age) {
  let answer = "";

  answer = String.fromCharCode(...(age + "").split("").map((v) => 97 + 1 * v));

  return answer;
}

console.log(solution(...input));
