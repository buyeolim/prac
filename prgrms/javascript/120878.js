/*
유한소수 판별하기
https://school.programmers.co.kr/learn/courses/30/lessons/120878
 */

function solution(a, b) {
  let answer = 0;
  const P = [];

  // 분모 소인수분해
  for (let i = 2; i <= Math.sqrt(b); i++) {
    while (b % i === 0) {
      P.push(i);

      b /= i;
    }
  }
  b > 1 && P.push(b);

  // 기약분수 만들기
  for (let i = 0; i < P.length; i++) {
    if (a % P[i] === 0) {
      a /= P[i];
      P[i] = 0;
    }
  }

  // 2, 5 이외의 소인수
  answer = P.filter((p) => p && !(p === 2 || p === 5)).length ? 2 : 1;

  return answer;
}

// const input = [7, 20];
const input = [11, 22];
// const input = [12, 21];

console.log(solution(...input));
