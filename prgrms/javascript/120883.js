/*
로그인 성공?
https://school.programmers.co.kr/learn/courses/30/lessons/120883
 */

function solution(id_pw, db) {
  const answer = ["fail", "wrong pw", "login"];
  let status = 0;

  for (let i = 0; i < db.length; i++) {
    id_pw[0] === db[i][0] &&
      (status = 1) &&
      id_pw[1] === db[i][1] &&
      (status = 2);

    if (status === 2) break;
  }

  return answer[status];
}

const input = [
  ["meosseugi", "1234"],
  [
    ["rardss", "123"],
    ["yyoom", "1234"],
    ["meosseugi", "1234"],
  ],
];
// const input = [
//   ["programmer01", "15789"],
//   [
//     ["programmer02", "111111"],
//     ["programmer00", "134"],
//     ["programmer01", "1145"],
//   ],
// ];
// const input = [
//   ["rabbit04", "98761"],
//   [(["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"])],
// ];

console.log(solution(...input));
