/*
0 떼기
https://school.programmers.co.kr/learn/courses/30/lessons/181847
 */

function solution(n_str) {
  const answer = n_str.replace(/^0*/g, "");

  return answer;
}

const input = ["0010"];
// const input = ["854020"];

console.log(solution(...input));
