/*
주사위 게임 1
https://school.programmers.co.kr/learn/courses/30/lessons/181839
 */

function solution(a, b) {
  const answer =
    a % 2 && b % 2
      ? a ** 2 + b ** 2
      : a % 2 || b % 2
      ? 2 * (a + b)
      : Math.abs(a - b);

  return answer;
}

const input = [3, 5];
// const input = [6, 1];

console.log(solution(...input));
