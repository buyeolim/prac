/*
코드 처리하기
https://school.programmers.co.kr/learn/courses/30/lessons/181932
 */

function solution(code) {
  let answer = "";
  let mode = false;

  for (let idx = 0; idx < code.length; idx++) {
    if (mode) {
      code[idx] === "1" ? (mode = !mode) : idx % 2 && (answer += code[idx]);
    } else {
      code[idx] === "1" ? (mode = !mode) : !(idx % 2) && (answer += code[idx]);
    }
  }
  answer.length === 0 && (answer = "EMPTY");

  return answer;
}

const input = ["abc1abc1abc"];

console.log(solution(...input));
