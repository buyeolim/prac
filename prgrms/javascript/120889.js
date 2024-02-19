/*
삼각형의 완성조건 (1)
https://school.programmers.co.kr/learn/courses/30/lessons/120889
 */

function solution(sides) {
  let answer = 0;

  sides.sort((a, b) => a - b);
  answer = sides[0] + sides[1] > sides[2] ? 1 : 2;

  return answer;
}

const input = [[1, 2, 3]];
// const input = [[3, 6, 2]];
// const input = [[199, 72, 222]];

console.log(solution(...input));
