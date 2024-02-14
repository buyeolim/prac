/*
개미 군단
https://school.programmers.co.kr/learn/courses/30/lessons/120837
 */

function solution(hp) {
  let answer = 0;
  const ants = [5, 3, 1]; // [장군, 병정, 일개미 공격력]

  ants.forEach((v) => {
    answer += Math.floor(hp / v);
    hp %= v;
  });

  return answer;
}

const input = [23];
// const input = [24];
// const input = [999];

console.log(solution(...input));
