/*
중복된 문자 제거
https://school.programmers.co.kr/learn/courses/30/lessons/120888
 */

const input = ["people"];
// const input = ["We are the world"];

function solution(my_string) {
  let answer = "";

  const S = new Set(my_string.split(""));
  for (let ch of S.keys()) answer += ch;

  return answer;
}

console.log(solution(...input));
