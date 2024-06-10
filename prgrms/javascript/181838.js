/*
날짜 비교하기
https://school.programmers.co.kr/learn/courses/30/lessons/181838
 */

function solution(date1, date2) {
  const [t1, t2] = [new Date(date1), new Date(date2)];
  const answer = t1.getTime() < t2.getTime() ? 1 : 0;

  return answer;
}

const input = [
  [2021, 12, 28],
  [2021, 12, 29],
];
// const input = [
//   [1024, 10, 24],
//   [1024, 10, 24],
// ];

console.log(solution(...input));
