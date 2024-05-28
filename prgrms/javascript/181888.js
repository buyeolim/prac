/*
n개 간격의 원소들
https://school.programmers.co.kr/learn/courses/30/lessons/181888
 */

function solution(num_list, n) {
  const answer = num_list.filter((v, i) => !(i % n));

  return answer;
}

const input = [[4, 2, 6, 1, 7, 6], 2];
// const input = [[4, 2, 6, 1, 7, 6], 4];

console.log(solution(...input));
