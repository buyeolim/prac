/*
문자열 정렬하기 (1)
https://school.programmers.co.kr/learn/courses/30/lessons/120850
 */

function solution(my_string) {
  const answer = my_string
    .split("")
    .filter((ele) => !isNaN(ele))
    .map((ele) => +ele)
    .sort((a, b) => a - b);

  return answer;
}

const input = ["hi12392"];
// const input = ["p2o4i8gj2"];
// const input = ["abcde0"];

console.log(solution(...input));
