/*
홀수 vs 짝수
https://school.programmers.co.kr/learn/courses/30/lessons/181887
 */

function solution(num_list) {
  let answer = 0;
  const [o, e] = [
    num_list.filter((_, i) => i % 2 === 0).reduce((acc, cur) => acc + cur, 0),
    num_list.filter((_, i) => i % 2 === 1).reduce((acc, cur) => acc + cur, 0),
  ];
  answer = o > e ? o : e;

  return answer;
}

const input = [[4, 2, 6, 1, 7, 6]];
// const input = [[-1, 2, 5, 6, 3]];

console.log(solution(...input));
