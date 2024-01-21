/*
A로 B 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/120886
 */

const input = ["olleh", "hello"];
// const input = ["allpe", "apple"];

function solution(before, after) {
  let answer = 1;
  const B = new Array(26).fill(0);
  const A = new Array(26).fill(0);

  before.split("").forEach((ch) => B[ch.charCodeAt() - 97]++);
  after.split("").forEach((ch) => A[ch.charCodeAt() - 97]++);
  for (let i = 0; i < 26; i++) {
    if (B[i] !== A[i]) {
      answer = 0;
      break;
    }
  }

  return answer;
}

console.log(solution(...input));
