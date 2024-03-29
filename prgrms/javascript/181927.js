/*
마지막 두 원소
https://school.programmers.co.kr/learn/courses/30/lessons/181927
 */

function solution(num_list) {
  const answer = [...num_list];
  const len = num_list.length;
  const [a, b] = [num_list[len - 2], num_list[len - 1]];

  answer.push(b > a ? b - a : 2 * b);

  return answer;
}

const input = [[2, 1, 6]];
// const input = [[5, 2, 1, 7, 5]];

console.log(solution(...input));
