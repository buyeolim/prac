/*
세균 증식
https://school.programmers.co.kr/learn/courses/30/lessons/120910
 */

function solution(n, t) {
  const answer = n * 2 ** t;

  return answer;
}

const input = [2, 10];
// const input = [7, 15];

console.log(solution(...input));
