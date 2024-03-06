/*
연속된 수의 합
https://school.programmers.co.kr/learn/courses/30/lessons/120923
 */

function solution(num, total) {
  const answer = Array.from(
    { length: num },
    (_, i) => Math.ceil(total / num) - Math.floor(num / 2) + i
  );

  return answer;
}

// const input = [3, 12];
// const input = [5, 15];
const input = [4, 14];
// const input = [5, 5];

console.log(solution(...input));
