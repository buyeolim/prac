/*
짝수의 합
https://school.programmers.co.kr/learn/courses/30/lessons/120831
 */

const input = [10];
// const input = [4];

function solution(n) {
  let answer = 0;

  for (let i = 0; i < n + 1; i++) {
    !(i % 2) && (answer += i);
  }

  return answer;
}

console.log(solution(...input));
