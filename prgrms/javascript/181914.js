/*
9로 나눈 나머지
https://school.programmers.co.kr/learn/courses/30/lessons/181914
 */

function solution(number) {
  const answer = [...(number + "")].reduce((acc, cur) => acc + +cur, 0) % 9;

  return answer;
}

const input = ["123"];
// const input = ["78720646226947352489"];

console.log(solution(...input));
