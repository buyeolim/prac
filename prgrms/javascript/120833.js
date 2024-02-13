/*
배열 자르기
https://school.programmers.co.kr/learn/courses/30/lessons/120833
 */

function solution(numbers, num1, num2) {
  const answer = numbers.slice(num1, num2 + 1);

  return answer;
}

const input = [[1, 2, 3, 4, 5], 1, 3];
// const input = [[1, 3, 5], 1, 2];

console.log(solution(...input));
