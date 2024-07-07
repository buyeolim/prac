/*
그림 확대
https://school.programmers.co.kr/learn/courses/30/lessons/181836
 */

function solution(picture, k) {
  const answer = picture
    .map((str) => {
      const tmp = [...str].map((ch) => ch.repeat(k)).join("");

      return Array.from({ length: k }, () => tmp);
    })
    .flat();

  return answer;
}

const input = [
  [
    ".xx...xx.",
    "x..x.x..x",
    "x...x...x",
    ".x.....x.",
    "..x...x..",
    "...x.x...",
    "....x....",
  ],
  2,
];
// const input = [["x.x", ".x.", "x.x"], 3];

console.log(solution(...input));
