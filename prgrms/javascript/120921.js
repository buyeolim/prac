/*
문자열 밀기
https://school.programmers.co.kr/learn/courses/30/lessons/120921
 */

function solution(A, B) {
  let answer = -1;

  for (let i = 0; i < B.length; i++) {
    if (B === A) {
      answer = i;
      break;
    }
    const [b, ...rest] = B.split("");
    B = rest.join("") + b;
  }

  return answer;
}

const input = ["hello", "ohell"];
// const input = ["apple", "elppa"];
// const input = ["atat", "tata"];
// const input = ["abc", "abc"];

console.log(solution(...input));
