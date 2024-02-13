/*
순서쌍의 개수
https://school.programmers.co.kr/learn/courses/30/lessons/120836
 */

function solution(n) {
  let answer = 0;

  for (let i = 1; i < n + 1; i++) {
    !(n % i) && answer++;
  }

  return answer;
}

// const input = [20];
const input = [100];

console.log(solution(...input));
