/*
부분 문자열인지 확인하기
https://school.programmers.co.kr/learn/courses/30/lessons/181843
 */

function solution(my_string, target) {
  const answer = +my_string.includes(target);

  return answer;
}

// const input = ["banana", "ana"];
const input = ["banana", "wxyz"];

console.log(solution(...input));
