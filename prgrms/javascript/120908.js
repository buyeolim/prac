/*
문자열안에 문자열
https://school.programmers.co.kr/learn/courses/30/lessons/120908
 */

function solution(str1, str2) {
  const answer = str1.includes(str2) ? 1 : 2;

  return answer;
}

const input = ["ab6CDE443fgh22iJKlmn1o", "6CD"];
// const input = ["ppprrrogrammers", "pppp"];
// const input = ["AbcAbcA", "AAA"];

console.log(solution(...input));
