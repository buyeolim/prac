/*
정수 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/181840
 */

function solution(num_list, n) {
  const answer = 1 * num_list.includes(n);

  return answer;
}

// const input = [[1, 2, 3, 4, 5], 3];
const input = [[15, 98, 23, 2, 15], 20];

console.log(solution(...input));
