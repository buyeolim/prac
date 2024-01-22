/*
팩토리얼
https://school.programmers.co.kr/learn/courses/30/lessons/120848
 */

const input = [3628800];
// const input = [7];

function solution(n) {
  let answer = 0;

  let ifac = 1;
  for (let i = 1; i <= 3628800; i++) {
    ifac *= i;
    if (ifac > n) {
      answer = i - 1;
      break;
    }
  }

  return answer;
}

console.log(solution(...input));
