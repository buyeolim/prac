/*
원소들의 곱과 합
https://school.programmers.co.kr/learn/courses/30/lessons/181929
 */

function solution(num_list) {
  const answer =
    num_list.reduce((acc, cur) => acc * cur, 1) <
    num_list.reduce((acc, cur) => acc + cur, 0) ** 2
      ? 1
      : 0;

  return answer;
}

const input = [[3, 4, 5, 2, 1]];
// const input = [[5, 7, 8, 3]];

console.log(solution(...input));
