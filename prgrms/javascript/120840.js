/*
구슬을 나누는 경우의 수
https://school.programmers.co.kr/learn/courses/30/lessons/120840
 */

function solution(balls, share) {
  let answer = 0;
  const F = new Array(31).fill(1n);

  for (let n = 1; n < 31; n++) {
    F[n] = F[n - 1] * BigInt(n);
  }
  answer = (F[balls] / (F[balls - share] * F[share])).toString() * 1;

  return answer;
}

// const input = [3, 2];
const input = [5, 3];

console.log(solution(...input));
