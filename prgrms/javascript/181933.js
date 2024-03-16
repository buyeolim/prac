/*
flag에 따라 다른 값 반환하기
https://school.programmers.co.kr/learn/courses/30/lessons/181933
 */

function solution(a, b, flag) {
  const answer = flag ? a + b : a - b;

  return answer;
}

// const input = [-4, 7, true];
const input = [-4, 7, false];

console.log(solution(...input));
