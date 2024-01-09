/*
중복된 숫자 개수
https://school.programmers.co.kr/learn/courses/30/lessons/120583
 */

const input = [[1, 1, 2, 3, 4, 5], 1];
// const input = [[0, 2, 3, 4], 1];

function solution(array, n) {
  let answer = 0;
  const N = new Array(1001).fill(0);

  array.forEach((v) => N[v]++);
  answer = N[n];

  return answer;
}

console.log(solution(...input));
