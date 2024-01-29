/*
외계어 사전
https://school.programmers.co.kr/learn/courses/30/lessons/120869
 */

function solution(spell, dic) {
  let answer = 2;
  const s = spell.sort().join("");
  for (let d of dic) {
    if (s === d.split("").sort().join("")) {
      answer = 1;
      break;
    }
  }

  return answer;
}

// const input = [
//   ["p", "o", "s"],
//   ["sod", "eocd", "qixm", "adio", "soo"],
// ];
const input = [
  ["z", "d", "x"],
  ["def", "dww", "dzx", "loveaw"],
];
// const input = [
//   ["s", "o", "m", "d"],
//   ["moos", "dzx", "smm", "sunmmo", "som"],
// ];

console.log(solution(...input));
