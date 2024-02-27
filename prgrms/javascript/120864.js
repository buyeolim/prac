/*
숨어있는 숫자의 덧셈 (2)
https://school.programmers.co.kr/learn/courses/30/lessons/120864
 */

function solution(my_string) {
  const answer = my_string
    .replace(/[a-zA-Z]/g, " ")
    .split(" ")
    .reduce((acc, cur) => acc + 1 * cur, 0);

  return answer;
}

const input = ["aAb1B2cC34oOp"];
// const input = ["1a2b3c4d123Z"];

console.log(solution(...input));
