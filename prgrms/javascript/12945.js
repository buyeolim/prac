/*
피보나치 수
https://school.programmers.co.kr/learn/courses/30/lessons/12945
 */
const start = new Date().getTime();

function solution(n) {
  let answer;
  const dp = Array(n + 1).fill(0);

  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = ((dp[i - 1] % 1234567) + (dp[i - 2] % 1234567)) % 1234567;
  }

  answer = dp[n];

  return answer;
}

const n = 100000;

console.log(solution(n));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);

/*
 * 정확성: 100.0
 *         o / o / o / o / o // o / o / o / o / o //
 *         o / o / o / o /
 * 합계: 100.0 / 100.0
 */
