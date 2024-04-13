/*
문자열 바꿔서 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/181864
 */

function solution(myString, pat) {
  const answer = +myString
    .replace(/A|B/g, (v) => (v === "A" ? "B" : "A"))
    .includes(pat);

  return answer;
}

// const input = ["ABBAA", "AABB"];
const input = ["ABAB", "ABAB"];

console.log(solution(...input));
