/*
n 번째 원소부터
https://school.programmers.co.kr/learn/courses/30/lessons/181892
 */

function solution(num_list, n) {
  const answer = num_list.slice(n - 1);

  return answer;
}

const input = [[2, 1, 6], 3];
// const input = [[5, 2, 1, 7, 5], 2];

console.log(solution(...input));
