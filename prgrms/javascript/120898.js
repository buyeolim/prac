/*
편지
https://school.programmers.co.kr/learn/courses/30/lessons/120898
 */

function solution(message) {
  const answer = message.length * 2;

  return answer;
}

const input = ["happy birthday!"];
// const input = ["I love you~"];

console.log(solution(...input));
