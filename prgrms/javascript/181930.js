/*
주사위 게임 2
https://school.programmers.co.kr/learn/courses/30/lessons/181930
 */

function solution(a, b, c) {
  const answer =
    a === b && b === c
      ? (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
      : a !== b && b !== c && a !== c
      ? a + b + c
      : (a + b + c) * (a ** 2 + b ** 2 + c ** 2);

  return answer;
}

const input = [2, 6, 1];
// const input = [5, 3, 3];
// const input = [4, 4, 4];

console.log(solution(...input));
