/*
소인수분해
https://school.programmers.co.kr/learn/courses/30/lessons/120852
 */

function solution(n) {
  const answer = [];
  const P = new Array(n + 1).fill(1);

  // 에라토스테네스의 체
  P[0] = P[1] = 0;
  for (let i = 1; i < n + 1; i++) {
    if (!P[i]) continue;
    for (let j = 2 * i; j < n + 1; j += i) {
      P[j] = 0;
    }
  }

  // n의 소인수
  for (let i = 2; i < n + 1; i++) {
    P[i] && !(n % i) && answer.push(i);
  }

  return answer;
}

const input = [12];
// const input = [17];
// const input = [420];

console.log(solution(...input));
