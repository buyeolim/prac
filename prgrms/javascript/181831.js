/*
특별한 이차원 배열 2
https://school.programmers.co.kr/learn/courses/30/lessons/181831
 */

function solution(arr) {
  let answer = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] !== arr[j][i] && (answer = 0);
    }
    if (!answer) break;
  }

  return answer;
}

const input = [
  [
    [5, 192, 33],
    [192, 72, 95],
    [33, 95, 999],
  ],
];
// const input = [
//   [
//     [19, 498, 258, 587],
//     [63, 93, 7, 754],
//     [258, 7, 1000, 723],
//     [587, 754, 723, 81],
//   ],
// ];

console.log(solution(...input));
