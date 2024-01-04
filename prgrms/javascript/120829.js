/*
각도기
https://school.programmers.co.kr/learn/courses/30/lessons/120829
 */

const input = 70;
// const input = 91;
// const input = 180;

function solution(angle) {
  let answer = 0;

  if (angle < 90) {
    answer = 1;
  } else if (angle === 90) {
    answer = 2;
  } else if (angle < 180) {
    answer = 3;
  } else {
    answer = 4;
  }

  return answer;
}

console.log(solution(input));
