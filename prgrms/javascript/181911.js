/*
부분 문자열 이어 붙여 문자열 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/181911
 */

function solution(my_strings, parts) {
  const answer = my_strings
    .map((str, idx) => str.substring(parts[idx][0], parts[idx][1] + 1))
    .join("");

  return answer;
}

const input = [
  ["progressive", "hamburger", "hammer", "ahocorasick"],
  [
    [0, 4],
    [1, 2],
    [3, 5],
    [7, 7],
  ],
];

console.log(solution(...input));
