/*
가까운 1 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/181898
 */

function solution(arr, idx) {
  const answer = arr.map((v, i) => (i < idx ? 0 : v)).indexOf(1);

  return answer;
}

const input = [[0, 0, 0, 1], 1];
// const input = [[1, 0, 0, 1, 0, 0], 4];
// const input = [[1, 1, 1, 1, 0], 3];

console.log(solution(...input));
