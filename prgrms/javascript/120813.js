/*
짝수는 싫어요
https://school.programmers.co.kr/learn/courses/30/lessons/120813
 */

function solution(n) {
  const answer = Array.from({ length: n }, (v, i) => i + 1).filter(
    (v) => v % 2
  );

  return answer;
}

const input = [10];
// const input = [15];

console.log(solution(...input));
