/*
특정 문자 제거하기
https://school.programmers.co.kr/learn/courses/30/lessons/120826
 */

const input = ["abcdef", "f"];
// const input = ["BCBdbe", "B"];

function solution(my_string, letter) {
  let answer = "";

  answer = my_string.replaceAll(letter, "");

  return answer;
}

console.log(solution(...input));
