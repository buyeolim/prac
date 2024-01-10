/*
피자 나눠 먹기 (1)
https://school.programmers.co.kr/learn/courses/30/lessons/120814
 */

const input = [7];
// const input = [1];
// const input = [15];

function solution(n) {
  let answer = 0;

  answer = Math.ceil(n / 7);

  return answer;
}

console.log(solution(...input));
