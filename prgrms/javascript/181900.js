/*
글자 지우기
https://school.programmers.co.kr/learn/courses/30/lessons/181900
 */

function solution(my_string, indices) {
  let answer = [...my_string];

  for (let i = 0; i < indices.length; i++) {
    answer[indices[i]] = "";
  }
  answer = answer.join("");

  return answer;
}

const input = ["apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]];

console.log(solution(...input));
