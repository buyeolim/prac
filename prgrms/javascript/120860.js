/*
직사각형 넓이 구하기
https://school.programmers.co.kr/learn/courses/30/lessons/120860
 */

function solution(dots) {
  let answer = 0;
  const X = dots.map((dot, idx) => dot[0]);
  const Y = dots.map((dot, idx) => dot[1]);

  answer =
    (Math.max(...X) - Math.min(...X)) * (Math.max(...Y) - Math.min(...Y));

  return answer;
}

// const input = [
//   [
//     [1, 1],
//     [2, 1],
//     [2, 2],
//     [1, 2],
//   ],
// ];
const input = [
  [
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ],
];

console.log(solution(...input));
