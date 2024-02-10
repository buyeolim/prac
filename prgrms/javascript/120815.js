/*
피자 나눠 먹기 (2)
https://school.programmers.co.kr/learn/courses/30/lessons/120815
 */

function solution(n) {
  let answer = 0;
  const getGcd = (a, b) => {
    if (!b) return a;

    return getGcd(b, a % b);
  };

  const gcd = getGcd(n, 6);
  answer = n / gcd;

  return answer;
}

const input = [6];
// const input = [10];
// const input = [4];

console.log(solution(...input));
