/*
수열과 구간 쿼리 3
https://school.programmers.co.kr/learn/courses/30/lessons/181924
 */

function solution(arr, queries) {
  const answer = arr;

  queries.forEach(
    ([i, j], idx) => ([answer[i], answer[j]] = [answer[j], answer[i]])
  );

  return answer;
}

const input = [
  [0, 1, 2, 3, 4],
  [
    [0, 3],
    [1, 2],
    [1, 4],
  ],
];

console.log(solution(...input));
