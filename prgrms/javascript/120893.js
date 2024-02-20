/*
대문자와 소문자
https://school.programmers.co.kr/learn/courses/30/lessons/120893
 */

function solution(my_string) {
  const answer = my_string
    .split("")
    .map((ch) => (ch.charCodeAt() >= 97 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");

  return answer;
}

const input = ["cccCCC"];
// const input = ["abCdEfghIJ"];

console.log(solution(...input));
