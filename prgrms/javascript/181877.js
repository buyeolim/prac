/*
대문자로 바꾸기
https://school.programmers.co.kr/learn/courses/30/lessons/181877
 */

function solution(myString) {
  const answer = myString.toUpperCase();

  return answer;
}

const input = ["aBcDeFg"];
// const input = ["AAA"];

console.log(solution(...input));
