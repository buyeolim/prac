/*
두 수의 합
https://school.programmers.co.kr/learn/courses/30/lessons/181846
 */

function solution(a, b) {
  const answer = BigInt(a) + BigInt(b);

  return answer;
}

const input = ["582", "734"];
// const input = ["18446744073709551615", "287346502836570928366"];
// const input = ["0", "0"];

console.log(solution(...input));
