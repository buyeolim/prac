/*
공백으로 구분하기 1
https://school.programmers.co.kr/learn/courses/30/lessons/181869
 */

function solution(my_string) {
  const answer = my_string.split(" ");

  return answer;
}

const input = ["i love you"];
// const input = ["programmers"];

console.log(solution(...input));
