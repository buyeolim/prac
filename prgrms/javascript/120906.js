/*
자릿수 더하기
https://school.programmers.co.kr/learn/courses/30/lessons/120906
 */

function solution(n) {
  const answer = (n + "").split("").reduce((acc, cur) => acc + +cur, 0);

  return answer;
}

const input = [1234];
// const input = [930211];

console.log(solution(...input));
