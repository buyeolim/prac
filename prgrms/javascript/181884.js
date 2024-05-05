/*
n보다 커질 때까지 더하기
https://school.programmers.co.kr/learn/courses/30/lessons/181884
 */

function solution(numbers, n) {
  let answer = 0;

  for (let number of numbers) {
    if (answer > n) break;

    answer += number;
  }

  return answer;
}

const input = [[34, 5, 71, 29, 100, 34], 123];
// const input = [[58, 44, 27, 10, 100], 139];

console.log(solution(...input));
