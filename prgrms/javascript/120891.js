/*
369게임
https://school.programmers.co.kr/learn/courses/30/lessons/120891
 */

const input = [3];
// const input = [29423];

function solution(order) {
  let answer = 0;

  answer = order.toString().match(/[369]/g)?.length || 0;

  return answer;
}

console.log(solution(...input));
