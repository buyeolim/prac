/*
접두사인지 확인하기
https://school.programmers.co.kr/learn/courses/30/lessons/181906
 */

function solution(my_string, is_prefix) {
  const answer = my_string.substring(0, is_prefix.length) === is_prefix ? 1 : 0;

  return answer;
}

const input = ["banana", "ban"];
// const input = ["banana", "nan"];
// const input = ["banana", "abcd"];
// const input = ["banana", "bananan"];

console.log(solution(...input));
