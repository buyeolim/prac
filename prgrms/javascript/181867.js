/*
x 사이의 개수
https://school.programmers.co.kr/learn/courses/30/lessons/181867
 */

function solution(myString) {
  const answer = myString.split("x").map((v) => v.length);

  return answer;
}

const input = ["oxooxoxxox"];
// const input = ["xabcxdefxghi"];

console.log(solution(...input));
