/*
분수의 덧셈
https://school.programmers.co.kr/learn/courses/30/lessons/120808
 */

function solution(numer1, denom1, numer2, denom2) {
  const answer = [0, 0];
  const getGcd = (a, b) => {
    if (!b) return a;

    return getGcd(b, a % b);
  };

  const gcd = getGcd(denom1, denom2);
  const lcm = (denom1 * denom2) / gcd;

  answer[0] = numer1 * (lcm / denom1) + numer2 * (lcm / denom2);
  answer[1] = lcm;

  const gcdForAns = getGcd(...answer);
  answer[0] /= gcdForAns;
  answer[1] /= gcdForAns;

  return answer;
}

// const input = [1, 2, 3, 4];
// const input = [9, 2, 1, 3];

const input = [1, 1000, 1, 1000];

console.log(solution(...input));
