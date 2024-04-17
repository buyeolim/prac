/*
l로 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/181834
 */

function solution(myString) {
  const answer = myString.replace(/[a-k]/g, "l");

  return answer;
}

const input = ["abcdevwxyz"];
// const input = ["jjnnllkkmm"];

console.log(solution(...input));
