/*
간단한 식 계산하기
https://school.programmers.co.kr/learn/courses/30/lessons/181865
 */

function solution(binomial) {
  let answer = 0;
  const [a, op, b] = binomial.split(" ").map((v) => (isNaN(v) ? v : +v));

  switch (op) {
    case "+":
      answer = a + b;
      break;
    case "-":
      answer = a - b;
      break;
    case "*":
      answer = a * b;
      break;
    default:
      break;
  }

  return answer;
}

const input = ["43 + 12"];
// const input = ["0 - 7777"];
// const input = ["40000 * 40000"];

console.log(solution(...input));
