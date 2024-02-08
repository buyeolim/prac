/*
두 수의 나눗셈
https://school.programmers.co.kr/learn/courses/30/lessons/120806
 */

function solution(num1, num2) {
  const answer = Math.floor((num1 / num2) * 1000);

  return answer;
}

const input = [3, 2];
// const input = [7,	3];
// const input = [1,	16];

console.log(solution(...input));
