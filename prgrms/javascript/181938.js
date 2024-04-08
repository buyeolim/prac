/*
두 수의 연산값 비교하기
https://school.programmers.co.kr/learn/courses/30/lessons/181938
 */

function solution(a, b) {
  const answer = +(a + "" + b) > 2 * a * b ? +(a + "" + b) : 2 * a * b;
  2 * a * b;

  return answer;
}

// const input = [2, 91];
const input = [91, 2];

console.log(solution(...input));
