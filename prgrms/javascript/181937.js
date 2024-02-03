/*
n의 배수
https://school.programmers.co.kr/learn/courses/30/lessons/181937
 */

function solution(num, n) {
  const answer = num % n ? 0 : 1;

  return answer;
}

const input = [98, 2];
// const input = [34, 3];

console.log(solution(...input));
