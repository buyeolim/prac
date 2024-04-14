/*
ad 제거하기
https://school.programmers.co.kr/learn/courses/30/lessons/181870
 */

function solution(strArr) {
  const answer = strArr.filter((str) => !str.includes("ad"));

  return answer;
}

const input = [["and", "notad", "abcd"]];
// const input = [["there", "are", "no", "a", "ds"]];

console.log(solution(...input));
