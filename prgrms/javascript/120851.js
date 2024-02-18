/*
숨어있는 숫자의 덧셈 (1)
https://school.programmers.co.kr/learn/courses/30/lessons/120851
 */

function solution(my_string) {
  const answer = my_string
    .match(/[0-9]/g)
    .map((ele) => +ele)
    .reduce((acc, cur) => acc + cur, 0);

  return answer;
}

const input = ["aAb1B2cC34oOp"];
// const input = ["1a2b3c4d123"];

console.log(solution(...input));
