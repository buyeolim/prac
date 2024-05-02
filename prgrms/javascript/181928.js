/*
이어 붙인 수
https://school.programmers.co.kr/learn/courses/30/lessons/181928
 */

function solution(num_list) {
  const answer =
    +num_list.filter((v) => v % 2).join("") +
    +num_list.filter((v) => !(v % 2)).join("");

  return answer;
}

const input = [[3, 4, 5, 2, 1]];
// const input = [[5, 7, 8, 3]];

console.log(solution(...input));
