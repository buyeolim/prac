/*
조건에 맞게 수열 변환하기 3
https://school.programmers.co.kr/learn/courses/30/lessons/181835
 */

function solution(arr, k) {
  const answer = arr.map((v) => (k % 2 ? v * k : v + k));

  return answer;
}

const input = [[1, 2, 3, 100, 99, 98], 3];
// const input = [[1, 2, 3, 100, 99, 98], 2];

console.log(solution(...input));
