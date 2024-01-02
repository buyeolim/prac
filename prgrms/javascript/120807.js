/*
숫자 비교하기
https://school.programmers.co.kr/learn/courses/30/lessons/120807
 */

const input = [2, 3];
// const input = [11, 11];
// const input = [7, 99];

function solution(num1, num2) {
  let answer = 0;

  answer = num1 !== num2 ? -1 : 1;

  return answer;
}

console.log(solution(...input));
