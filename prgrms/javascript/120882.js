/*
등수 매기기
https://school.programmers.co.kr/learn/courses/30/lessons/120882
 */

function solution(score) {
  const answer = [];

  score.forEach((s, i) => {
    s[1] = (s[0] + s[1]) / 2;
    s[0] = i;
  });
  score.sort((a, b) => {
    if (a[1] !== b[1]) return b[1] - a[1];
    else return a[0] - b[0];
  });

  let prev = -1;
  let rank = 1;
  score[0].push(rank);
  for (let i = 0; i < score.length; i++) {
    let curr = score[i][1];
    curr === prev ? (score[i][2] = score[i - 1][2]) : (score[i][2] = rank);

    prev = curr;
    rank++;
  }

  score.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    else return 0;
  });
  score.forEach((s) => answer.push(s[2]));

  return answer;
}

const input = [
  [
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ],
];
// const input = [
//   [
//     [80, 70],
//     [70, 80],
//     [30, 50],
//     [90, 100],
//     [100, 90],
//     [100, 100],
//     [10, 30],
//   ],
// ];

console.log(solution(...input));
