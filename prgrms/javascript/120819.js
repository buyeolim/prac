/*
아이스 아메리카노
https://school.programmers.co.kr/learn/courses/30/lessons/120819
 */

function solution(money) {
  const answer = [Math.floor(money / 5500), money % 5500];

  return answer;
}

const input = [5500];
// const input = [15000];

console.log(solution(...input));
