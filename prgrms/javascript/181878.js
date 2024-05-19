/*
원하는 문자열 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/181878
 */

function solution(myString, pat) {
  const regexp = new RegExp(`${pat}`, "gi");
  const answer = myString.match(regexp) === null ? 0 : 1;

  return answer;
}

// const input = ["AbCdEfG", "aBc"];
const input = ["aaAA", "aaaaa"];

console.log(solution(...input));
