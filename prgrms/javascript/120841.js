/*
점의 위치 구하기
https://school.programmers.co.kr/learn/courses/30/lessons/120841
 */

function solution(dot) {
  const answer = dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : dot[1] > 0 ? 2 : 3;

  return answer;
}

const input = [[2, 4]];
// const input = [[-7, 9]];

console.log(solution(...input));
