/*
길이에 따른 연산
https://school.programmers.co.kr/learn/courses/30/lessons/181879
 */

function solution(num_list) {
  const answer =
    num_list.length > 10
      ? num_list.reduce((acc, cur) => acc + cur, 0)
      : num_list.reduce((acc, cur) => acc * cur, 1);

  return answer;
}

const input = [[3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]];
// const input = [[2, 3, 4, 5]];

console.log(solution(...input));
