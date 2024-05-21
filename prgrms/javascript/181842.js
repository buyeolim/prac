/*
부분 문자열
https://school.programmers.co.kr/learn/courses/30/lessons/181842
 */

function solution(str1, str2) {
  const answer = +str2.includes(str1);

  return answer;
}

const input = ["abc", "aabcc"];
// const input = ["tbt", "tbbttb"];

console.log(solution(...input));
