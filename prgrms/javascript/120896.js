/*
한 번만 등장한 문자
https://school.programmers.co.kr/learn/courses/30/lessons/120896
 */

function solution(s) {
  let answer = "";
  const C = new Array(26).fill(0);
  for (let ch of s) {
    C[ch.charCodeAt() - 97]++;
  }

  C.forEach((v, i) => v === 1 && (answer += String.fromCharCode(97 + i)));

  return answer;
}

const input = ["abcabcadc"];
// const input = ["abdc"];
// const input = ["hello"];

console.log(solution(...input));
