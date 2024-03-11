/*
문자열 곱하기
https://school.programmers.co.kr/learn/courses/30/lessons/181940
 */

function solution(my_string, k) {
  const answer = my_string.repeat(k);

  return answer;
}

// const input = ["string", 3];
const input = ["love", 10];

console.log(solution(...input));
