/*
배열의 유사도
https://school.programmers.co.kr/learn/courses/30/lessons/120903
 */

const input = [
  ["a", "b", "c"],
  ["com", "b", "d", "p", "c"],
];
// const input = [
//   ["n", "omg"],
//   ["m", "dot"],
// ];

function solution(s1, s2) {
  let answer = 0;

  s1.forEach((ele) => s2.includes(ele) && answer++);

  return answer;
}

console.log(solution(...input));
