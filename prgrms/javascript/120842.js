/*
2차원으로 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/120842
 */

function solution(num_list, n) {
  const answer = [];

  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list.slice(i, i + n));
  }

  return answer;
}

const input = [[1, 2, 3, 4, 5, 6, 7, 8], 2];
// const input = [[100, 95, 2, 4, 5, 6, 18, 33, 948], 3];

console.log(solution(...input));
