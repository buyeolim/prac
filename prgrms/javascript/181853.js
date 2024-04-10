/*
뒤에서 5등까지
https://school.programmers.co.kr/learn/courses/30/lessons/181853
 */

function solution(num_list) {
  const answer = num_list.sort((a, b) => a - b).slice(0, 5);

  return answer;
}

const input = [[12, 4, 15, 46, 38, 1, 14]];

console.log(solution(...input));
