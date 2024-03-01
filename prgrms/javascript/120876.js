/*
겹치는 선분의 길이
https://school.programmers.co.kr/learn/courses/30/lessons/120876
 */

function solution(lines) {
  let answer = 0;
  const L = new Array(201).fill(0);

  lines.forEach((range) => {
    for (let i = range[0] + 101; i < range[1] + 101; i++) L[i]++;
  });
  for (let i = 1; i < 201; i++) {
    L[i] > 1 && answer++;
  }

  return answer;
}

// const input = [
//   [
//     [0, 1],
//     [2, 5],
//     [3, 9],
//   ],
// ];
// const input = [
//   [
//     [-1, 1],
//     [1, 3],
//     [3, 9],
//   ],
// ];
// const input = [
//   [
//     [0, 5],
//     [3, 9],
//     [1, 10],
//   ],
// ];

const input = [
  [
    [0, 2],
    [-3, -1],
    [-2, 1],
  ],
];

console.log(solution(...input));
