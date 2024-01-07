/*
배열의 평균값
https://school.programmers.co.kr/learn/courses/30/lessons/120817
 */

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const input = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

function solution(numbers) {
  let answer = 0;

  answer = numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;

  return answer;
}

console.log(solution(input));
