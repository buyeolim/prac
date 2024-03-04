/*
치킨 쿠폰
https://school.programmers.co.kr/learn/courses/30/lessons/120884
 */

function solution(chicken) {
  let answer = 0;

  while (chicken / 10 >= 1) {
    answer += Math.floor(chicken / 10);

    chicken = Math.floor(chicken / 10) + (chicken % 10);
  }

  return answer;
}

const input = [100];
// const input = [1081];

console.log(solution(...input));
