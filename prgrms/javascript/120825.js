/*
문자 반복 출력하기
https://school.programmers.co.kr/learn/courses/30/lessons/120825
 */

function solution(my_string, n) {
  const answer = Array.from({ length: my_string.length }, (_, i) =>
    my_string[i].repeat(n)
  ).join("");
  return answer;
}

const input = ["hello", 3];

console.log(solution(...input));
