/*
문자열 뒤집기
https://school.programmers.co.kr/learn/courses/30/lessons/120822
 */

const input = ["jaron"];
// const input = ["bread"];

function solution(my_string) {
  let answer = "";

  answer = my_string.split("").reverse().join("");

  return answer;
}

console.log(solution(...input));
