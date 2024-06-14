/*
수열과 구간 쿼리 1
https://school.programmers.co.kr/learn/courses/30/lessons/181883
 */

function solution(arr, queries) {
  const answer = arr;

  for (let i = 0; i < queries.length; i++) {
    const [s, e] = queries[i];
    for (let j = s; j < e + 1; j++) answer[j]++;
  }

  return answer;
}

const input = [
  [0, 1, 2, 3, 4],
  [
    [0, 1],
    [1, 2],
    [2, 3],
  ],
];

console.log(solution(...input));
