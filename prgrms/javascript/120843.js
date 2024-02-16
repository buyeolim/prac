/*
공 던지기
https://school.programmers.co.kr/learn/courses/30/lessons/120843
 */

function solution(numbers, k) {
  let answer = 0;
  let i = 0;
  let count = 0;

  while (count < k) {
    count++;
    answer = numbers[i];
    i + 2 >= numbers.length ? (i = (i + 2) % numbers.length) : (i += 2);
  }

  return answer;
}

// const input = [[1, 2, 3, 4], 2];
// const input = [[1, 2, 3, 4, 5, 6], 5];
const input = [[1, 2, 3], 3];

console.log(solution(...input));
