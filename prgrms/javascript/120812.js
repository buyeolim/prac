/*
최빈값 구하기
https://school.programmers.co.kr/learn/courses/30/lessons/120812
 */

function solution(array) {
  let answer = 0;

  const counts = new Array(1001).fill(0);
  array.forEach((v) => counts[v]++);

  let maxCount = 0;
  for (let i = 0; i < 1001; i++) {
    if (counts[i] > maxCount) {
      maxCount = counts[i];
      answer = i;
    }
  }
  answer =
    counts.indexOf(maxCount) === counts.lastIndexOf(maxCount) ? answer : -1;

  return answer;
}

// const input = [[1, 2, 3, 3, 3, 4]];
// const input = [[1, 1, 2, 2]];
const input = [[1]];

console.log(solution(...input));
