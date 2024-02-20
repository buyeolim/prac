/*
암호 해독
https://school.programmers.co.kr/learn/courses/30/lessons/120892
 */

function solution(cipher, code) {
  const answer = cipher
    .split("")
    .filter((_, i) => !((i + 1) % code))
    .join("");

  return answer;
}

const input = ["dfjardstddetckdaccccdegk", 4];
// const input = ["pfqallllabwaoclk", 2];

console.log(solution(...input));
