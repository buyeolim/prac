/*
캐릭터의 좌표
https://school.programmers.co.kr/learn/courses/30/lessons/120861
 */

function solution(keyinput, board) {
  const answer = [0, 0];
  const K = keyinput.map((key) => {
    if (key === "up") return 0;
    if (key === "down") return 1;
    if (key === "left") return 2;
    if (key === "right") return 3;
  });
  const D = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  for (let i = 0; i < K.length; i++) {
    if (answer[0] + D[K[i]][0] < -Math.floor(board[0] / 2)) continue;
    if (answer[0] + D[K[i]][0] > Math.floor(board[0] / 2)) continue;
    if (answer[1] + D[K[i]][1] < -Math.floor(board[1] / 2)) continue;
    if (answer[1] + D[K[i]][1] > Math.floor(board[1] / 2)) continue;

    answer[0] += D[K[i]][0];
    answer[1] += D[K[i]][1];
  }

  return answer;
}

const input = [
  ["left", "right", "up", "right", "right"],
  [11, 11],
];
// const input = [
//   ["down", "down", "down", "down", "down"],
//   [7, 9],
// ];

// const input = [
//   ["down", "down", "down", "down", "down"],
//   [1, 3],
// ];

console.log(solution(...input));
