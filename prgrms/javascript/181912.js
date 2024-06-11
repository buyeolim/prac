/*
배열 만들기 5
https://school.programmers.co.kr/learn/courses/30/lessons/181912
 */

function solution(intStrs, k, s, l) {
  const answer = intStrs
    .filter((val) => +val.substring(s, s + l) > k)
    .map((val) => +val.substring(s, s + l));

  return answer;
}

const input = [["0123456789", "9876543210", "9999999999999"], 50000, 5, 5];

console.log(solution(...input));
