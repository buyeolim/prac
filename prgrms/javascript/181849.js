/*
문자열 정수의 합
https://school.programmers.co.kr/learn/courses/30/lessons/181849
 */

function solution(num_str) {
  const answer = num_str.split("").reduce((acc, cur) => acc + 1 * cur, 0);

  return answer;
}

const input = ["123456789"];
// const input = ["1000000"];

console.log(solution(...input));
