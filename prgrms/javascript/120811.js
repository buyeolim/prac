/*
중앙값 구하기
https://school.programmers.co.kr/learn/courses/30/lessons/120811
 */

function solution(array) {
  let answer = 0;

  array.sort((a, b) => a - b);
  answer = array[Math.floor(array.length / 2)];

  return answer;
}

const input = [[1, 2, 7, 10, 11]];
// const input = [[9, -1, 0]];

console.log(solution(...input));
