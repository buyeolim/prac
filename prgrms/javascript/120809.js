/*
배열 두배 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/120809
 */

const input = [[1, 2, 3, 4, 5]];
// const input = [[1, 2, 100, -99, 1, 2, 3]];

function solution(numbers) {
  const answer = [];

  numbers.forEach((v) => answer.push(2 * v));

  return answer;
}

console.log(solution(...input));
