/*
첫 번째로 나오는 음수
https://school.programmers.co.kr/learn/courses/30/lessons/181896
 */

function solution(num_list) {
  let answer = -1;

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) {
      answer = i;
      break;
    }
  }

  return answer;
}

// const input = [[12, 4, 15, 46, 38, -2, 15]];
const input = [[13, 22, 53, 24, 15, 6]];

console.log(solution(...input));
