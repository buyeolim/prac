/*
수열과 구간 쿼리 4
https://school.programmers.co.kr/learn/courses/30/lessons/181922
 */

function solution(arr, queries) {
  const answer = arr;

  queries.forEach(([s, e, k]) => {
    for (let i = s; i < e + 1; i++) {
      !(i % k) && arr[i]++;
    }
  });

  return answer;
}

const input = [
  [0, 1, 2, 4, 3],
  [
    [0, 4, 1],
    [0, 3, 2],
    [0, 3, 3],
  ],
];

console.log(solution(...input));
