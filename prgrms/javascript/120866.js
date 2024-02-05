/*
안전지대
https://school.programmers.co.kr/learn/courses/30/lessons/120866
 */

function solution(board) {
  const n = board.length;
  let answer = n * n;
  const dr = [-1, -1, -1, 0, 1, 1, 1, 0];
  const dc = [-1, 0, 1, 1, 1, 0, -1, -1];

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] !== 1) continue;
      answer--;

      for (let d = 0; d < 8; d++) {
        if (r + dr[d] < 0 || r + dr[d] >= n || c + dc[d] < 0 || c + dc[d] >= n)
          continue;
        if (board[r + dr[d]][c + dc[d]] !== 0) continue;
        board[r + dr[d]][c + dc[d]] = 2;
        answer--;
      }
    }
  }

  return answer;
}

const input = [
  [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ],
];
// const input = [
//   [
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 1, 1, 0],
//     [0, 0, 0, 0, 0],
//   ],
// ];
// const input = [
//   [
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//   ],
// ];

console.log(solution(...input));
