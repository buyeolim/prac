/*
rny_string
https://school.programmers.co.kr/learn/courses/30/lessons/181863
 */

function solution(rny_string) {
  const answer = rny_string.replaceAll("m", "rn");

  return answer;
}

const input = ["masterpiece"];
// const input = ["programmers"];
// const input = ["jerry"];
// const input = ["burn"];

console.log(solution(...input));
