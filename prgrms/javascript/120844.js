/*
배열 회전시키기
https://school.programmers.co.kr/learn/courses/30/lessons/120844
 */

const input = [[1, 2, 3], "right"];
// const input = [[4, 455, 6, 4, -1, 45, 6], "left"];

function solution(numbers, direction) {
  const answer = [...numbers];

  direction === "right"
    ? answer.unshift(answer.pop())
    : answer.push(answer.shift());

  return answer;
}

console.log(solution(...input));
