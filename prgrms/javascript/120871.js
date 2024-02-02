/*
저주의 숫자 3
https://school.programmers.co.kr/learn/courses/30/lessons/120871
 */

function solution(n) {
  let answer = 1;
  let count = 1;
  while (true) {
    answer.toString().includes("3") || answer % 3 === 0 ? "" : count++;

    if (count > n) break;
    answer++;
  }

  return answer;
}

// const input = [15];
const input = [40];

console.log(solution(...input));
