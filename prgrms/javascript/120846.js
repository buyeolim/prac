/*
합성수 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/120846
 */

function solution(n) {
  let answer = 0;
  const P = new Array(n + 1).fill(0);

  P[0] = P[1] = 0;
  for (let i = 2; i < n + 1; i++) {
    if (P[i]) continue;
    for (let j = 2 * i; j < n + 1; j += i) {
      P[j] = 1;
    }
  }

  answer = P.reduce((acc, cur) => acc + cur, 0);

  return answer;
}

const input = [10];
// const input = [15];

console.log(solution(...input));
