/*
진료 순서 정하기
https://school.programmers.co.kr/learn/courses/30/lessons/120835
 */

function solution(emergency) {
  const E = [...emergency].sort((a, b) => b - a);
  const answer = emergency.map((v) => E.indexOf(v) + 1);

  return answer;
}

const input = [[3, 76, 24]];
// const input = [[1, 2, 3, 4, 5, 6, 7]];
// const input = [[30, 10, 23, 6, 100]];

console.log(solution(...input));
