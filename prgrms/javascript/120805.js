/*
몫 구하기
https://school.programmers.co.kr/learn/courses/30/lessons/120805
 */

const input = [10, 5];
// const input = [7, 2];

function solution(num1, num2) {
  let answer = 0;

  answer = Math.floor(num1 / num2);

  return answer;
}

console.log(solution(...input));
