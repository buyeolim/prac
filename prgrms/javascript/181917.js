/*
간단한 논리 연산
https://school.programmers.co.kr/learn/courses/30/lessons/181917
 */

function solution(x1, x2, x3, x4) {
  const answer = (x1 || x2) && (x3 || x4);

  return answer;
}

const input = [false, true, true, true];
// const input = [true, false, false, false];

console.log(solution(...input));
