/*
제곱수 판별하기
https://school.programmers.co.kr/learn/courses/30/lessons/120909
 */

function solution(n) {
  const answer = Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? 1 : 2;

  return answer;
}

const input = [144];
// const input = [976];

console.log(solution(...input));
