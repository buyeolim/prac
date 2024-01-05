/*
양꼬치
https://school.programmers.co.kr/learn/courses/30/lessons/120830
 */

const input = [10, 3];
// const input = [64, 6];

function solution(n, k) {
  let answer = 0;

  answer = n * 12000 + (k - Math.floor(n / 10)) * 2000;

  return answer;
}

console.log(solution(...input));
