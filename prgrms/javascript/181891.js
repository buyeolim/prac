/*
순서 바꾸기
https://school.programmers.co.kr/learn/courses/30/lessons/181891
 */

function solution(num_list, n) {
  const answer = [];
  const [A, B] = [num_list.splice(0, n), num_list];

  answer.push(...B, ...A);

  return answer;
}

const input = [[2, 1, 6], 1];
// const input = [[5, 2, 1, 7, 5], 3];

console.log(solution(...input));
