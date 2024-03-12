/*
문자열의 앞의 n글자
https://school.programmers.co.kr/learn/courses/30/lessons/181907
 */

function solution(my_string, n) {
  const answer = my_string.substring(0, n);

  return answer;
}

// const input = ["ProgrammerS123", 11];
const input = ["He110W0r1d", 5];

console.log(solution(...input));
