/*
가장 큰 수 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/120899
 */

function solution(array) {
  const answer = [Math.max(...array), array.indexOf(Math.max(...array))];

  return answer;
}

const input = [[1, 8, 3]];
// const input = [[9, 10, 11, 8]];

console.log(solution(...input));
