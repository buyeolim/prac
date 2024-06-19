/*
수열과 구간 쿼리 2
https://school.programmers.co.kr/learn/courses/30/lessons/181923
 */

function solution(arr, queries) {
  const answer = queries.map(([s, e, k]) => {
    let f = arr.slice(s, e + 1).filter((v) => v > k);

    return f.length > 0 ? Math.min(...f) : -1;
  });

  return answer;
}

const input = [
  [0, 1, 2, 4, 3],
  [
    [0, 4, 2],
    [0, 3, 2],
    [0, 2, 2],
  ],
];

console.log(solution(...input));
