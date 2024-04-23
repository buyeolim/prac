/*
접미사 배열
https://school.programmers.co.kr/learn/courses/30/lessons/181909
 */

function solution(my_string) {
  const answer = [...my_string]
    .map((_, idx) => my_string.substring(idx))
    .sort();

  return answer;
}

const input = ["banana"];
// const input = ["programmers"];

console.log(solution(...input));
