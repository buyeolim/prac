/*
피자 나눠 먹기 (3)
https://school.programmers.co.kr/learn/courses/30/lessons/120816
 */

function solution(slice, n) {
  let answer = Math.ceil(n / slice);

  return answer;
}

const input = [7, 10];
// const input = [4, 12];

console.log(solution(...input));
