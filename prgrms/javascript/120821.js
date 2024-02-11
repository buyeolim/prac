/*
배열 뒤집기
https://school.programmers.co.kr/learn/courses/30/lessons/120821
 */

function solution(num_list) {
  const answer = num_list.reverse();

  return answer;
}

const input = [[1, 2, 3, 4, 5]];
// const input = [[1, 1, 1, 1, 1, 2]];
// const input = [[1, 0, 1, 1, 1, 3, 5]]

console.log(solution(...input));
