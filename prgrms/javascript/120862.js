/*
최댓값 만들기 (2)
https://school.programmers.co.kr/learn/courses/30/lessons/120862
 */

function solution(numbers) {
  let answer = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer = Math.max(answer, numbers[i] * numbers[j]);
    }
  }

  return answer;
}

// const input = [[1, 2, -3, 4, -5]];
// const input = [[0, -31, 24, 10, 1, 9]];
// const input = [[10, 20, 30, 5, 5, 20, 5]];

const input = [[-1, 10]];

console.log(solution(...input));
