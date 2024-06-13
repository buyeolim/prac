/*
특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/181872
 */

function solution(myString, pat) {
  const regexp = new RegExp(`.*${pat}`, "g");
  const answer = myString.match(regexp)[0];

  return answer;
}

const input = ["AbCdEFG", "dE"];
// const input = ["AAAAaaaa", "a"];

console.log(solution(...input));
