/*
특정한 문자를 대문자로 바꾸기
https://school.programmers.co.kr/learn/courses/30/lessons/181873
 */

function solution(my_string, alp) {
  const answer = my_string.replaceAll(alp, alp.toUpperCase());

  return answer;
}

const input = ["programmers", "p"];
// const input = ["lowercase", "x"];

console.log(solution(...input));
