/*
n 번째 원소까지
https://school.programmers.co.kr/learn/courses/30/lessons/181889
 */

function solution(num_list, n) {
  const answer = num_list.slice(0, n);

  return answer;
}

const input = [[2, 1, 6], 1];
// const input = [[5, 2, 1, 7, 5], 3];

console.log(solution(...input));
