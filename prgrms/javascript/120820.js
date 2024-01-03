/*
나이 출력
https://school.programmers.co.kr/learn/courses/30/lessons/120820
 */

const input = 40;
// const input = 23;

function solution(age) {
  let answer = 0;

  answer = 2022 - age + 1;

  return answer;
}

console.log(solution(input));
