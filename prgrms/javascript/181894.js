/*
2의 영역
https://school.programmers.co.kr/learn/courses/30/lessons/181894
 */

function solution(arr) {
  const answer = [];
  const I = arr.map((v, i) => (v === 2 ? i : "")).filter((v) => v !== "");

  I.length
    ? arr.slice(I[0], I[I.length - 1] + 1).map((v) => answer.push(v))
    : answer.push(-1);

  return answer;
}

const input = [[1, 2, 1, 4, 5, 2, 9]];
// const input = [[1, 2, 1]];
// const input = [[1, 1, 1]];
// const input = [[1, 2, 1, 2, 1, 10, 2, 1]];

console.log(solution(...input));
