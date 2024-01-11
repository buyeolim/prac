/*
짝수 홀수 개수
https://school.programmers.co.kr/learn/courses/30/lessons/120824
 */

const input = [[1, 2, 3, 4, 5]];
// const input = [[1, 3, 5, 7]];

function solution(num_list) {
  const answer = [0, 0];

  num_list.forEach((n) => (n % 2 ? answer[1]++ : answer[0]++));

  return answer;
}

console.log(solution(...input));
