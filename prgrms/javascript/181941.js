/*
문자 리스트를 문자열로 변환하기
https://school.programmers.co.kr/learn/courses/30/lessons/181941
 */

function solution(arr) {
  const answer = arr.join("");

  return answer;
}

const input = [["a", "b", "c"]];

console.log(solution(...input));
