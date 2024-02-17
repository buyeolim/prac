/*
주사위의 개수
https://school.programmers.co.kr/learn/courses/30/lessons/120845
 */

function solution(box, n) {
  const answer =
    Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);

  return answer;
}

const input = [[1, 1, 1], 1];
// const input = [[10, 8, 6], 3];

console.log(solution(...input));
