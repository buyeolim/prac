/*
이진수 더하기
https://school.programmers.co.kr/learn/courses/30/lessons/120885
 */

function solution(bin1, bin2) {
  const answer = (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);

  return answer;
}

const input = ["10", "11"];
// const input = ["1001", "1111"];

console.log(solution(...input));
