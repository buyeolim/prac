/*
문자열 섞기
https://school.programmers.co.kr/learn/courses/30/lessons/181942
 */

function solution(str1, str2) {
  const answer = Array.from(
    { length: str1.length },
    (_, i) => str1[i] + str2[i]
  ).join("");

  return answer;
}

const input = ["aaaaa", "bbbbb"];

console.log(solution(...input));
