/*
조건 문자열
https://school.programmers.co.kr/learn/courses/30/lessons/181934
 */

function solution(ineq, eq, n, m) {
  const answer =
    ineq === ">"
      ? eq === "!"
        ? +(n > m)
        : +(n >= m)
      : eq === "!"
      ? +(n < m)
      : +(n <= m);

  return answer;
}

// const input = ["<", "=", 20, 50];
const input = [">", "!", 41, 78];

console.log(solution(...input));
