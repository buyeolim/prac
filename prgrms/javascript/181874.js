/*
A 강조하기
https://school.programmers.co.kr/learn/courses/30/lessons/181874
 */

function solution(myString) {
  const answer = myString
    .toLowerCase()
    .split("")
    .map((ch) => (ch === "a" ? ch.toUpperCase() : ch))
    .join("");

  return answer;
}

const input = ["abstract algebra"];
// const input = ["PrOgRaMmErS"];

console.log(solution(...input));
