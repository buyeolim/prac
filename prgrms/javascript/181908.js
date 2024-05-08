/*
접미사인지 확인하기 
https://school.programmers.co.kr/learn/courses/30/lessons/181908
 */

function solution(my_string, is_suffix) {
  const answer = +(my_string.slice(-is_suffix.length) === is_suffix);

  return answer;
}

const input = ["banana", "ana"];
// const input = ["banana", "nan"];
// const input = ["banana", "wxyz"];
// const input = ["banana", "abanana"];

console.log(solution(...input));
