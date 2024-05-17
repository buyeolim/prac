/*
qr code
https://school.programmers.co.kr/learn/courses/30/lessons/181903
 */

function solution(q, r, code) {
  const answer = [...code].filter((v, i) => i % q === r).join("");

  return answer;
}

const input = [3, 1, "qjnwezgrpirldywt"];
// const input = [1, 0, "programmers"];

console.log(solution(...input));
