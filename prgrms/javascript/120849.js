/*
모음 제거
https://school.programmers.co.kr/learn/courses/30/lessons/120849
 */

function solution(my_string) {
  let answer = my_string.replace(/[aeiou]/g, "");

  return answer;
}

const input = ["bus"];
// const input = ["nice to meet you"];

console.log(solution(...input));
