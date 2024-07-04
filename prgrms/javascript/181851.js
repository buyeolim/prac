/*
전국 대회 선발 고사
https://school.programmers.co.kr/learn/courses/30/lessons/181851
 */

function solution(rank, attendance) {
  let answer = 0;
  const S = rank
    .map((v, i) => [v, i])
    .filter(([_, r], i) => attendance[i])
    .sort((a, b) => a[0] - b[0]);

  answer = 10000 * S[0][1] + 100 * S[1][1] + S[2][1];

  return answer;
}

// const input = [
//   [3, 7, 2, 5, 4, 6, 1],
//   [false, true, true, true, true, false, false],
// ];
// const input = [
//   [1, 2, 3],
//   [true, true, true],
// ];
const input = [
  [6, 1, 5, 2, 3, 4],
  [true, false, true, false, false, true],
];

console.log(solution(...input));
